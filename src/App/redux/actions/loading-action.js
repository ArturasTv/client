import * as types from "./../types";

export const startLoading = () => (dispatch) => {
  dispatch({
    type: types.START_LOADING,
  });
};

export const stopLoading = () => (dispatch) => {
  dispatch({
    type: types.STOP_LOADING,
  });
};
