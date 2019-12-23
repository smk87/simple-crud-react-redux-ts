import { User, ADD_USER, UserActionsTypes } from "./types";
import { Dispatch } from "redux";
import { ReduxStoreState } from "..";

// Action
export const addUser = (user: User): UserActionsTypes => ({
  type: ADD_USER,
  payload: user
});

// Action Dispatcher
export const startAddUser = (user: User) => (
  dispatch: Dispatch<UserActionsTypes>,
  getState: () => ReduxStoreState
) => {
  dispatch(addUser(user));
};
