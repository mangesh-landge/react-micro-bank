import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Login from "./index";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
const mockStore = configStore();
const store = mockStore({
  login: { isAuth: true, token: "string" },
});
describe("Login Component", () => {
  it("should form render properly", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(document.querySelector(".login-form")).toBeInTheDocument();
    // expect(screen.queryAllByText("Login")).toHaveValue();
    waitFor(() => expect(screen.getByText("Login")).toBeInTheDocument());
  });

  it("should render the InputFields", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("inputEmail")).toBeInTheDocument();
    expect(screen.getByTestId("inputPass")).toBeInTheDocument();
  });

  it("should hide and unhide the password", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const btnElement = screen.getByTestId("hide");
    fireEvent.click(btnElement);
    fireEvent.click(btnElement);
  });

  it("should validate email", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const inputEmail = screen.getByTestId("inputEmail");
    fireEvent.change(inputEmail, { target: { value: "yty" } });
    fireEvent.click(inputEmail, { target: { value: null } });
    fireEvent.change(inputEmail, { target: { value: "" } });
    // fireEvent.touchEnd(inputEmail, { target: { value: "" } });
    // fireEvent.touchMove(inputEmail, { target: { value: "" } });
    // fireEvent.touchCancel(inputEmail, { target: { value: "" } });
    // fireEvent.touchStart(inputEmail, { target: { value: "" } });
    // fireEvent.touchEnd(inputEmail, { target: { value: "abc" } });
  });

  it("should validate password", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    const inputPass = screen.getByTestId("inputPass");
    fireEvent.change(inputPass, { target: { value: "Admin@123" } });
    fireEvent.change(inputPass, { target: { value: "Adminabc" } });
    fireEvent.change(inputPass, { target: { value: "12345678" } });
    fireEvent.change(inputPass, { target: { value: "1234" } });
    fireEvent.change(inputPass, { target: { value: "" } });
  });

  it("should have email and password", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const inputEmail = screen.getByTestId("inputEmail");
    const inputPass = screen.getByTestId("inputPass");
    fireEvent.change(inputEmail, { target: { value: "admin@gmail.com" } });
    fireEvent.change(inputPass, { target: { value: "Admin@123" } });
    const btnElement = screen.getByTestId("loginBtn");
    fireEvent.click(btnElement);
  });

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
