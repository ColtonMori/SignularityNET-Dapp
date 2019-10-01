import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import isEmpty from "lodash/isEmpty";

import { useStyles } from "./styles";
import PurchaseAlert from "./PurchaseAlert";
import { alertTypes } from "../../../../../../../../common/AlertBox";

class Purchase extends Component {
  state = { alert: {} };

  componentDidMount = () => {
    if (!isEmpty(this.props.paypalInProgress)) {
      this.executePayment();
    }
  };

  executePayment = async () => {
    try {
      await this.props.executePayment();
    } catch (error) {
      this.setState({
        alert: { type: alertTypes.ERROR, message: "Paypal returned some error. Please Retry or contact support." },
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { alert } = this.state;
    if (!isEmpty(alert)) {
      return <PurchaseAlert alert={alert} />;
    }

    return (
      <div className={classes.purchaseContainer}>
        <div className={classes.circularProgressContainer}>
          <CircularProgress className={classes.circularProgress} />
        </div>
        <Typography variant="body1" className={classes.purchaseDesc}>
          Please wait while your transaction is being recorded into the block chain. The execution will proceed once its
          done. Please don’t close or refresh the window.
        </Typography>
      </div>
    );
  }
}
export default withStyles(useStyles)(Purchase);

//({ classes, error })
