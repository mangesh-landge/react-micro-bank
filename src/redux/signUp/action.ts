import { ActionType } from "./actionTypes";

interface SignUpRequest {
  type: ActionType.SIGNUP_REQUEST;
}

interface SignUpSuccess {
  type: ActionType.SIGNUP_SUCCESS;
  payload: any;
}

interface SignUpFailure {
  type: ActionType.SIGNUP_FAILURE;
  payload: any;
}

export type SignUpAction = SignUpRequest | SignUpSuccess | SignUpFailure;
