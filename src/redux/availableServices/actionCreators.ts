import { ActionType } from "./actionTypes";
import { Dispatch } from "redux";
import { UserDataAction, AvailableServiceAction } from "./action";
import axios from "axios";

export const userDataRequest = () => {
  return (dispatch: Dispatch<UserDataAction>) => {
    dispatch({
      type: ActionType.USER_DATA_REQUEST,
    });
  };
};

export const userDataSuccess = (data: any) => {
  return (dispatch: Dispatch<UserDataAction>) => {
    dispatch({
      type: ActionType.USER_DATA_SUCCESS,
      payload: data,
    });
  };
};

export const userDataFailure = (message: any) => {
  return (dispatch: Dispatch<UserDataAction>) => {
    dispatch({
      type: ActionType.USER_DATA_FAILURE,
      payload: message,
    });
  };
};

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
  } catch (error) {
    dispatch(availableServiceFailure(error));
    console.log("Available Services", error);
  }
};

export const getUserData = (payload: string) => async (dispatch: any) => {
  dispatch(userDataRequest());
  try {
    let config = { headers: { Authorization: payload } };

    const { data } = await axios.get(`http://localhost:3333/users/`, config);
    // console.log("USER", data);
    dispatch(userDataSuccess(data));
    // getAvailableServices();
  } catch (error) {
    dispatch(userDataFailure(error));
    console.log("User data failed", error);
  }
};

// const getUserData = async (token: string) => {
//     let config = { headers: { Authorization: token } };

//     const response = await axios.get(`http://localhost:3333/users/`, config);
//     console.log("USER", response.data);
//   };

//   const getAvailableServices = async () => {
//     const { data } = await axios.get(`http://localhost:3333/availableServices`);
//   };
