import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";

import StyledDropdown from "../../../../common/StyledDropdown";

const useStyles = makeStyles(theme => ({
    sortBySection: {
        display: "flex",
        alignItems: "flex-end",
    },
    sortbyTxt: {
        padding: "0 10px 5px 0",
        color: theme.palette.text.lightShadedGray,
        fontSize: 14,
    },
    servicesCount: {
        color: theme.palette.text.lightShadedGray,
        fontSize: 16,
    },
    iconsContainer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        "& button": {
            paddingLeft: 18,
            border: "none",
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            "& span": {
                color: theme.palette.text.lightShadedGray,
                fontSize: 17,
            },
        },
    },
}));

const ToolBar = ({ listView }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={24} className={classes.toolBar}>
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.sortBySection}>
                <span className={classes.sortbyTxt}>Sort by:</span>
                <StyledDropdown labelTxt="Featured" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className={classes.iconsContainer}>
                <span className={classes.servicesCount}>33 services &nbsp;&nbsp;&nbsp; | </span>
                <button>
                    <Icon className={clsx(classes.icon, "fa fa-search")} />
                </button>
                {listView ? (
                    <button>
                        <Icon className={clsx(classes.icon, "fa fa-th")} />
                    </button>
                ) : (
                    <button>
                        <Icon className={clsx(classes.icon, "fa fa-th-list")} />
                    </button>
                )}
            </Grid>
        </Grid>
    );
};

export default ToolBar;
