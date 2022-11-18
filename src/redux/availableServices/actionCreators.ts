import { ActionType } from "./actionTypes";
import { Dispatch } from "redux";
import { AvailableServiceAction } from "./action";
import axios from "axios";

export const availableServiceRequest = () => {
  return (dispatch: Dispatch<AvailableServiceAction>) => {
    dispatch({
      type: ActionType.AVAILABLE_SERVICES_REQUEST,
    });
  };
};

export const availableServiceSuccess = (data: any) => {
  return (dispatch: Dispatch<AvailableServiceAction>) => {
    dispatch({
      type: ActionType.AVAILABLE_SERVICES_SUCCESS,
      payload: data,
    });
  };
};

export const availableServiceFailure = (message: any) => {
  return (dispatch: Dispatch<AvailableServiceAction>) => {
    dispatch({
      type: ActionType.AVAILABLE_SERVICES_FAILURE,
      payload: message,
    });
  };
};

export const getAvailableServices = () => async (dispatch: any) => {
  dispatch(availableServiceRequest());
  try {
    const { data } = await axios.get(`http://localhost:3333/availableServices`);
    // console.log("AvailableServices", data);
    dispatch(availableServiceSuccess(data));
    return data;
  } catch (error) {
    dispatch(availableServiceFailure(error));
    console.log("Available Services", error);
  }
};
