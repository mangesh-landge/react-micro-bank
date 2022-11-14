import { act, render, screen } from "@testing-library/react";
const axios = require("axios");
jest.mock("axios");

describe("AppRoutes testing", () => {
  test("mocking external endpoint in axios", () => {
    // arrange
    const mockedResponse = {
      data: { username: "test-user", address: "india" },
    };
    axios.get.mockResolvedValue(mockedResponse);
    const app = require("../app");

    // act
    app.getUserData();

    // asserts
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith("https://reqres.in/api/users/2");
  });
});
