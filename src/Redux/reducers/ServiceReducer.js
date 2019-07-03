import { serviceActions } from "../actionCreators";

const InitialServiceList = {
  serviceList: [],
  pagination: {
    q: "",
    limit: 10,
    offset: 0,
    sort_by: "display_name",
    order_by: "desc",
    total_count: 0,
  },
};

const serviceReducer = (state = InitialServiceList, action) => {
  switch (action.type) {
    case serviceActions.UPDATE_PAGINATION_DETAILS: {
      return { ...state, pagination: { ...state.pagination, ...action.payload } };
    }
    case serviceActions.UPDATE_SERVICE_LIST: {
      return { ...state, serviceList: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default serviceReducer;
