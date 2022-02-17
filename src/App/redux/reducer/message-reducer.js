import * as types from "../types";

const initialState = { message: null };

const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_MESSAGE:
      return { ...state, message: payload };
    case types.CLEAR_MESSAGE:
      return { ...state, message: null };
    default:
      return state;
  }
};

export default messageReducer;
