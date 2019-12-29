import {
  START_ADD_USER,
  SUCCESS_ADD_USER,
  FAIL_ADD_USER,
  UserState,
  UserActionsTypes,
  DELETE_USER
} from "./types";

const initialState: UserState = {
  users: [],
  loading: false,
  error: false
};

export function userReducer(
  state: UserState = initialState,
  action: UserActionsTypes
): UserState {
  switch (action.type) {
    case START_ADD_USER:
      return { ...state, loading: true };

    case SUCCESS_ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    case FAIL_ADD_USER:
      return { ...state, loading: false, error: true };

    case DELETE_USER:
      let newState = [...state.users];

      newState = newState.filter(user => user.id !== action.payload.id);

      return { ...state, users: [...newState] };

    default:
      return { ...state };
  }
}
