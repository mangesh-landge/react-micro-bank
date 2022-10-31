import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { availableServiceReducer } from "./availableServices/reducer";
import { dashBoardReducer } from "./dashboard/reducer";
import { signUpReducer } from "./signUp/reducer";

const rootReducer = combineReducers({
  login: authReducer,
  dashBoardAvailableServices: availableServiceReducer,
  dashBoard: dashBoardReducer,
  signUp: signUpReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
