import { ADD_USER, UserState, UserActionsTypes, DELETE_USER } from "./types";

const initialState: UserState = {
  users: []
};

export function userReducer(
  state: UserState = initialState,
  action: UserActionsTypes
): UserState {
  switch (action.type) {
    case ADD_USER:
      return { users: [...state.users, action.payload] };

    case DELETE_USER:
      let newState = [...state.users];

      newState = newState.filter(user => user.id !== action.payload.id);

      return { users: [...newState] };

    default:
      return { ...state };
  }
}
