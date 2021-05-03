import { ADD_TASK, DELETE_TASK, CHANGE_TASK_STATE} from "../ActionTypes/tasks";

const initialState = {
  tasks: []
};

const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case CHANGE_TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    default:
      return state;
  }
};

export default TaskReducer;
