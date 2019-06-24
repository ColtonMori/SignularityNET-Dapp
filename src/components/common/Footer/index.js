import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import PrimaryFooter from "./PrimaryFooter/index.js";
import SecondaryFooter from "./SecondaryFooter/index.js";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: "18px 0 25px",
    backgroundColor: theme.palette.text.purple,
    color: theme.palette.text.offWhite
  },
  footerWrapper: {
    width: "75%",
    margin: "0 auto"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container spacing={24} className={classes.footerWrapper}>
        <PrimaryFooter />
        <SecondaryFooter />
      </Grid>
    </footer>
  );
};

export default Footer;
