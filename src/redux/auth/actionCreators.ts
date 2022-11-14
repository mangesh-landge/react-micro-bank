import { ActionType } from "./actionTypes";
import { Dispatch } from "redux";
import { LoginAction } from "./action";
import axios from "axios";

export const loginRequest = () => {
  return (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_REQUEST,
    });
  };
};

export const loginSuccess = (data: any) => {
  return (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: data,
    });
  };
};

export const loginFailure = (message: any) => {
  return (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_FAILURE,
      payload: message,
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGOUT_USER,
    });
  };
};

export default interface ILogin {
  email: string;
  password: string;
}

export const userLogin = (payload: any) => async (dispatch: any) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post("http://localhost:3333/login", payload);
    dispatch(loginSuccess(data));
    console.log("LOGIN SUCCESS");
    return data;
  } catch (error) {
    dispatch(loginFailure(error));
    console.log("Login Error", error);
  }
};

export const userLogout = (dispatch: any) => {
  dispatch(logout());
};
