import React from "react";
import { authReducer } from "../reducer";
import { LoginAction } from "../action";
import { ActionType } from "../actionTypes";

describe("Auth action", () => {
  test("should return the initial state", () => {
    expect(authReducer(undefined, { type: ActionType.LOGIN_REQUEST })).toEqual({
      data: null,
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
      authReducer(undefined, {
        type: ActionType.LOGIN_SUCCESS,
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
      authReducer(undefined, {
        type: ActionType.LOGIN_FAILURE,
        payload: { message: "abc" },
      })
    ).toEqual({
      data: null,
      token: "",
      userId: "",
      isAuth: false,
      isLoading: false,
      isError: true,
      message: "abc",
    });
  });

  test("should return the logout state", () => {
    expect(authReducer(undefined, { type: ActionType.LOGOUT_USER })).toEqual({
      data: null,
      token: "",
      userId: "",
      isAuth: false,
      isLoading: false,
      isError: false,
      message: "",
    });
  });
});

// test('should handle a todo being added to an empty list', () => {
//   const previousState: Todo[] = []

//   expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
//     { text: 'Run the tests', completed: false, id: 0 }
//   ])
// })

// test('should handle a todo being added to an existing list', () => {
//   const previousState: Todo[] = [
//     { text: 'Run the tests', completed: true, id: 0 }
//   ]

//   expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
//     { text: 'Run the tests', completed: true, id: 0 },
//     { text: 'Use Redux', completed: false, id: 1 }
//   ])
// })

// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// // import { Provider } from "react-redux";
// import configStore from "redux-mock-store";
// // import { MemoryRouter } from "react-router-dom";
// import thunk from "redux-thunk";
// import { userLogin } from "../actionCreators";
// import { ActionType } from "../actionTypes";
// const axios = require("axios");
// jest.mock("axios");

// // const mockedUsedNavigate = jest.fn();
// // jest.mock("react-router-dom", () => ({
// //   ...jest.requireActual("react-router-dom"),
// //   useNavigate: () => mockedUsedNavigate,
// // }));

// const middlewares = [thunk];
// const mockStore = configStore(middlewares);
// let store: any;
// beforeEach(() => {
//   store = mockStore({});
// });

// const store = mockStore({
//   login: { isAuth: true },
//   dashBoardAvailableServices: [],
//   dashBoard: {},
// });

// describe("Auth action", () => {
//   test("should call userLogin action", () => {
//     // arrange
//     const mockedResponse = {
//       data: { email: "admin", password: "Admin@123" },
//     };
//     axios.post.mockResolvedValue(mockedResponse);
//     const userLogin = require("../actionCreators");
//     // act
//     // userLogin.getUserData();
//     userLogin.userLogin();
//     // asserts
//     expect(axios.post).toHaveBeenCalled();
//     expect(axios.post).toHaveBeenCalledWith("http://localhost:3333/login");
//   });
//   it("should call userLogin action", async () => {
//     //     API.GetRecipientListService = jest.fn(() =>
//     //       Promise.resolve({
//     //         data: {},
//     //       })
//     //     );
//     const expectedAction = [
//       {
//         type: ActionType.LOGIN_REQUEST,
//       },
//       // {
//       //   type: RECIPIENT_LIST_SUCCESS,
//       //   payload: recipientList1m,
//       // },
//     ];
//     await store.dispatch(userLogin({}));
//     //     expect(API.GetRecipientListService).toHaveBeenCalledTimes(1);
//     store.subscribe(() => {
//       expect(store.getActions()).toEqual(expectedAction);
//     });
//     //   });
//     //   it("should render Navbar properly", async () => {
//     //     // render(
//     //     //   <Provider store={store}>
//     //     //     {/* <Navbar /> */}
//     //     //   </Provider>,
//     //     //   { wrapper: MemoryRouter }
//     //     // );
//     //     // expect(document.querySelector(".nav")).toBeInTheDocument();
//     //     // waitFor(() =>
//     //     //   expect(screen.getByText("Micro").firstChild).toBeInTheDocument()
//     //     // );
//     //     // console.log(screen.debug(null, 300000));
//   });
// });
