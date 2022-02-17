import * as types from "../types";

import taskService from "../../api/service/task-service";

export const getTasks = () => (dispatch) => {
  return taskService
    .getTasks()
    .then((data) => {
      dispatch({
        type: types.GET_TASKS_SUCCESS,
        payload: { tasks: data.data },
      });
      return Promise.resolve();
    })
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    });
};

export const getTask = (id) => (dispatch) => {
  return taskService
    .getTaskByID(id)
    .then((data) => {
      dispatch({
        type: types.GET_TASK_SUCCESS,
        payload: { task: data.data },
      });
    })
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });
    });
};

export const postTask = (task) => (dispatch) => {
  return taskService
    .postTask(task)
    .then(() => dispatch(getTasks()))
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });
    });
};

export const updateTask = (id, task) => (dispatch) => {
  return taskService
    .updateTask(id, task)
    .then(() => dispatch(getTasks()))
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });
    });
};

export const deleteTask = (id) => (dispatch) => {
  return taskService
    .deleteTask(id)
    .then(() => dispatch(getTasks()))
    .catch((err) => {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      dispatch({
        type: types.SET_MESSAGE,
        payload: message,
      });
    });
};
