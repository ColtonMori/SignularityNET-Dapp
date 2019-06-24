import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const buttonColor = {
  blue: "blueBg",
  gradient: "gradientBg",
  black: "blackBg",
  transparent: "transparentBg"
};

const useStyles = makeStyles(theme => ({
  styledButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "transparent",
    padding: "13px 28px 11px",
    color: theme.palette.text.white,
    textTransform: "uppercase",
    fontFamily: theme.typography.primary.main,
    fontWeight: theme.typography.fontweight,
    letterSpacing: "1.25px",
    lineHeight: "16px",
    "&:disabled": {
      backgroundColor: theme.backgroundColor.disabled,
      color: theme.palette.text.disabled
    }
  },
  blueBg: {
    backgroundColor: theme.backgroundColor.blue,
    "&:hover": {
      backgroundColor: theme.backgroundColor.white,
      borderColor: theme.palette.text.primary,
      color: theme.palette.text.primary
    }
  },
  blackBg: {
    backgroundColor: theme.backgroundColor.githubBlack,
    "& i": {
      fontSize: 24,
      marginRight: 5
    },
    "&:hover": {
      backgroundColor: theme.backgroundColor.white,
      borderColor: theme.backgroundColor.githubBlack,
      color: theme.backgroundColor.githubBlack
    }
  },
  transparentBg: {
    backgroundColor: "transparent !important",
    color: theme.palette.text.primary,
    "&:disabled": {
      color: "#ccc !important"
    }
  }
}));

const StyledButton = props => {
  const classes = useStyles();

  return (
    <Button
      className={classNames(
        classes.styledButton,
        classes[buttonColor[props.type]]
      )}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.iconClass ? <i className={props.iconClass}></i> : null}
      {props.btnText}
    </Button>
  );
};

StyledButton.propTypes = {
  type: PropTypes.oneOf(["blue", "gradient", "black", "transparent"])
};

StyledButton.defaultProps = {
  type: "blue"
};

export default StyledButton;
