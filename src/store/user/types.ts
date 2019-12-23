export const ADD_USER = "ADD_USER";

// Define user type
export interface User {
  name: string;
  age: string;
}

// Define Different action type
interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

// Define reducer state of this module
export interface UserState {
  users: User[];
}

export type UserActionsTypes = AddUserAction;
