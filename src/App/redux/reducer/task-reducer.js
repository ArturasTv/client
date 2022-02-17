import * as types from "../types";

const initialState = {
  tasks: null,
  task: null,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TASKS_SUCCESS:
      return { ...state, tasks: payload };
    case types.GET_TASK_SUCCESS:
      return { ...state, task: payload };
    default:
      return state;
  }
};

export default taskReducer;
