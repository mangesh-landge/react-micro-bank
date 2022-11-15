import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import Navbar from "../../../components/navBar";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
//dashBoardAvailableServices
//dashBoard
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
describe("Navbar View", () => {
  it("should render Navbar properly", async () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(document.querySelector(".nav")).toBeInTheDocument();
    waitFor(() =>
      expect(screen.getByText("Micro").firstChild).toBeInTheDocument()
    );
    // console.log(screen.debug(null, 300000));
    const btnElement = document.querySelectorAll(".drop-btn")[0];
    fireEvent.click(btnElement as HTMLElement);
    const btnElement1 = document.querySelectorAll(".nav-logo")[0];
    fireEvent.click(btnElement1 as HTMLElement);
  });
});
