import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import EditProfile from "./index";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
const mockStore = configStore();
const store = mockStore({
  login: { isAuth: true },
});
describe("Sign up Component", () => {
  it("should form render properly", () => {
    render(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(document.querySelector(".edit-text")).toBeInTheDocument();
    waitFor(() => expect(screen.getByText("Update")).toBeInTheDocument());
  });

  it("should render the InputFields", () => {
    render(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByTestId("companyName")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("oldPassword")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("confirmPassword")).toBeInTheDocument();
  });

  it("should hide and unhide the password", () => {
    render(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const btnOldPassElement = screen.getByTestId("oHide");
    const btnPassElement = screen.getByTestId("pHide");
    const btnConfirmPassElement = screen.getByTestId("cHide");
    fireEvent.click(btnOldPassElement);
    fireEvent.click(btnOldPassElement);
    fireEvent.click(btnPassElement);
    fireEvent.click(btnPassElement);
    fireEvent.click(btnConfirmPassElement);
    fireEvent.click(btnConfirmPassElement);
  });

  it("should validate email", () => {
    render(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const inputEmail = screen.getByTestId("email");
    fireEvent.change(inputEmail, { target: { value: "yty" } });
    fireEvent.click(inputEmail, { target: { value: null } });
    fireEvent.change(inputEmail, { target: { value: "" } });
  });

  it("should validate password", () => {
    render(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    const inputPass = screen.getByTestId("password");
    fireEvent.change(inputPass, { target: { value: "Admin@123" } });
    fireEvent.change(inputPass, { target: { value: "Adminabc" } });
    fireEvent.change(inputPass, { target: { value: "12345678" } });
    fireEvent.change(inputPass, { target: { value: "1234" } });
    fireEvent.change(inputPass, { target: { value: "" } });
  });

  it("should have all input fields", () => {
    render(
      <Provider store={store}>
        <EditProfile />
      </Provider>,
      { wrapper: MemoryRouter }
    );
    const avatar =
      "https://alumni.masaischool.com/storage/samurai_2/mangesh.png";
    const companyName = screen.getByTestId("companyName");
    const email = screen.getByTestId("email");
    const oldPassword = screen.getByTestId("oldPassword");
    const password = screen.getByTestId("password");
    const confirmPassword = screen.getByTestId("confirmPassword");
    fireEvent.change(companyName, { target: { value: "admin" } });
    fireEvent.change(email, { target: { value: "admin@gmail.com" } });
    fireEvent.change(oldPassword, { target: { value: "Admin@123" } });
    fireEvent.change(password, { target: { value: "Admin@123" } });
    fireEvent.change(confirmPassword, { target: { value: "Admin@123" } });
    // console.log(screen.debug(null, 300000));
    const btnElement = screen.getByTestId("updateBtn");
    fireEvent.click(btnElement);
  });
});
