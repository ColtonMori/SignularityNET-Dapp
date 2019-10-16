export const useStyles = theme => ({
  creatorDetailsContainer: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    borderRadius: 4,
    backgroundColor: theme.palette.text.white,
    paddingBottom: 1,
    marginBottom: 25,
  },
  companyInfo: {
    paddingLeft: 22,
    margin: "10px 0 20px",
    display: "flex",
    alignItems: "center",
    "& img": {
      "@media(max-width:1023px)": { width: 48 },
    },
  },
  companyName: {
    paddingLeft: 20,
    "& h4": {
      margin: 0,
      color: theme.palette.text.primary,
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "0.23px",
      lineHeight: "24px",
    },
    "& span": {
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
    },
  },
  iconContainer: {
    padding: "17px 0",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.text.lightGray,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: theme.palette.text.gray2,
    "& i": {
      color: theme.palette.text.gray3,
      verticalAlign: "bottom",
    },
    "& span": {
      marginLeft: 8,
      color: theme.palette.text.mediumShadeGray,
      fontSize: 12,
    },
  },
});
