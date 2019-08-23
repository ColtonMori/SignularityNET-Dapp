import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import StyledDropdown from "../../common/StyledDropdown";
import { useStyles } from "./styles";
import { walletTypes } from "../../../Redux/actionCreators/UserActions";
import { userActions } from "../../../Redux/actionCreators";
import MetamaskDetails from "./MetamaskDetails";
import { initSdk } from "../../../utility/sdk";
import AlertBox, { alertTypes } from "../../common/AlertBox";

const walletDropdownList = Object.entries(walletTypes).map(([key, value]) => ({ value, label: key }));

const UserProfileAccount = ({ updateWallet, classes, wallet }) => {
  const handleWalletTypeChange = async event => {
    const { value } = event.target;
    if (value === walletTypes.METAMASK) {
      const sdk = await initSdk();
      const address = sdk.account.address;
      //1. To be replaced with wallet API
      sessionStorage.setItem("wallet", JSON.stringify({ type: walletTypes.METAMASK, address }));
      //till here(1)
      updateWallet({ type: value, address });
      return;
    }
    //2. to be removed once wallet API is available
    sessionStorage.removeItem("wallet");
    //till here(2)
    updateWallet({ type: value });
  };

  const walletDetails = {
    [walletTypes.METAMASK]: <MetamaskDetails />,
  };

  return (
    <Grid container spacing={10} className={classes.accountMainContainer}>
      <Grid xs={12} sm={12} md={3} lg={3} className={classes.accountContainer}>
        <h3>Payment / Transfer Method</h3>
        <div className={classes.accountWrapper}>
          <div className={classes.dropDown}>
            <span className={classes.dropDownTitle}>Wallet</span>
            <StyledDropdown
              labelTxt={"Select a Wallet"}
              list={walletDropdownList}
              value={wallet.type}
              onChange={handleWalletTypeChange}
            />
          </div>
          {walletDetails[wallet.type] || (
            <AlertBox type={alertTypes.INFO} message="Please select a wallet to proceed" />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  wallet: state.userReducer.wallet,
});

const mapDispatchToProps = dispatch => ({
  updateWallet: args => dispatch(userActions.updateWallet(args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(UserProfileAccount));
