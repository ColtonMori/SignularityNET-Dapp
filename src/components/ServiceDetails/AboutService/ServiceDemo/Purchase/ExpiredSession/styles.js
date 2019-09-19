export const useStyles = theme => ({
  ExpiredSessionContainer: {
    textAlign: "center",
    "& button": {
      marginTop: 36,
      marginRight: "0 !important",
      paddingBottomg: 15,
    },
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
  paymentChannelDropDown:{
    width: 278,
    padding: '0 10px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(25,25,25,0.32)',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '& .MuiFormControl-root': { width:'90%' }
  },
  dropDownTitle:{
    padding: '0 5px',
    position: 'absolute',
    top: -9,
    left: 10,    
    backgroundColor: theme.palette.text.white,
    color: theme.palette.text.dialogTitle,
    fontSize: 12,
    letterSpacing: 0.4
  },
  walletIcon: { color: theme.palette.text.lightShadedGray }
});
