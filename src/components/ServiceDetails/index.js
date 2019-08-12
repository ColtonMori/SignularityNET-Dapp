import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import TitleCard from "./TitleCard";
import PricingDetails from "./PricingDetails";
import StyledTabs from "./StyledTabs";
import AboutService from "./AboutService";
import InstallAndRunService from "./InstallAndRunService";
import { useStyles } from "./styles";
import { serviceActions } from "../../Redux/actionCreators";
import { serviceDetails } from "../../Redux/reducers/ServiceReducer";
import { generateFilterObject } from "../../utility/constants/Pagination";

class ServiceDetails extends Component {
  state = {
    activeTab: 0,
  };

  componentDidMount() {
    this.fetchServices();
  }

  fetchServices = () => {
    const { service, pagination, fetchServices, fetchServiceMetadata, match } = this.props;
    const { orgId, serviceId } = match.params;
    if (service) {
      return;
    }
    const filterData = generateFilterObject({ org_id: [orgId], service_id: [serviceId] });
    fetchServiceMetadata({ orgId, serviceId });
    fetchServices(pagination, filterData);
  };

  handleTabChange = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    const { classes, service } = this.props;

    if (!service) {
      return null;
    }

    const { activeTab } = this.state;

    const tabs = [
      {
        name: "About",
        activeIndex: 0,
        component: <AboutService service={service} />,
      },
      { name: "Install and Run", activeIndex: 1, component: <InstallAndRunService /> },
    ];

    return (
      <Grid container spacing={24} className={classes.serviceDetailContainer}>
        <TitleCard
          org_id={service.org_id}
          display_name={service.display_name}
          img_url={JSON.parse(service.assets_url).hero_image}
          star_rating={service.service_rating ? JSON.parse(service.service_rating).rating : 0}
          totalRating={service.service_rating ? JSON.parse(service.service_rating).total_users_rated : 0}
        />
        <PricingDetails price_strategy={service.pricing_strategy} />
        <StyledTabs tabs={tabs} activeTab={activeTab} onTabChange={this.handleTabChange} />
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  service: serviceDetails(state, ownProps.match.params),
  pagination: state.serviceReducer.pagination,
});

const mapDispatchToProps = dispatch => ({
  fetchServiceMetadata: args => dispatch(serviceActions.fetchServiceMetadata({ ...args })),
  fetchServices: (pagination, filterData) => dispatch(serviceActions.fetchService(pagination, filterData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ServiceDetails));
