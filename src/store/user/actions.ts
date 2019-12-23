import { User, ADD_USER, UserActionsTypes, DELETE_USER } from "./types";
import { Dispatch } from "redux";
import { ReduxStoreState } from "..";

// Actions
export const addUser = (user: User): UserActionsTypes => ({
  type: ADD_USER,
  payload: user
});

export const deleteUser = (user: User): UserActionsTypes => ({
  type: DELETE_USER,
  payload: user
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
