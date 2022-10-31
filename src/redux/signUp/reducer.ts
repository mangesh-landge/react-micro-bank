import { SignUpAction } from "./action";
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
  data: {},
  token: "",
  userId: "",
  isAuth: false,
  isLoading: false,
  isError: false,
  message: "",
};

export const signUpReducer = (state = initState, action: SignUpAction) => {
  switch (action?.type) {
    case ActionType.SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionType.SIGNUP_SUCCESS: {
      return {
        ...state,
        data: action?.payload?.user,
        token: action?.payload?.accessToken,
        userId: action?.payload?.user?.id,
        isAuth: true,
        isError: false,
        isLoading: false,
      };
    }

    case ActionType.SIGNUP_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
