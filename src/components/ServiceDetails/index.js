import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import TitleCard from "./TitleCard";
import PricingDetails from "./PricingDetails";
import StyledTabs from "./StyledTabs";
import AboutService from "./AboutService";
import { useStyles } from "./styles";
import { serviceActions } from "../../Redux/actionCreators";
import { PricingStrategy } from "../../utility/PricingStrategy.js";

class ServiceDetails extends Component {
  state = {
    service_row_id: "",
    service: {},
    activeTab: 0,
  };

  componentDidMount = async () => {
    if (!this.props.services || this.props.services.length === 0) {
      this.populateServiceData(this.props.pagination);
      await this.props.fetchService(this.props.pagination);
      return;
    }
    this.populateServiceData();
  };

  componentDidUpdate = async () => {
    const { service } = this.state;
    if (!service || (Object.entries(service).length === 0 && service.constructor === Object)) {
      await this.props.fetchService(this.props.pagination);
      this.populateServiceData();
    }
  };

  populateServiceData = () => {
    const { service_row_id } = this.props.match.params;
    let service = this.props.services.filter(el => el.service_row_id === Number(service_row_id))[0];

    if (typeof service !== "undefined") {
      const pricing = service["pricing"];
      let pricingJSON = typeof pricing === "undefined" || pricing === null ? JSON.stringify(service) : pricing;
      service.pricing_strategy = new PricingStrategy(pricingJSON);
    }

    this.setState({ service_row_id, service });
  };

  handleTabChange = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { classes } = this.props;
    const { service, activeTab } = this.state;

    const tabs = [{ name: "About", activeIndex: 0, component: <AboutService service={service} /> }];

    if (!service) {
      return null;
    }

    return (
      <Grid container spacing={24} className={classes.serviceDetailContainer}>
        <TitleCard org_id={service.org_id} display_name={service.display_name} img_url={service.display_image_url} />
        <PricingDetails price_model={service.price_model} price_strategy={service.pricing_strategy} />
        <StyledTabs tabs={tabs} activeTab={activeTab} onTabChange={this.handleTabChange} />
      </Grid>
    );
  }
}

ServiceDetails.defaultProps = {
  services: [],
};

const mapStateToProps = state => ({
  services: state.serviceReducer.services,
  pagination: state.serviceReducer.pagination,
});

const mapDispatchToProps = dispatch => ({
  fetchService: pagination => dispatch(serviceActions.fetchService(pagination)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ServiceDetails));
