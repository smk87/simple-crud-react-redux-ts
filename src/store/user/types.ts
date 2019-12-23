export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

// Define user type
export interface User {
  id: string;
  name: string;
  age: string;
}

// Define Different action type
interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: User;
}

// Define reducer state of this module
export interface UserState {
  users: User[];
}

export type UserActionsTypes = AddUserAction | DeleteUserAction;
