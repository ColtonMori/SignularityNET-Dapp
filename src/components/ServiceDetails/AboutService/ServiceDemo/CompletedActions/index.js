import React, { useState } from "react";

import StyledButton from "../../../../common/StyledButton";
import { useStyles } from "./styles";
import UserFeedback from "../UserFeedback";

const CompletedActions = ({ isComplete, feedback }) => {
  const [openUserFeedback, setUserFeedback] = useState(false);

  const handleOpenUserFeedback = () => {
    setUserFeedback(true);
  };

  const handleCloseUserFeedback = () => {
    setUserFeedback(false);
  };

  const classes = useStyles();
  if (!isComplete) {
    return null;
  }
  return (
    <div className={classes.buttonsContainer}>
      <UserFeedback open={openUserFeedback} handleClose={handleCloseUserFeedback} feedback={feedback} />
      <StyledButton type="transparent" btnText="Rate the service" onClick={handleOpenUserFeedback} />
      <StyledButton type="blue" btnText="Reset and Run" />
    </div>
  );
};

export default CompletedActions;
