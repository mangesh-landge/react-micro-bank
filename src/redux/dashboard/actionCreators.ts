import { ActionType } from "./actionTypes";
import { Dispatch } from "redux";
import {
  GetUserDataAction,
  PatchUserDataAction,
  DeleteUserDataAction,
} from "./action";

import axios from "axios";

export const getUserDataRequest = () => {
  return (dispatch: Dispatch<GetUserDataAction>) => {
    dispatch({
      type: ActionType.GET_USER_DATA_REQUEST,
    });
  };
};

export const getUserDataSuccess = (data: any) => {
  return (dispatch: Dispatch<GetUserDataAction>) => {
    dispatch({
      type: ActionType.GET_USER_DATA_SUCCESS,
      payload: data,
    });
  };
};

export const getUserDataFailure = (message: any) => {
  return (dispatch: Dispatch<GetUserDataAction>) => {
    dispatch({
      type: ActionType.GET_USER_DATA_FAILURE,
      payload: message,
    });
  };
};

export const patchUserDataRequest = () => {
  return (dispatch: Dispatch<PatchUserDataAction>) => {
    dispatch({
      type: ActionType.PATCH_USER_DATA_REQUEST,
    });
  };
};

export const patchUserDataSuccess = (data: any) => {
  return (dispatch: Dispatch<PatchUserDataAction>) => {
    dispatch({
      type: ActionType.PATCH_USER_DATA_SUCCESS,
      payload: data,
    });
  };
};

export const patchUserDataFailure = (message: any) => {
  return (dispatch: Dispatch<PatchUserDataAction>) => {
    dispatch({
      type: ActionType.PATCH_USER_DATA_FAILURE,
      payload: message,
    });
  };
};

export const deleteUserDataRequest = () => {
  return (dispatch: Dispatch<DeleteUserDataAction>) => {
    dispatch({
      type: ActionType.DELETE_USER_DATA_REQUEST,
    });
  };
};

export const deleteUserDataSuccess = (data: any) => {
  return (dispatch: Dispatch<DeleteUserDataAction>) => {
    dispatch({
      type: ActionType.DELETE_USER_DATA_SUCCESS,
      payload: data,
    });
  };
};

export const deleteUserDataFailure = (message: any) => {
  return (dispatch: Dispatch<DeleteUserDataAction>) => {
    dispatch({
      type: ActionType.DELETE_USER_DATA_FAILURE,
      payload: message,
    });
  };
};

export const getUserDetails = (payload: any) => async (dispatch: any) => {
  // console.log("GET_PAYLOAD", payload);
  dispatch(getUserDataRequest());
  try {
    let config = { headers: { Authorization: payload?.token } };

    const { data } = await axios.get(
      `http://localhost:3333/users/${payload?.userId}`,
      config
    );
    dispatch(getUserDataSuccess(data));
    return data;
  } catch (error) {
    dispatch(getUserDataFailure(error));
    console.log("User data failed", error);
  }
};

export const patchUserData = (payload: any) => async (dispatch: any) => {
  console.log("GET_PATCHED_PAYLOAD", payload);
  dispatch(patchUserDataRequest());
  try {
    const { data } = await axios.patch(
      `http://localhost:3333/users/${payload?.id}`,
      payload
    );
    dispatch(patchUserDataSuccess(data));
    // getUserData();
  } catch (error) {
    console.log("Patch user error", error);
    dispatch(patchUserDataFailure(error));
  }
};
