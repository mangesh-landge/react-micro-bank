import { LoginAction } from "./action";
import { ActionType } from "./actionTypes";

interface authState {
  data: any;
  token: string;
  userId: string;
  isAuth: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string;
}

const initState: authState = {
  data: null,
  token: "",
  userId: "",
  isAuth: false,
  isLoading: false,
  isError: false,
  message: "",
};

export const authReducer = (state = initState, action: LoginAction) => {
  switch (action?.type) {
    case ActionType.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        data: action?.payload.user,
        token: action?.payload.accessToken,
        userId: action?.payload.user.id,
        isAuth: true,
        isError: false,
        isLoading: false,
      };
    }

    case ActionType.LOGIN_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
        isAuth: false,
        isError: true,
        isLoading: false,
      };
    }

    case ActionType.LOGOUT_USER: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isAuth: false,
        message: "",
      };
    }

    default: {
      return state;
    }
  }
};
