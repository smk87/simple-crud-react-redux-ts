import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "redux";
import { AxiosResponse } from "axios";

const actionMiddleWare: Middleware = ({
  dispatch,
  getState
}: MiddlewareAPI) => (next: Dispatch) => async (action: AnyAction) => {
  if (action.type.includes("ADD_USER")) {
    const [START_ADD_USER, SUCCESS_ADD_USER, FAIL_ADD_USER] = action.subtypes;

    next({ ...action, type: START_ADD_USER });

    // Here we will dispatch SUCCESS OR FAIL based on some condition or try/catch
    try {
      const response: AxiosResponse = await action.promise;
      if (response.status === 200) {
        return next({ ...action, type: SUCCESS_ADD_USER });
      }
    } catch (error) {
      return next({ ...action, type: FAIL_ADD_USER });
    }
  } else if (action.type.includes("DELETE_USER")) {
    const [
      START_DELETE_USER,
      SUCCESS_DELETE_USER,
      FAIL_DELETE_USER
    ] = action.subtypes;

    next({ ...action, type: START_DELETE_USER });

    // Here we will dispatch SUCCESS OR FAIL based on some condition or try/catch
    try {
      const response: AxiosResponse = await action.promise;
      if (response.status === 200) {
        return next({ ...action, type: SUCCESS_DELETE_USER });
      }
    } catch (error) {
      return next({ ...action, type: FAIL_DELETE_USER });
    }
  }
  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action);

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue;
};

export default actionMiddleWare;
