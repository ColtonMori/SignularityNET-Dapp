import { API } from "aws-amplify";

import { APIEndpoints, APIPaths } from "../../config/APIEndpoints";
import { initializeAPIOptions } from "../../utility/API";
import { fetchAuthenticatedUser, walletTypes } from "./UserActions";
import { userActions } from ".";

export const UPDATE_SERVICE_DETAILS = "UPDATE_SERVICE_DETAILS";
export const RESET_SERVICE_DETAILS = "RESET_SERVICE_DETAILS";
export const UPDATE_FREE_CALLS_ALLOWED = "UPDATE_FREE_CALLS_ALLOWED";
export const UPDATE_FREE_CALLS_REMAINING = "UPDATE_FREE_CALLS_REMAINING";

export const resetServiceDetails = dispatch => {
  dispatch({ type: RESET_SERVICE_DETAILS });
};
const fetchServiceDetailsSuccess = serviceDetails => dispatch => {
  dispatch({ type: UPDATE_SERVICE_DETAILS, payload: serviceDetails });
};

const fetchServiceDetailsAPI = async ({ orgId, serviceId }) => {
  const url = `${APIEndpoints.CONTRACT.endpoint}/org/${orgId}/service/${serviceId}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchServiceDetails = ({ orgId, serviceId }) => async dispatch => {
  dispatch(resetServiceDetails);
  const serviceDetails = await fetchServiceDetailsAPI({ orgId, serviceId });
  dispatch(fetchServiceDetailsSuccess(serviceDetails));
};

const fetchMeteringDataSuccess = usageData => dispatch => {
  const freeCallsRemaining = usageData.free_calls_allowed - usageData.total_calls_made;
  dispatch({ type: UPDATE_FREE_CALLS_ALLOWED, payload: usageData.free_calls_allowed });
  dispatch({ type: UPDATE_FREE_CALLS_REMAINING, payload: freeCallsRemaining });
  if (freeCallsRemaining <= 0) {
    dispatch(userActions.updateWallet({ type: walletTypes.METAMASK }));
  }
};

const meteringAPI = (token, orgId, serviceId, userId) => {
  const apiName = APIEndpoints.USER.name;
  const apiPath = `${APIPaths.FREE_CALL_USAGE}?organization_id=${orgId}&service_id=${serviceId}&username=${userId}`;
  const apiOptions = initializeAPIOptions(token);
  return API.get(apiName, apiPath, apiOptions);
};

export const fetchMeteringData = ({ orgId, serviceId }) => async dispatch => {
  const { email, token } = await fetchAuthenticatedUser();
  const usageData = await meteringAPI(token, orgId, serviceId, email);
  return dispatch(fetchMeteringDataSuccess(usageData));
};
