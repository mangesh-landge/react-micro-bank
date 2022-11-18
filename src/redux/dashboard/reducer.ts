import { ActionType } from "./actionTypes";
import { GetUserDataAction, PatchUserDataAction } from "./action";

interface service {
  id: string;
  mIcon: string;
  dIcon: string;
  rating: number;
  header: string;
  isCurrentService: boolean;
}
interface userDataState {
  id: string;
  isLoading: boolean;
  isError: boolean;
  email: string;
  fullName: string;
  dateOfIncorporation: string;
  companyName: string;
  avatar: string;
  currentServices: Array<service>;
  message: string;
}

const userDataInitial: userDataState = {
  id: "",
  isLoading: false,
  isError: false,
  email: "",
  fullName: "",
  dateOfIncorporation: "",
  companyName: "",
  avatar: "",
  currentServices: [],
  message: "",
};

export const dashBoardReducer = (
  state = userDataInitial,
  action: GetUserDataAction | PatchUserDataAction
) => {
  switch (action?.type) {
    case ActionType.GET_USER_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionType.GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        id: action?.payload?.id,
        email: action?.payload?.email,
        fullName: action?.payload?.fullName,
        dateOfIncorporation: action?.payload?.dateOfIncorporation,
        companyName: action?.payload?.companyName,
        avatar: action?.payload?.avatar,
        currentServices: action?.payload?.currentServices,
      };
    }

    case ActionType.GET_USER_DATA_FAILURE: {
      return {
        ...state,
        message: action?.payload?.message,
        isError: true,
        isLoading: false,
      };
    }

    case ActionType.PATCH_USER_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionType.PATCH_USER_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        id: action?.payload?.id,
        email: action?.payload?.email,
        fullName: action?.payload?.fullName,
        dateOfIncorporation: action?.payload?.dateOfIncorporation,
        companyName: action?.payload?.companyName,
        avatar: action?.payload?.avatar,
        currentServices: action?.payload?.currentServices,
      };
    }

    case ActionType.PATCH_USER_DATA_FAILURE: {
      return {
        ...state,
        message: action?.payload?.message,
        isError: true,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
