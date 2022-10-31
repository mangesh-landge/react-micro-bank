import { ActionType } from "./actionTypes";
import { UserDataAction, AvailableServiceAction } from "./action";

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
  dob: string;
  companyName: string;
  avatar: string;
  currentServices: Array<service>;
  availableServices: Array<service>;
  message: string;
}

interface availableService {
  availableServices: Array<service>;
}

const userDataInitial: userDataState = {
  id: "",
  isLoading: false,
  isError: false,
  email: "",
  fullName: "",
  dob: "",
  companyName: "",
  avatar: "",
  currentServices: [],
  availableServices: [],
  message: "",
};

const initService: availableService = {
  availableServices: [],
};

export const availableServiceReducer = (
  state = initService,
  action: AvailableServiceAction
) => {
  switch (action?.type) {
    case ActionType.AVAILABLE_SERVICES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionType.AVAILABLE_SERVICES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        availableServices: action?.payload,
      };
    }

    case ActionType.AVAILABLE_SERVICES_FAILURE: {
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

// export const dashBoardReducer = (
//     state = userDataInitial,
//     action: AvailableServiceAction | UserDataAction
//   ) => {
//     switch (action?.type) {
//       case ActionType.USER_DATA_REQUEST: {
//         return {
//           ...state,
//           isLoading: true,
//         };
//       }

//       case ActionType.USER_DATA_SUCCESS: {
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           email: action?.payload?.email,
//           fullName: action?.payload?.fullName,
//           dob: action?.payload?.dob,
//           companyName: action?.payload?.companyName,
//           avatar: action?.payload?.avatar,
//           currentServices: action?.payload?.currentServices,
//           availableServices: action?.payload?.availableServices,
//         };
//       }

//       case ActionType.USER_DATA_FAILURE: {
//         return {
//           ...state,
//           message: action?.payload?.message,
//           isError: true,
//           isLoading: false,
//         };
//       }

//       default: {
//         return state;
//       }
//     }
//   };
