import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import { useStyles } from "./styles";

const backgroundColor = {
  error: "error",
  success: "success",
};

const MessageBox = ({ classes, errorMsg, type }) => {
  if (errorMsg) {
    return <p className={clsx(classes.messageBox, classes[backgroundColor[type]])}>{errorMsg}</p>;
  }
  return null;
};

MessageBox.propTypes = {
  type: PropTypes.oneOf(["error", "success"]),
  showErr: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  errorMsg: PropTypes.string,
};

export default withStyles(useStyles)(MessageBox);
