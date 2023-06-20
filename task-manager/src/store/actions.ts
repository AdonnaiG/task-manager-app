import { Task } from "./types";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const SET_NEWTASK = "SET_NEWTASK";
export const SET_TASK = "SET_TASK";

export type ActionTypes =
  | { type: typeof ADD_TASK }
  | { type: typeof DELETE_TASK; payload: number }
  | { type: typeof SET_TASK; payload: Task[] }
  | {
      type: typeof UPDATE_TASK;
      payload: {
        id: number;
        text: string;
      };
    }
  | { type: typeof TOGGLE_TASK; payload: number }
  | { type: typeof SET_NEWTASK; payload: string };

export const addTask = (): ActionTypes => ({ type: ADD_TASK });

export const deleteTask = (id: number): ActionTypes => ({
  type: DELETE_TASK,
  payload: id,
});

export const updateTask = (id: number, text: string): ActionTypes => ({
  type: UPDATE_TASK,
  payload: {
    id,
    text,
  },
});

export const toggleTask = (id: number): ActionTypes => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const setNewTask = (text: string): ActionTypes => ({
  type: SET_NEWTASK,
  payload: text,
});

export const setTask = (task: Task[]): ActionTypes => ({
  type: SET_TASK,
  payload: task,
});
