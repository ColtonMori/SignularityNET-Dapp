export const useStyles = theme => ({
  loginDetails: {
    height: "100vh",
    textAlign: "center",
    backgroundColor: theme.palette.text.offWhiteColor,
    "& h2": {
      margin: 0,
      fontSize: 32,
      fontWeight: 600,
      color: theme.palette.text.darkShadedGray,
      letterSpacing: "-0.5",
    },
  },
  loginForm: {
    boxSizing: "border-box",
    width: 410,
    padding: "40px 20px 30px",
    margin: "45px auto 0",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "& h3": {
      margin: "0 0 11px",
      color: theme.palette.text.darkShadedGray,
      fontSize: 16,
      letterSpacing: "0.29px",
      textTransform: "uppercase",
    },
    "& button": {
      width: "100%",
    },
    "@media (max-width:545px)": {
      width: "80%",
    },
  },
  horizontalLine: {
    marginTop: 15,
    display: "block",
    color: theme.palette.text.darkShadedGray,
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
    "&::before": {
      content: '" "',
      display: "inline-block",
      verticalAlign: "middle",
      width: 160,
      height: 1,
      backgroundColor: theme.palette.text.gray1,
      marginRight: 10,
    },
    "&::after": {
      content: '" "',
      display: "inline-block",
      verticalAlign: "middle",
      width: 160,
      height: 1,
      marginLeft: 10,
      backgroundColor: theme.palette.text.gray1,
    },
  },
  textField: {
    width: "100%",
    "& label": { color: theme.palette.text.darkShadedGrayF },
    "& fieldset": { borderColor: "#828282 !important" },
    "& div": { color: "#212121 !important" },
  },
  checkboxSection: {
    margin: "10px 0 17px",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    "& label": {
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
      letterSpacing: "0.25px",
    },
    "& a": {
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
      letterSpacing: "0.25px",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "@media (max-width:400px)": {
      flexDirection: "column",
    },
  },
});
