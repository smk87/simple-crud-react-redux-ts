import { AxiosResponse } from "axios";

export const ADD_USER = "ADD_USER";
export const START_ADD_USER = "START_ADD_USER";
export const SUCCESS_ADD_USER = "SUCCESS_ADD_USER";
export const FAIL_ADD_USER = "FAIL_ADD_USER";
export const DELETE_USER = "DELETE_USER";

// Define user type
export interface User {
  id: string;
  name: string;
  age: string;
}

// Define Different action type
interface AddUserAction {
  type: string;
  payload: User;
  types?: string[];
  promise?: Promise<AxiosResponse<any>>;
}

interface DeleteUserAction {
  type: string;
  payload: User;
}

// Define reducer state of this module
export interface UserState {
  users: User[];
  loading: boolean;
  error: boolean;
}

export type UserActionsTypes = AddUserAction | DeleteUserAction;
