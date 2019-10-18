import React, { Fragment, useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import StyledButton from "../../../../../../common/StyledButton";
import { useStyles } from "./styles";
import NextAction from "./NextAction";
import { channelInfo, anyGeneralWallet } from "../../../../../../../Redux/reducers/UserReducer";
import TopupWallet from "./TopupWallet";
import CreateWallet from "./CreateWallet";
import { paymentActions } from "../../../../../../../Redux/actionCreators";
import LinkProvider from "./LinkProvider";
import { userProfileRoutes } from "../../../../../../UserProfile";
import { orderTypes } from "./PaymentPopup";

export const paymentTitles = {
  CREATE_WALLET: "Create General Account Wallet",
  TOPUP_WALLET: "Topup General Account Wallet",
  CREATE_CHANNEL: "Link Provider to General Account Wallet",
};

const GeneralAccountWallet = props => {
  const { classes, channelInfo, handleContinue, paypalInProgress, anyGeneralWallet } = props;

  const [showCreateWalletPopup, setShowCreateWalletPopup] = useState(false);
  const [showTopupWallet, setShowTopupWallet] = useState(false);
  const [showLinkProvider, setShowLinkProvider] = useState(false);

  useEffect(() => {
    switch (paypalInProgress.orderType) {
      case orderTypes.CREATE_WALLET: {
        setShowCreateWalletPopup(true);
        return;
      }
      case orderTypes.TOPUP_WALLET: {
        setShowTopupWallet(true);
        return;
      }
      case orderTypes.CREATE_CHANNEL: {
        setShowLinkProvider(true);
        return;
      }
    }
  }, [paypalInProgress.orderType]);

  const anyPendingTxn = () => {
    const { wallet } = props;
    const anyPending = wallet.transactions && wallet.transactions.some(txn => txn.status === "PENDING");
    return anyPending;
  };

  return (
    <Fragment>
      <div className={classes.btnsContainer}>
        <Link to={userProfileRoutes.TRANSACTIONS.path} className={classes.routerLink}>
          <StyledButton type="transparentBlueBorderDisable" btnText="transaction history" />
        </Link>
        <StyledButton
          type="transparentBlueBorderDisable"
          btnText="top up wallet"
          onClick={() => setShowTopupWallet(true)}
        />
        <NextAction
          channel={channelInfo}
          setShowCreateWalletPopup={setShowCreateWalletPopup}
          setShowLinkProvider={setShowLinkProvider}
          handleContinue={handleContinue}
          anyPendingTxn={anyPendingTxn}
          anyGeneralWallet={anyGeneralWallet}
        />
      </div>
      <CreateWallet visible={showCreateWalletPopup} setVisibility={setShowCreateWalletPopup} />
      <TopupWallet visible={showTopupWallet} setVisibility={setShowTopupWallet} />
      <LinkProvider visible={showLinkProvider} setVisibility={setShowLinkProvider} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  channelInfo: channelInfo(state),
  paypalInProgress: state.paymentReducer.paypalInProgress,
  wallet: state.userReducer.wallet,
  anyGeneralWallet: anyGeneralWallet(state),
});

const mapDispatchToProps = dispatch => ({
  fetchOrderDetails: orderId => dispatch(paymentActions.fetchOrderDetails(orderId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(GeneralAccountWallet));