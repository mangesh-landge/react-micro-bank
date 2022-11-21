import { availableServiceReducer } from "../reducer";
import { ActionType } from "../actionTypes";

describe("SignUp Reducer", () => {
  test("should return the initial state", () => {
    expect(
      availableServiceReducer(undefined, {
        type: ActionType.AVAILABLE_SERVICES_REQUEST,
      })
    ).toEqual({
      availableServices: [],
      isLoading: true,
      isError: false,
      message: "",
    });
  });

  test("should return the success state", () => {
    expect(
      availableServiceReducer(undefined, {
        type: ActionType.AVAILABLE_SERVICES_SUCCESS,
        payload: {},
      })
    ).toEqual({
      availableServices: {},
      isLoading: false,
      isError: false,
      message: "",
    });
  });

  test("should return the failure state", () => {
    expect(
      availableServiceReducer(undefined, {
        type: ActionType.AVAILABLE_SERVICES_FAILURE,
        payload: { message: "abc" },
      })
    ).toEqual({
      availableServices: [],
      isLoading: false,
      isError: true,
      message: "abc",
    });
  });
});
