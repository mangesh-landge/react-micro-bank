import { ActionType } from "./actionTypes";
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

export type AvailableServiceAction =
  | AvailableServiceRequest
  | AvailableServiceSuccess
  | AvailableServiceFailure;
