import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
// This is for thunk template

import { addUser } from "./user/actions";
import { ReduxStoreState } from "./index";

export const thunkAddUser = (
  message: string
): ThunkAction<
  void,
  ReduxStoreState,
  null,
  Action<string>
> => async dispatch => {
  console.log(message);
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
