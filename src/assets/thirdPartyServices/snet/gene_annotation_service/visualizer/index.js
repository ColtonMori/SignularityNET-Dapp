import React, { Fragment, useState, useEffect } from "react";
import removeSvg from "../assets/remove.svg";
import addSvg from "../assets/add.svg";
import filterSvg from "../assets/filter.svg";
import "cytoscape-context-menus/cytoscape-context-menus.css";
import $ from "jquery";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import CategoryIcon from "@material-ui/icons/CategoryOutlined";
import AdjustIcon from "@material-ui/icons/Adjust";
import CameraAltIcon from "@material-ui/icons/CameraAltOutlined";
import CloudDownloadIcon from "@material-ui/icons/CloudDownloadOutlined";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HelpIcon from "@material-ui/icons/HelpOutline";
import { useSnackbar } from "notistack";
import "./style.css";

const cytoscape = require("cytoscape");
const cola = require("cytoscape-cola");
const contextMenus = require("cytoscape-context-menus");
const Color = require("color");
contextMenus(cytoscape, $);

const AnnotationGroups = [
  {
    group: "gene-go-annotation",
    subgroups: [
      { subgroup: "cellular_component", color: "#F57C00" },
      { subgroup: "molecular_function", color: "#F1C40F" },
      { subgroup: "biological_process", color: "#8BC34A" },
    ],
  },
  {
    group: "gene-pathway-annotation",
    color: "#9B59B6",
    subgroups: [{ subgroup: "Reactome" }],
  },
  {
    group: "biogrid-interaction-annotation",
    color: "#3498DB",
    subgroups: [],
  },
];

const CYTOSCAPE_COLA_CONFIG = {
  name: "cola",
  // fit: true,
  animate: true,
  padding: 10,
  nodeSpacing: 10,
  maxSimulationTime: 3000,
  ungrabifyWhileSimulating: true,
  randomize: true,
  avoidOverlap: true,
  handleDisconnected: true,
  infinite: false,
};

const CYTOSCAPE_STYLE = [
  {
    selector: "node",
    css: {
      content: "data(id)",
      shape: "round-rectangle",
      width: "mapData(id.length, 0, 20, 50, 300)",
      height: 40,
      color: "#fff",
      "text-wrap": "wrap",
      "text-max-width": "350px",
      "text-valign": "center",
      "text-halign": "center",
      "background-color": "#565656",
      "text-outline-color": "#565656",
      "text-outline-width": 1,
    },
  },
  {
    selector: n => n.data().subgroup === "Genes",
    style: {
      shape: "ellipse",
      height: 75,
      width: 75,
    },
  },
  {
    selector: 'node[subgroup="Uniprot"]',
    css: { shape: "hexagon" },
  },
  {
    selector: 'node[subgroup="ChEBI"]',
    css: {
      shape: "diamond",
      height: 75,
    },
  },
  {
    selector: "node:selected",
    css: {
      "border-width": 5,
      "border-color": "#87bef5",
    },
  },
  {
    selector: "edge",
    css: {
      "curve-style": "straight",
      "line-color": "#ccc",
      width: 4,
    },
  },
  {
    selector: e => e.data().group.includes("gene-go-annotation"),
    css: {
      "target-arrow-shape": "triangle",
      "target-arrow-fill": "filled",
    },
  },
];

const Visualizer = props => {
  const { enqueueSnackbar } = useSnackbar();
  cytoscape.use(cola);
  const cy_wrapper = React.createRef();
  const [cy, setCy] = useState(undefined);
  const [layout, setLayout] = useState(undefined);
  const [filteredElements, setFilteredElements] = useState(undefined);
  const [contextMenu, setContextMenu] = useState(undefined);
  const nodeTypes = props.graph.nodes
    .map(n => n.data.subgroup)
    .filter((s, i, arr) => {
      return arr.indexOf(s) === i && ["Genes", "Uniprot", "ChEBI"].includes(s);
    });

  const [visibleNodeTypes, setVisibleNodeTypes] = useState(["Genes", "Uniprot", "ChEBI"]);
  const [visibleAnnotations, setVisibleAnnotations] = useState(["main%"]);
  const [selectedNode, setSelectedNode] = useState({
    node: null,
    position: null,
  });
  const [selectedEdge, setSelectedEdge] = useState({
    pubmed: null,
  });
  const [searchToken, setSearchToken] = useState(undefined);

  useEffect(function() {
    setCy(
      cytoscape({
        container: cy_wrapper.current,
        hideEdgesOnViewport: true,
        wheelSensitivity: 0.3,
      })
    );
  }, []);

  useEffect(
    function() {
      cy && toggleAnnotationVisibility(visibleAnnotations);
    },
    [visibleAnnotations, visibleNodeTypes, cy]
  );

  useEffect(
    function() {
      if (!cy) return;
      if (filteredElements) {
        cy.batch(() => filteredElements.style({ opacity: 1 }));
        cy.batch(() =>
          cy
            .nodes()
            .difference(filteredElements)
            .style({ opacity: 0.1 })
        );
        cy.edges()
          .difference(filteredElements)
          .style({ opacity: 0 });
        contextMenu.showMenuItem("add");
        contextMenu.showMenuItem("remove");
        contextMenu.hideMenuItem("filter");
      } else {
        cy.batch(() => cy.elements().style({ opacity: 1 }));
        contextMenu.showMenuItem("filter");
        contextMenu.hideMenuItem("add");
        contextMenu.hideMenuItem("remove");
      }
    },
    [filteredElements]
  );

  useEffect(
    function() {
      if (cy) {
        cy.style([
          ...CYTOSCAPE_STYLE,
          ...assignColorToAnnotations(),
          {
            selector: n => n.data().group.includes("main"),
            style: {
              "background-fill": "solid",
              "background-color": "blue",
              "text-outline-color": "blue",
            },
          },
        ]);
        var options = {
          menuItems: [
            {
              id: "filter",
              content: "Filter",
              selector: "node",
              onClickFunction: e => {
                addToFilter(e.target.data().id);
              },
              hasTrailingDivider: true,
              image: { src: filterSvg, width: 18, height: 18, x: 8, y: 8 },
            },
            {
              id: "add",
              content: "Add",
              selector: "node",
              image: { src: addSvg, width: 18, height: 18, x: 8, y: 8 },
              onClickFunction: e => addToFilter(e.target.data().id),
              show: false,
            },
            {
              id: "remove",
              content: "Remove",
              selector: "node",
              image: { src: removeSvg, width: 18, height: 18, x: 8, y: 8 },
              onClickFunction: e => removeFromFilter(e.target.data().id),
              show: false,
            },
          ],
          menuItemClasses: ["context-menu-item"],
          contextMenuClasses: ["context-menu"],
        };
        setContextMenu(cy.contextMenus(options));
      }
    },
    [cy]
  );

  useEffect(
    function() {
      if (layout) layout.run();
    },
    [layout]
  );

  const randomLayout = () => {
    setLayout(cy.layout(CYTOSCAPE_COLA_CONFIG));
  };

  const breadthFirstLayout = () => {
    setLayout(cy.layout({ name: "breadthfirst" }));
  };

  const concentricLayout = () => {
    setLayout(
      cy.layout({
        name: "concentric",
        concentric: node => node.degree(),
        levelWidth: () => 3,
      })
    );
  };

  const takeScreenshot = () => {
    const link = document.createElement("a");
    link.setAttribute("href", cy.jpg());
    link.setAttribute("download", "mozi-graph.jpg");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const registerEventListeners = () => {
    cy.nodes()
      .on("select", e =>
        setSelectedNode({
          node: e.target.data(),
          position: e.target.renderedPosition(),
        })
      )
      .on("unselect", e => setSelectedNode({ node: null }));

    cy.edges()
      .on("select", e => {
        let pubMedIds = e.target.data().pubmedId.split(",");
        pubMedIds[0] !== ""
          ? setSelectedEdge({
              pubmed: pubMedIds,
            })
          : setSelectedEdge({ pubmed: null });
      })
      .on("unselect", e => setSelectedEdge({ pubmed: null, position: null }));
  };

  const clearFilter = () => {
    setFilteredElements(undefined);
  };

  const removeFromFilter = id => {
    const hood = cy.getElementById(id).union(cy.getElementById(id).connectedEdges());
    setFilteredElements(eles => eles.difference(hood));
  };

  const addToFilter = id => {
    const hood = cy.getElementById(id).closedNeighborhood();
    setFilteredElements(eles => (eles ? eles.union(hood) : hood));
  };

  const downloadGraphJSON = () => {
    let exportJson = {
      data: { name: "Annotation Service Export" },
      elements: cy.json().elements,
    };
    let json = JSON.stringify(exportJson);
    const link = document.createElement("a");
    let file = new Blob([json], { type: "text/json" });
    link.href = URL.createObjectURL(file);
    link.download = `annotation-graph.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const formatDescription = description => {
    if (!description) return "";
    return description.includes("https://") || description.includes("http://") ? (
      <a href={description} rel="noopener noreferrer" target="_blank">
        Learn more
      </a>
    ) : (
      description
    );
  };

  const toggleAnnotationVisibility = visibleAnnotations => {
    const { nodes, edges } = props.graph;
    const visibleNodes = nodes.filter(n => {
      const { group, subgroup } = n.data;
      return (
        visibleAnnotations.some(a => {
          const [g, sg] = a.split("%");
          return (
            group.includes(g) &&
            (["Genes", "Uniprot", "ChEBI"].includes(subgroup)
              ? visibleNodeTypes.includes(subgroup)
              : sg
              ? sg === subgroup
              : true)
          );
        }) || group.includes("main")
      );
    });
    const visibleEdges = edges.filter(e => {
      const { source, target } = e.data;
      return visibleNodes.some(n => n.data.id === source) && visibleNodes.some(n => n.data.id === target);
    });
    cy.json({ elements: { nodes: visibleNodes } });
    cy.add(visibleEdges);
    randomLayout();
    registerEventListeners();
  };

  const getAnnotationPercentage = (group, subgroup) => {
    const { nodes } = props.graph;
    let filteredNodes = group ? nodes.filter(n => n.data.group.includes(group)) : nodes;
    filteredNodes = subgroup ? filteredNodes.filter(n => n.data.subgroup === subgroup) : filteredNodes;
    return (filteredNodes.length * 100) / nodes.length;
  };

  const assignColorToAnnotations = () => {
    const styles = AnnotationGroups.reduce((acc, annotation) => {
      const subGroupColors = annotation.subgroups.map(sg => {
        return {
          selector: n => n.data().group.includes(annotation.group) && n.data().subgroup === sg.subgroup,
          style: {
            "background-color": annotation.color || sg.color,
            "text-outline-color": annotation.color || sg.color,
          },
        };
      });
      return annotation.color
        ? [
            ...acc,
            {
              selector: n => n.data().group.includes(annotation.group),
              style: {
                "background-color": annotation.color,
                "text-outline-color": annotation.color,
                "line-color": Color(annotation.color)
                  .lighten(0.6)
                  .hex(),
              },
            },
            ...subGroupColors,
          ]
        : [...acc, ...subGroupColors];
    }, []);

    const multipleGroupsStyle = {
      selector: n => n.data().group.length > 1,
      style: {
        "background-fill": "linear-gradient",
        "background-gradient-direction": "to-bottom-right",
        "text-outline-color": "#565656",
        "background-gradient-stop-colors": n =>
          n.data().group.reduce((acc, group) => {
            if (group === "main") return acc;
            const color = AnnotationGroups.find(g => g.group === group).color || "#565656";
            return `${acc} ${color} ${color}`;
          }, ""),
        "background-gradient-stop-positions": n => {
          const group = n.data().group.filter(g => g !== "main");
          const width = 100 / group.length;
          let value = "0%";
          for (let i = 1; i < group.length; i++) {
            value += ` ${width * i}% ${width * i}%`;
          }
          return value + " 100%";
        },
      },
    };

    return [...styles, multipleGroupsStyle];
  };

  const search = id => {
    cy.batch(function() {
      const selected = cy.nodes(`[id @= "${id}"]`);
      if (selected.size()) {
        selected.select();
        cy.zoom(2);
        cy.center(selected);
      } else {
        enqueueSnackbar("No matching results.", {
          variant: "warning",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
      }
    });
  };

  const renderProgressBar = (percentage, color) => {
    return (
      <div className="percentage-wrapper">
        <div
          className="percentage-bar"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
          }}
        />
      </div>
    );
  };

  const renderDescriptionBox = (title, content) => {
    return (
      <div className="description-wrapper">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    );
  };

  const renderFilterControls = () => {
    return (
      <div className="filter-controls">
        <Tooltip placement="bottom" title="Remove Filter">
          <Button onClick={clearFilter} color="secondary" variant="contained">
            <ClearIcon />
            Remove filter
          </Button>
        </Tooltip>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="visualizer-wrapper" ref={cy_wrapper} />
      <div className="visualizer-controls-wrapper">
        <Tooltip placement="right" title={<Typography variant="body1">Go back</Typography>}>
          <IconButton onClick={props.onClose}>
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <Tooltip placement="right" title={<Typography variant="body1">Randomize layout</Typography>}>
          <IconButton onClick={randomLayout}>
            <ShuffleIcon />
          </IconButton>
        </Tooltip>
        <Tooltip placement="right" title={<Typography variant="body1">Breadth-first layout</Typography>}>
          <IconButton onClick={breadthFirstLayout}>
            <CategoryIcon />
          </IconButton>
        </Tooltip>
        <Tooltip placement="right" title={<Typography variant="body1">Concentric layout</Typography>}>
          <IconButton onClick={concentricLayout}>
            <AdjustIcon />
          </IconButton>
        </Tooltip>
        <Tooltip placement="right" title={<Typography variant="body1">Save screenshot</Typography>}>
          <IconButton onClick={takeScreenshot}>
            <CameraAltIcon />
          </IconButton>
        </Tooltip>
        <Tooltip placement="right" title={<Typography variant="body1">Download graph as JSON</Typography>}>
          <IconButton onClick={downloadGraphJSON}>
            <CloudDownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          placement="right"
          title={
            <Typography variant="body1">
              <p>Use the checkboxes to the right to filter the graph by annotations and node types.</p>
              <p>Right click on a node to perform actions on it.</p>
              <p>You may download the graph JSON and view it on Cytoscape desktop.</p>
              <p>The search is case sensitive.</p>
            </Typography>
          }
        >
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="annotation-toggle-wrapper">
        <Paper style={{ display: "flex", marginBottom: 15, padding: 5, paddingLeft: 15 }}>
          <InputBase
            style={{ flexGrow: 1 }}
            placeholder="Node ID"
            onChange={e => setSearchToken(e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter" && searchToken) search(searchToken);
            }}
          />
          <IconButton
            onClick={() => {
              if (searchToken) search(searchToken);
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="genes">
            <Typography>Node Types</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {nodeTypes.map(n => (
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked={visibleNodeTypes.includes(n)}
                    onChange={e => {
                      return setVisibleNodeTypes(va =>
                        e.target.checked ? (va.includes(n) ? va : [...va, n]) : va.filter(a => a !== n)
                      );
                    }}
                  />
                }
                label={n}
                key={n}
              />
            ))}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} id="annotations">
            <Typography>Annotations</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              {AnnotationGroups.filter(a => props.annotations.includes(a.group)).map((a, i) => {
                return (
                  <div key={a}>
                    <span>
                      <Typography variant="body1" gutterBottom>
                        {a.group.includes("biogrid") && (
                          <Checkbox
                            color="primary"
                            style={{ padding: 0 }}
                            onChange={e => {
                              const key = `${a.group}%`;
                              return setVisibleAnnotations(va =>
                                e.target.checked ? (va.includes(key) ? va : [...va, key]) : va.filter(a => a !== key)
                              );
                            }}
                          />
                        )}

                        {a.group}
                      </Typography>
                      {renderProgressBar(getAnnotationPercentage(a.group), a.color || "#565656")}
                    </span>
                    {a.subgroups
                      .filter(s => props.annotations.includes(s.subgroup))
                      .map(s => (
                        <span style={{ paddingLeft: 15 }} key={s}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                color="primary"
                                onChange={e => {
                                  const key = `${a.group}%${s.subgroup}`;
                                  return setVisibleAnnotations(va =>
                                    e.target.checked
                                      ? va.includes(key)
                                        ? va
                                        : [...va, key]
                                      : va.filter(a => a !== key)
                                  );
                                }}
                              />
                            }
                            label={
                              <span>
                                {s.subgroup}
                                {renderProgressBar(getAnnotationPercentage(a.group, s.subgroup), a.color || s.color)}
                              </span>
                            }
                          />
                        </span>
                      ))}
                  </div>
                );
              })}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      {selectedNode.node &&
        renderDescriptionBox(
          `${selectedNode.node.name} ( ${selectedNode.node.id.slice(selectedNode.node.id.indexOf(":") + 1)} )`,
          formatDescription(selectedNode.node.definition)
        )}
      {selectedEdge.pubmed &&
        renderDescriptionBox(
          "PubMed Id",
          selectedEdge.pubmed.map((pubId, i) => (
            <p key={i}>
              {i + 1} -{" "}
              <a key={pubId[pubId.length - 5]} href={pubId} rel="noopener noreferrer" target="_blank">
                Learn more
              </a>
            </p>
          ))
        )}
      {filteredElements && renderFilterControls()}
    </Fragment>
  );
};

export default Visualizer;
