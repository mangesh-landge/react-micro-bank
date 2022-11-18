import configStore from "redux-mock-store";
import thunk from "redux-thunk";
import { userLogin, userLogout } from "../actionCreators";
import { ActionType } from "../actionTypes";
const axios = require("axios");
// import * as axios from "axios";
jest.mock("axios");

const middlewares = [thunk];
const mockStore = configStore(middlewares);
let store: any;
beforeEach(() => {
  store = mockStore({});
});

describe("Auth action", () => {
  it("should call userLogin action", async () => {
    // axios.post = jest.fn(() =>
    //   Promise.resolve({
    //     data: {},
    //   })
    // );

    axios.post = jest.fn().mockResolvedValue({
      data: { email: "admin", password: "Admin@123" },
    });

    const expectedAction = [
      {
        type: ActionType.LOGIN_REQUEST,
      },
      {
        type: ActionType.LOGIN_SUCCESS,
        payload: { email: "admin@gmail.com", password: "Admin@123" },
      },
      {
        type: ActionType.LOGIN_FAILURE,
        payload: {},
      },
    ];
    await store.dispatch(
      userLogin({ email: "admin@gmail.com", password: "Admin@123" })
    );
    // expect(axios.post).toHaveBeenCalledTimes(1);
    store.subscribe(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    // console.log(screen.debug(null, 300000));
  });

  it("should call userLogOut action", async () => {
    const expectedAction = [
      {
        type: ActionType.LOGOUT_USER,
      },
    ];
    await store.dispatch(userLogout());
    store.subscribe(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
