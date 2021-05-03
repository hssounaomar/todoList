import { combineReducers } from "redux";
import TaskReducer from "./tasks";              
const rootReducer = combineReducers({ task: TaskReducer });

export default rootReducer;
