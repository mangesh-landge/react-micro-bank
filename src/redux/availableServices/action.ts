import { ActionType } from "./actionTypes";

interface UserDataRequest {
  type: ActionType.USER_DATA_REQUEST;
}

interface UserDataSuccess {
  type: ActionType.USER_DATA_SUCCESS;
  payload: any;
}

interface UserDataFailure {
  type: ActionType.USER_DATA_FAILURE;
  payload: any;
}

interface AvailableServiceRequest {
  type: ActionType.AVAILABLE_SERVICES_REQUEST;
}

interface AvailableServiceSuccess {
  type: ActionType.AVAILABLE_SERVICES_SUCCESS;
  payload: any;
}

interface AvailableServiceFailure {
  type: ActionType.AVAILABLE_SERVICES_FAILURE;
  payload: any;
}

export type UserDataAction =
  | UserDataRequest
  | UserDataSuccess
  | UserDataFailure;

export type AvailableServiceAction =
  | AvailableServiceRequest
  | AvailableServiceSuccess
  | AvailableServiceFailure;
