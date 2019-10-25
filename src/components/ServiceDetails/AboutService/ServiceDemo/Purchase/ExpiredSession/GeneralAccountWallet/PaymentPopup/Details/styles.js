export const useStyles = theme => ({
  deatilsTabDesc: {
    padding: "0 20px",
    color: theme.palette.text.mediumShadeGray,
    fontFamily: theme.typography.primary.main,
    fontSize: 16,
    lineHeight: "24px",
  },
  providerAndBalanceInfo: {
    padding: 25,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:480px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  providerDetails: {
    display: "flex",
    alignItems: "center",
    "& div": {
      marginRight: 10,
    },
    "@media(max-width:480px)": { marginBottom: 25 },
  },
  providerName: {
    color: theme.palette.text.darkShadedGray,
    fontFamily: theme.typography.primary.main,
    fontSize: 21,
    letterSpacing: 0.15,
  },
  noOfService: {
    color: theme.palette.text.lightShadedGray,
    fontFamily: theme.typography.primary.main,
    fontSize: 16,
  },
  dropDownTextfield: {
    padding: "20px 55px 30px",
    "@media(max-width:480px)": { padding: "20px 0 30px" },
  },
  dropDownTitle: {
    padding: "0 5px",
    position: "absolute",
    top: -11,
    left: 10,
    backgroundColor: theme.palette.text.white,
    color: theme.palette.text.dialogTitle,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  infoIconContainer: {
    marginRight: 10,
    alignSelf: "center",
    color: theme.palette.text.lightShadedGray,
    fontSize: 20,
  },
  paymentTypeDropDownContainer: {
    display: "flex",
    "& fieldset": { display: "none" },
  },
  paymentTypeDropDown: {
    width: "100%",
    padding: "0 10px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(25,25,25,0.32)",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& .MuiFormControl-root": {
      width: "100%",
      padding: "12px 0",
      "& .MuiOutlinedInput-input": { padding: "7px 0 !important" },
      "& fieldset": { color: `${theme.palette.text.grayTitleText} !important` },
    },
  },
  purchaseAmtTextfield: {
    paddingLeft: 30,
    "& > div": {
      width: "100%",
      marginTop: 25,
    },
    "& p": {
      marginLeft: 15,
      fontFamily: theme.typography.primary.main,
      fontSize: 12,
      color: "#444",
      letterSpacing: 0.4,
      lineHeight: "16px",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
