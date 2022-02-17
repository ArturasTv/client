import * as types from "../types";

const initialState = { isLoading: true };

const loadingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.START_LOADING:
      return { ...state, isLoading: true };
    case types.STOP_LOADING:
      return { ...state, isLoading: null };
    default:
      return state;
  }
};

export default loadingReducer;
