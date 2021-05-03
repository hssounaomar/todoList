import {
  ADD_TASK,
  DELETE_TASK,
  CHANGE_TASK_STATE
} from "../ActionTypes/tasks";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const changeTaskState = (id) => {
  return {
    type: CHANGE_TASK_STATE,
    payload: id,
  };
};

