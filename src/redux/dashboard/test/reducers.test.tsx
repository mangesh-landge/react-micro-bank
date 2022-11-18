import React from "react";
import { dashBoardReducer } from "../reducer";
import { ActionType } from "../actionTypes";

describe("Dashboard reducer", () => {
  test("should return the initial state", () => {
    expect(
      dashBoardReducer(undefined, { type: ActionType.GET_USER_DATA_REQUEST })
    ).toEqual({
      id: "",
      isLoading: true,
      isError: false,
      email: "",
      fullName: "",
      dateOfIncorporation: "",
      companyName: "",
      avatar: "",
      currentServices: [],
      message: "",
    });
  });

  test("should return the success state", () => {
    expect(
      dashBoardReducer(undefined, {
        type: ActionType.GET_USER_DATA_SUCCESS,
        payload: {},
      })
    ).toEqual({
      // id: "123",
      // isLoading: false,
      // isError: false,
      // email: "admin@gmail.com",
      // fullName: "Mangesh Landge",
      // dateOfIncorporation: "2022-06-17",
      // companyName: "Google",
      // avatar: "data",
      // currentServices: [{}],
      // message: "",
      id: undefined,
      isLoading: false,
      isError: false,
      email: undefined,
      fullName: undefined,
      dateOfIncorporation: undefined,
      companyName: undefined,
      avatar: undefined,
      currentServices: undefined,
      message: "",
    });
  });

  test("should return the failure state", () => {
    expect(
      dashBoardReducer(undefined, {
        type: ActionType.GET_USER_DATA_FAILURE,
        payload: { message: "abc" },
      })
    ).toEqual({
      id: "",
      isLoading: false,
      isError: true,
      email: "",
      fullName: "",
      dateOfIncorporation: "",
      companyName: "",
      avatar: "",
      currentServices: [],
      message: "abc",
    });
  });

  test("should return the initial state", () => {
    expect(
      dashBoardReducer(undefined, { type: ActionType.PATCH_USER_DATA_REQUEST })
    ).toEqual({
      id: "",
      isLoading: true,
      isError: false,
      email: "",
      fullName: "",
      dateOfIncorporation: "",
      companyName: "",
      avatar: "",
      currentServices: [],
      message: "",
    });
  });

  test("should return the success state", () => {
    expect(
      dashBoardReducer(undefined, {
        type: ActionType.PATCH_USER_DATA_SUCCESS,
        payload: {},
      })
    ).toEqual({
      // id: "123",
      // isLoading: false,
      // isError: false,
      // email: "admin@gmail.com",
      // fullName: "Mangesh Landge",
      // dateOfIncorporation: "2022-06-17",
      // companyName: "Google",
      // avatar: "data",
      // currentServices: [{}],
      // message: "",
      id: undefined,
      isLoading: false,
      isError: false,
      email: undefined,
      fullName: undefined,
      dateOfIncorporation: undefined,
      companyName: undefined,
      avatar: undefined,
      currentServices: undefined,
      message: "",
    });
  });

  test("should return the failure state", () => {
    expect(
      dashBoardReducer(undefined, {
        type: ActionType.PATCH_USER_DATA_FAILURE,
        payload: { message: "abc" },
      })
    ).toEqual({
      id: "",
      isLoading: false,
      isError: true,
      email: "",
      fullName: "",
      dateOfIncorporation: "",
      companyName: "",
      avatar: "",
      currentServices: [],
      message: "abc",
    });
  });
});
