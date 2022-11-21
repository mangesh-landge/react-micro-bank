import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../index";
import thunk from "redux-thunk";
import AvailableService from "../availableService";
import CurrentService from "../currentService";
import Deatails from "../details";
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
describe("Dashboard Page", () => {
  it("should render properly", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(document.querySelector(".dashbord-body")).toBeInTheDocument();
    waitFor(() => expect(screen.getByText("Dashboard")).toBeInTheDocument());

    const btnElement = document.getElementById("showSummary");
    fireEvent.click(btnElement as HTMLElement);
    // console.log(screen.debug(null, 300000));
  });

  it("should render available services properly", async () => {
    render(
      <Provider store={store}>
        <AvailableService key={service.id} service={service} />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(
      document.querySelector(".available-sub-service")
    ).toBeInTheDocument();
    waitFor(() => expect(screen.getByText("Payroll")).toBeInTheDocument());
  });

  it("should render current services properly", async () => {
    render(
      <Provider store={store}>
        <CurrentService
          key={service.id}
          service={service}
          setEditedService={() => jest.fn()}
        />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(document.querySelector(".current-sub-service")).toBeInTheDocument();
    waitFor(() => expect(screen.getByText("Payroll")).toBeInTheDocument());
    const btnElement = document.querySelectorAll("#starClick")[0];
    fireEvent.click(btnElement);
    fireEvent.click(btnElement);
  });

  it("should render Details screen properly", async () => {
    render(
      <Provider store={store}>
        <Deatails />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(document.querySelector(".details")).toBeInTheDocument();
    waitFor(() =>
      expect(screen.getByText("Date").firstChild).toBeInTheDocument()
    );
    // console.log(screen.debug(null, 300000));
    const btnElement = document.querySelectorAll("#modal")[0];
    fireEvent.click(btnElement);
    // fireEvent.click(btnElement);
  });

  //   it("should render the InputFields", () => {
  //     render(
  //       <Provider store={store}>
  //         <Login />
  //       </Provider>,
  //       { wrapper: MemoryRouter }
  //     );
  //     expect(screen.getByTestId("inputEmail")).toBeInTheDocument();
  //     expect(screen.getByTestId("inputPass")).toBeInTheDocument();
  //   });

  //   it("should hide and unhide the password", () => {
  //     render(
  //       <Provider store={store}>
  //         <Login />
  //       </Provider>,
  //       { wrapper: MemoryRouter }
  //     );
  //     const btnElement = screen.getByTestId("hide");
  //     fireEvent.click(btnElement);
  //     fireEvent.click(btnElement);
  //   });

  //   it("should validate email", () => {
  //     render(
  //       <Provider store={store}>
  //         <Login />
  //       </Provider>,
  //       { wrapper: MemoryRouter }
  //     );
  //     const inputEmail = screen.getByTestId("inputEmail");
  //     fireEvent.change(inputEmail, { target: { value: "yty" } });
  //     fireEvent.click(inputEmail, { target: { value: null } });
  //     fireEvent.change(inputEmail, { target: { value: "" } });
  //     // fireEvent.touchEnd(inputEmail, { target: { value: "" } });
  //     // fireEvent.touchMove(inputEmail, { target: { value: "" } });
  //     // fireEvent.touchCancel(inputEmail, { target: { value: "" } });
  //     // fireEvent.touchStart(inputEmail, { target: { value: "" } });
  //     // fireEvent.touchEnd(inputEmail, { target: { value: "abc" } });
  //   });

  //   it("should validate password", () => {
  //     render(
  //       <Provider store={store}>
  //         <Login />
  //       </Provider>,
  //       { wrapper: MemoryRouter }
  //     );

  //     const inputPass = screen.getByTestId("inputPass");
  //     fireEvent.change(inputPass, { target: { value: "Admin@123" } });
  //     fireEvent.change(inputPass, { target: { value: "Adminabc" } });
  //     fireEvent.change(inputPass, { target: { value: "12345678" } });
  //     fireEvent.change(inputPass, { target: { value: "1234" } });
  //     fireEvent.change(inputPass, { target: { value: "" } });
  //   });

  //   it("should have email and password", () => {
  //     render(
  //       <Provider store={store}>
  //         <Login />
  //       </Provider>,
  //       { wrapper: MemoryRouter }
  //     );
  //     const inputEmail = screen.getByTestId("inputEmail");
  //     const inputPass = screen.getByTestId("inputPass");
  //     fireEvent.change(inputEmail, { target: { value: "admin@gmail.com" } });
  //     fireEvent.change(inputPass, { target: { value: "Admin@123" } });
  //     const btnElement = screen.getByTestId("loginBtn");
  //     fireEvent.click(btnElement);
  //   });

  // it("should disable submit button", () => {
  //   render(
  //     <Provider store={store}>
  //       <Login />
  //     </Provider>,
  //     { wrapper: MemoryRouter }
  //   );
  //   const btnElement = screen.getByTestId("loginBtn");
  //   const inputEmail = screen.getByTestId("inputEmail");
  //   const inputPass = screen.getByTestId("inputPass");
  //   fireEvent.change(inputPass, { target: { value: "" } });
  //   expect(btnElement).toHaveAttribute("disabled");
  // });
});
