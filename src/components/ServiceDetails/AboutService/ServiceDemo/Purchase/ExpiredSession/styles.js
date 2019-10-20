export const useStyles = theme => ({
  mainContainer: {
    paddingTop: 35,
    "& button": {
      marginTop: 36,
      marginRight: "0 !important",
      paddingBottomg: 15,
    },
  },
  description: {
    paddingLeft: 20,
    margin: 0,
    color: theme.palette.text.alertBoxColor,
    fontFamily: theme.typography.primary.main,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "20px",
  },
  PurchaseFlowContainer: { padding: "0 50px 50px" },
  PurchaseFlowDescription: {
    margin: "33px 0 45px",
    color: theme.palette.text.alertBoxColor,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "21px",
  },
  paymentInfoCard: {
    marginBottom: 25,
    display: "flex",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginTop: 35,
    textAlign: "center",
    justifyContent: "center",
    "& div": {
      display: "inline-block",
    },
  },
  channelSelectionTitle: {
    marginBottom: 5,
    display: "inline-block",
    color: theme.palette.text.mediumShadeGray,
    fontSize: 16,
    fontWeight: 600,
  },
  tooltip: { fontSize: 14 },
  paymentChannelAndDetails: {
    marginTop: 35,
    display: "flex",
    "& > p": { margin: "0 0 0 40px" },
    "@media(max-width:940px)": { flexDirection: "column" },
  },
  paymentChannelDropDownContainer: {
    display: "flex",
    marginRight: 40,
    "& fieldset": { display: "none" },
    "@media(max-width:940px)": { marginBottom: 30 },
  },
  infoIconContainer: {
    marginRight: 10,
    alignSelf: "center",
    color: theme.palette.text.lightShadedGray,
    fontSize: 18,
  },
  paymentChannelDropDown: {
    width: 278,
    padding: "0 10px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(25,25,25,0.32)",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& .MuiFormControl-root": { width: "90%" },
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
  walletIcon: { color: theme.palette.text.lightShadedGray },
  btnsContainer: {
    marginTop: 64,
    textAlign: "center",
    "& button": { marginRight: "32px" },
  },
});
