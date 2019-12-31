import {
  User,
  START_ADD_USER,
  SUCCESS_ADD_USER,
  FAIL_ADD_USER,
  START_DELETE_USER,
  SUCCESS_DELETE_USER,
  FAIL_DELETE_USER,
  UserActionsTypes,
  DELETE_USER,
  ADD_USER
} from "./types";
import { Dispatch } from "redux";
import { ReduxStoreState } from "..";
import axios from "axios";

// Actions
export const addUser = (user: User): UserActionsTypes => ({
  type: ADD_USER,
  payload: user,
  subtypes: [START_ADD_USER, SUCCESS_ADD_USER, FAIL_ADD_USER],
  promise: axios.get("https://jsonplaceholder.typicode.com/posts/1")
});

export const deleteUser = (user: User): UserActionsTypes => ({
  type: DELETE_USER,
  payload: user,
  subtypes: [START_DELETE_USER, SUCCESS_DELETE_USER, FAIL_DELETE_USER],
  promise: axios.get("https://jsonplaceholder.typicode.com/posts/1")
});

// Action Dispatchers
export const startAddUser = (user: User) => (
  dispatch: Dispatch<UserActionsTypes>,
  getState: () => ReduxStoreState
) => {
  dispatch(addUser(user));
};

export const startDeleteUser = (user: User) => (
  dispatch: Dispatch<UserActionsTypes>,
  getState: () => ReduxStoreState
) => {
  dispatch(deleteUser(user));
};

// // Action Dispatchers
// export const startAddUser = (user: User) => (
//   dispatch: Dispatch<UserActionsTypes>,
//   getState: () => ReduxStoreState
// ) => {
//   dispatch(addUser(user));
// };

// export const startDeleteUser = (user: User) => (
//   dispatch: Dispatch<UserActionsTypes>,
//   getState: () => ReduxStoreState
// ) => {
//   dispatch(deleteUser(user));
// };
