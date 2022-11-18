// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { Provider } from "react-redux";
import configStore from "redux-mock-store";
// import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { userLogin, userLogout } from "../actionCreators";
import { ActionType } from "../actionTypes";
// const axios = require("axios");
import * as axios from "axios";
import mockedAxios from "axios";
jest.mock("axios");

// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

const middlewares = [thunk];
const mockStore = configStore(middlewares);
let store: any;
beforeEach(() => {
  store = mockStore({});
});

// const store = mockStore({
//   login: { isAuth: true },
//   dashBoardAvailableServices: [],
//   dashBoard: {},
// });

describe("Auth action", () => {
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
  it("should call userLogin action", async () => {
    //     API.GetRecipientListService = jest.fn(() =>
    //       Promise.resolve({
    //         data: {},
    //       })
    //     );
    // axios.post.mockResolvedValue(() => Promise.resolve({ data: {} }));
    // axios.post = jest.fn(() =>
    //   Promise.resolve({
    //     data: {},
    //   })
    // );

    const expectedAction = [
      {
        type: ActionType.LOGIN_REQUEST,
      },
      {
        type: ActionType.LOGIN_SUCCESS,
        payload: {},
      },
      {
        type: ActionType.LOGIN_FAILURE,
        payload: {},
      },
      {
        type: ActionType.LOGOUT_USER,
      },
    ];
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    let payload: object = {};
    // const mockedPost = mockedAxios.post.mockReturnValueOnce(payload);
    // const data = await postBatch();
    // expect(axios.post).toHaveBeenCalled();
    await store.dispatch(userLogin({}));
    // await store.dispatch(userLogout({}));
    //     expect(API.GetRecipientListService).toHaveBeenCalledTimes(1);
    store.subscribe(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    //   });
    //   it("should render Navbar properly", async () => {
    //     // render(
    //     //   <Provider store={store}>
    //     //     {/* <Navbar /> */}
    //     //   </Provider>,
    //     //   { wrapper: MemoryRouter }
    //     // );
    //     // expect(document.querySelector(".nav")).toBeInTheDocument();
    //     // waitFor(() =>
    //     //   expect(screen.getByText("Micro").firstChild).toBeInTheDocument()
    //     // );
    //     // console.log(screen.debug(null, 300000));
  });
});
