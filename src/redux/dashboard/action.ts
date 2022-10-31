import { ActionType } from "./actionTypes";

interface GetUserDataRequest {
  type: ActionType.GET_USER_DATA_REQUEST;
}

interface GetUserDataSuccess {
  type: ActionType.GET_USER_DATA_SUCCESS;
  payload: any;
}

interface GetUserDataFailure {
  type: ActionType.GET_USER_DATA_FAILURE;
  payload: any;
}

interface PatchUserDataRequest {
  type: ActionType.PATCH_USER_DATA_REQUEST;
}

interface PatchUserDataSuccess {
  type: ActionType.PATCH_USER_DATA_SUCCESS;
  payload: any;
}

interface PatchUserDataFailure {
  type: ActionType.PATCH_USER_DATA_FAILURE;
  payload: any;
}

interface DeleteUserDataRequest {
  type: ActionType.DELETE_USER_DATA_REQUEST;
}

interface DeleteUserDataSuccess {
  type: ActionType.DELETE_USER_DATA_SUCCESS;
  payload: any;
}

interface DeleteUserDataFailure {
  type: ActionType.DELETE_USER_DATA_FAILURE;
  payload: any;
}

export type GetUserDataAction =
  | GetUserDataRequest
  | GetUserDataSuccess
  | GetUserDataFailure;

export type PatchUserDataAction =
  | PatchUserDataRequest
  | PatchUserDataSuccess
  | PatchUserDataFailure;

export type DeleteUserDataAction =
  | DeleteUserDataRequest
  | DeleteUserDataSuccess
  | DeleteUserDataFailure;
