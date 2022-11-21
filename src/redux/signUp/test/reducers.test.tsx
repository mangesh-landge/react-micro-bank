import { signUpReducer } from "../reducer";
import { ActionType } from "../actionTypes";

describe("SignUp Reducer", () => {
  test("should return the initial state", () => {
    expect(
      signUpReducer(undefined, { type: ActionType.SIGNUP_REQUEST })
    ).toEqual({
      data: {},
      token: "",
      userId: "",
      isAuth: false,
      isLoading: true,
      isError: false,
      message: "",
    });
  });

  test("should return the login success state", () => {
    expect(
      signUpReducer(undefined, {
        type: ActionType.SIGNUP_SUCCESS,
        payload: { user: { id: "abc" }, accessToken: "abc", userId: "abc" },
      })
    ).toEqual({
      data: { id: "abc" },
      token: "abc",
      userId: "abc",
      isAuth: true,
      isLoading: false,
      isError: false,
      message: "",
    });
  });

  test("should return the login failure state", () => {
    expect(
      signUpReducer(undefined, {
        type: ActionType.SIGNUP_FAILURE,
        payload: { message: "abc" },
      })
    ).toEqual({
      data: {},
      token: "",
      userId: "",
      isAuth: false,
      isLoading: false,
      isError: true,
      message: "abc",
    });
  });
});
