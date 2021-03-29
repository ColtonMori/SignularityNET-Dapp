import React from "react";
import ThirdPartyAIService from "./ThirdPartyAIService";
import Purchase from "./Purchase";

const PurchaseToggler = ({ purchaseCompleted, purchaseProps, thirdPartyProps, groupInfo, totalRating }) => {
  if (purchaseCompleted) {
    return <ThirdPartyAIService {...thirdPartyProps} groupInfo={groupInfo} totalRating={totalRating} />;
  }
  return <Purchase {...purchaseProps} groupInfo={groupInfo} />;
};

export default PurchaseToggler;
