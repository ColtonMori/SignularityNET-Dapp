import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import ProgressBar from "../../../common/ProgressBar";
import { useStyles } from "./styles";
import ThirdPartyAIService from "./ThirdPartyAIService";\
import Purchase from "./Purchase";
import { serviceActions } from "../../../../Redux/actionCreators";

class ServiceDemo extends Component {
  state = {
    error: "error state message",
    progressText: ["Purchase", "Configure", "Results"],
    progressText: ["Configure", "Results"],
    freeCallsRemaining: 0,
  };

  componentDidMount = () => {
    this.fetchFreeCallsUsage();
  };

  fetchFreeCallsUsage = async () => {
    const { service, fetchMeteringData } = this.props;
    try {
      const usageData = await fetchMeteringData({
        orgId: service.org_id,
        serviceId: service.service_id,
        username: "n.vin95@gmail.com",
      });
      console.log("usage data", usageData);
    } catch (err) {
      console.log("errrrrrrrrrrrrrr", err);
    }
  };

  render() {
    const { classes, service, isComplete } = this.props;
    const { progressText } = this.state;
    return (
      <div className={classes.demoExampleContainer}>
        <h4>Process</h4>
        <ProgressBar activeSection={isComplete ? 2 : 1} progressText={progressText} />
        <Purchase />
        <ThirdPartyAIService service_id={service.service_id} org_id={service.org_id} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isComplete: state.serviceReducer.serviceMethodExecution.isComplete,
});

const mapDispatchToProps = dispatch => ({
  fetchMeteringData: args => dispatch(serviceActions.fetchMeteringData({ ...args })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ServiceDemo));
