export const useStyles = theme => ({
  userProfileHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0",
    "& div": {
      marginBottom: 0,
      alignItems: "center",
    },
  },
  requestText: {
    padding: 10,
    borderRadius: 4,
    border: 1,
    borderStyle: "solid",
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 1.25,
    lineHeight: "16px",
    textDecoration: "none",
    textTransform: "uppercase",
  UserProfilePopUpHeader: {
    padding: "15px 25px",
    borderBottom: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.text.lightGray,
  },
  Userdetails: {
    display: "flex",
    marginBottom: 10,
    "& span": {
      color: theme.palette.text.lightShadedGray,
      fontSize: 66,
    },
    "& div": {
      marginLeft: 22,
      "& h4": {
        fontWeight: 600,
        margin: 0,
        color: theme.palette.text.black1,
        lineHeight: "27px",
        fontSize: 20,
      },
      "& a": {
        color: theme.palette.text.lightShadedGray,
        fontSize: 16,
        lineHeight: "22px",
        textDecoration: "none",
      },
    },
  },
  creditsRemaining: {
    lineHeight: "16px",
    fontSize: 16,
    letterSpacing: 2,
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  styledProgressBar: {
    height: 10,
    margin: "9px 0 5px",
    backgroundColor: "rgba(64, 134, 255, 0.3)",
    "& div": {
      backgroundColor: theme.palette.text.primary,
    },
  },
  usedCredits: {
    color: theme.palette.text.lightShadedGray,
    fontSize: 14,
    letterSpacing: 1.75,
    lineHeight: "16px",
  },
});
