import { legacy_createStore as createStore } from "redux";
import { Task, Store } from "./types";
import {
  ActionTypes,
  DELETE_TASK,
  SET_TASK,
  SET_NEWTASK,
  UPDATE_TASK,
  TOGGLE_TASK,
  ADD_TASK,
} from "./actions";

// Standard interface and functions
const updateTask = (task: Task[], id: number, text: string): Task[] =>
  task.map((task) => ({
    ...task,
    text: task.id === id ? text : task.text,
  }));

const toggleTask = (tasks: Task[], id: number): Task[] =>
  tasks.map((task) => ({
    ...task,
    done: task.id === id ? !task.done : task.done,
  }));

const removeTask = (tasks: Task[], id: number): Task[] =>
  tasks.filter((task) => task.id !== id);

const addTask = (tasks: Task[], text: string): Task[] => [
  ...tasks,
  {
    id: Math.max(0, Math.max(...tasks.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Redux implementation
function taskReducer(
  state: Store = {
    tasks: [],
    newTask: "",
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: removeTask(state.tasks, action.payload),
      };
    case SET_NEWTASK:
      return {
        ...state,
        newTask: action.payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: updateTask(state.tasks, action.payload.id, action.payload.text),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: toggleTask(state.tasks, action.payload),
      };
    case ADD_TASK:
      return {
        ...state,
        newTask: "",
        tasks: addTask(state.tasks, state.newTask),
      };
    default:
      return state;
  }
}

const store = createStore(taskReducer);

export default store;
