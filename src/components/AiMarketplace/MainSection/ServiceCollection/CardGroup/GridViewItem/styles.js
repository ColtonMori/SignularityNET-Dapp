import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    minHeight: 440,
    width: 302,
    paddingTop: 10,
    margin: "0 24px 24px 0",
    display: "inline-block",
    position: "relative",
    fontFamily: theme.typography.primary.main,
    fontSize: 18,
    "&:hover": {
      backgroundColor: theme.palette.text.offWhiteColor,
      "& h4": { color: theme.palette.text.primary },
      "& .MuiCardActions-spacing": { backgroundColor: theme.palette.text.offWhiteColor },
    },
  },
  cardHeader: {
    padding: "0 18px",
    alignItems: "flex-start",
    "& .MuiCardHeader-avatar": { marginRight: 0 },
    "& .MuiCardHeader-content": {
      textAlign: "left",
      marginLeft: 10,
    },
  },
  cardTitle: {
    fontFamily: theme.typography.primary.main,
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.darkShadedGray,
    letterSpacing: 0.23,
    lineHeight: "23px",
  },
  cardSubheader: {
    margin: 0,
    fontFamily: theme.typography.primary.main,
    fontSize: 10,
    color: theme.palette.text.lightShadedGray,
    fontWeight: 600,
    letterSpacing: 1.67,
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  CardMedia: {
    height: 175,
    margin: "12px 0 17px",
  },
  cardContent: {
    padding: "0 18px",
    fontFamily: theme.typography.primary.main,
    fontSize: 18,
    textAlign: "left",
  },
  cardTypograpy: {
    marginTop: 8,
    color: theme.palette.text.mediumShadeGray,
    fontFamily: theme.typography.primary.main,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "21px",
  },
  cardActions: {
    boxSizing: "border-box",
    width: "100%",
    position: "absolute",
    bottom: 20,
    padding: "0 11px",
    justifyContent: "space-between",
    backgroundColor: theme.palette.text.white,
    "& button": { padding: 0 },
  },
  showMore: {
    padding: 0,
    margin: 0,
    color: theme.palette.text.lightShadedGray,
  },
  ratingStars: {
    "& label": { fontSize: 24 },
    "& .dv-star-rating-empty-star i": { color: theme.palette.text.disabledBtnBg },
  },
}));
