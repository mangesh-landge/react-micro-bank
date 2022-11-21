import { ActionType } from "./actionTypes";

interface LoginRequest {
  type: ActionType.LOGIN_REQUEST;
}

interface LoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: any;
}

interface LoginFailure {
  type: ActionType.LOGIN_FAILURE;
  payload: any;
}

interface LogoutUser {
  type: ActionType.LOGOUT_USER;
}

export type LoginAction =
  | LoginRequest
  | LoginSuccess
  | LoginFailure
  | LogoutUser;
