export const useStyles = theme => ({
  GetStartedMainContaienr: {
    padding: "30px 60px 60px",
    backgroundColor: theme.palette.text.offWhiteColor,
    flexDirection: "column",
    "@media(max-width:414px)": { padding: "30px 30px 60px" },
  },
  TopSection: {
    maxWidth: 800,
    margin: "0 auto 30px",
    textAlign: "center",
  },
  SignUpFree: {
    maxWidth: "47%",
    margin: "0 auto ",
    textAlign: "center",
    "@media(max-width:960px)": { maxWidth: "100%" },
  },
  FeaturesMainContainer: { marginTop: 60 },
  FreeTrialSignUp: {
    marginTop: 16,
    textAlign: "center",
    "& > span": {
      marginBottom: 16,
      display: "block",
      color: theme.palette.text.darkShadedGray,
      fontSize: 14,
      fontStyle: "italic",
      lineHeight: "19px",
    },
    "& button": { padding: "13px 16% 11px" },
  },
});
