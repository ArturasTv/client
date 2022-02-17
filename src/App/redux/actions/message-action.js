import * as types from "./../types";

export const clearMessage = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_MESSAGE,
  });
};
export const setMessage = (message) => (dispatch) => {
  dispatch({
    type: types.SET_MESSAGE,
    payload: message,
  });
};
