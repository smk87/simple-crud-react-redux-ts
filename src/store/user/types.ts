export interface User {
  name: string;
  age: string;
}

export const ADD_USER = "ADD_USER";

interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

export interface UserState {
  users: User[];
}

export type UserActionsTypes = AddUserAction;
