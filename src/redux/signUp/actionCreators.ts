import { ActionType } from "./actionTypes";
import { Dispatch } from "redux";
import { SignUpAction } from "./action";
import axios from "axios";

export const signUpRequest = () => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: ActionType.SIGNUP_REQUEST,
    });
  };
};

export const signUpSuccess = (data: any) => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: ActionType.SIGNUP_SUCCESS,
      payload: data,
    });
  };
};

export const signUpFailure = (message: any) => {
  return (dispatch: Dispatch<SignUpAction>) => {
    dispatch({
      type: ActionType.SIGNUP_FAILURE,
      payload: message,
    });
  };
};

export const userSignUp = (payload: any) => async (dispatch: any) => {
  dispatch(signUpRequest());
  // console.log("URL", process.env.SERVER_URL);
  try {
    const { data } = await axios.post(
      `http://localhost:3333/register`,
      payload
    );
    dispatch(signUpSuccess(data));
    return data;
  } catch (error) {
    dispatch(signUpFailure(error));
    console.log("SignUp Error", error);
  }
};
