export const useStyles = theme => ({
  accountMainContainer: { 
    width: '100%',
    margin: "13px 0 50px" 
  },
  accountContainer: {
    paddingBottom: 52,
    borderRadius: 4,
    backgroundColor: theme.palette.text.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "& h3": {
      padding: "0 22px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.text.gray1,
      margin: 0,
      color: theme.palette.text.darkShadedGray,
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  accountWrapper: {
    padding: "0 22px",
    display: "flex",
    flexDirection: "column",
    "& button": { alignSelf: "center" },
  },
  dropDown: {
    padding: "11px 18px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(25,25,25,0.32)",
    borderRadius: 4,
    marginTop: 26,
    position: "relative",
    "& > div": {
      width: "100%",
      "& select": { color: theme.palette.text.alertBoxColor },
    },
  },
  dropDownTitle: {
    padding: "0 5px",
    position: "absolute",
    top: "-10px",
    left: 10,
    background: theme.palette.text.white,
    color: theme.palette.text.black1,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  accountDetails: {
    marginTop: 32,
    "& div": {
      display: "flex",
      margin: "7px 0",
      "& div": {
        width: "56%",
        display: "inline-block",
        "& svg": {
          color: theme.palette.text.lightShadedGray,
          fontSize: 20,
          marginRight: 11,
          verticalAlign: "middle",
        },
        "& span": {
          width: "auto",
          display: "inline-block",
          color: theme.palette.text.mediumShadeGray,
          fontSize: 16,
          lineHeight: "22px",
        },
      },
      "& span": {
        width: "44%",
        display: "inline-block",
        color: theme.palette.text.darkShadedGray,
        fontSize: 16,
      },
    },
  },
  walletId: {
    fontSize: "14px !important",
    wordBreak: "break-all",
  },
  bgBox: {
    alignItems: "center",
    "& > span": {
      padding: "14px 20px",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: theme.palette.text.verticalTabLeftBorder,
      borderRadius: 4,
      backgroundColor: theme.palette.text.cardBackground,
    },
  },
  tabsHeader: {
    backgroundColor: "transparent",
    color: theme.palette.text.lightShadedGray,
    boxShadow: "none",
    "& button": {
      minWidth: "auto",
      padding: 0,
      marginRight: 40,
      fontSize: 18,
      textTransform: "none",
      color: theme.palette.text.lightShadedGray,
      fontFamily: theme.typography.primary.main,
    },
    "& .Mui-selected": {
      color: theme.palette.text.primary,
      fontWeight: 600,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.text.primary,
    },
  },
});
