import { combineReducers } from "redux";
import messageReducer from "./message-reducer";
import taskReducer from "./task-reducer";
import loadingReducer from "./loading-reducer";
export default combineReducers({
  messageReducer,
  taskReducer,
  loadingReducer,
});
