import { ADD_USER, UserState, UserActionsTypes } from "./types";

const initialState: UserState = {
  users: []
};

export function userReducer(
  state = initialState,
  action: UserActionsTypes
): UserState {
  switch (action.type) {
    case ADD_USER:
      return { users: [...state.users, action.payload] };

    default:
      return { ...state };
  }
}
