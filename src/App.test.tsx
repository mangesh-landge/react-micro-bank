import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

//mock data
const middlewares = [thunk];
const mockStore = configStore(middlewares);
// const store = mockStore({
//   login: { isAuth: true },
//   dashBoardAvailableServices: [],
//   dashBoard: {},
// });
const service = {
  id: 7,
  mIcon: "file/servicesMobileView/payroll.svg",
  dIcon: "file/servicesDeskView/payroll.svg",
  rating: 0,
  header: "Payroll",
  isCurrentService: false,
};
const store = mockStore({
  login: { isAuth: true, token: "string" },
  dashBoardAvailableServices: [
    {
      id: 7,
      mIcon: "file/servicesMobileView/payroll.svg",
      dIcon: "file/servicesDeskView/payroll.svg",
      rating: 0,
      header: "Payroll",
      isCurrentService: false,
    },
  ],

  dashBoard: {
    email: "admin4@gmail.com",
    password: "$2a$10$e7oFqRHfe/HiHOXGONbOTei0l5NRB2LWfwrn6HsPMO5vVRtFf6k0u",
    fullName: "Mangesh Landge",
    dateOfIncorporation: "2022-10-01",
    confirmPassword: "Admin@123",
    companyName: "Perennial",
    avatar: "https://alumni.masaischool.com/storage/samurai_2/mangesh.png",
    currentServices: [
      {
        id: 1,
        mIcon: "file/servicesMobileView/wallet.svg",
        dIcon: "file/servicesDeskView/wallet.svg",
        rating: 4,
        header: "Wallet",
        isCurrentService: false,
      },
      {
        id: 2,
        mIcon: "file/servicesMobileView/currentAccount.svg",
        dIcon: "file/servicesDeskView/currentAccount.svg",
        rating: 5,
        header: "Current Account",
        isCurrentService: false,
      },
    ],
    id: "ldUypK9",
  },
});
describe("APP Page", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // console.log(screen.debug(null, 300000));
    // const linkElement = screen.getByText(/Login/i);
    // const linkElement = document.getElementsByClassName(".App");
    // expect(linkElement).toBeInTheDocument();
  });
});
