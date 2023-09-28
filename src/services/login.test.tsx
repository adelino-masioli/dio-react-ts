import { login } from "./login";

describe("login", () => {
  const mockAtert = jest.fn();
  window.alert = mockAtert;

  it("Should display a welcome alert", () => {
    login();
    expect(mockAtert).toBeCalled();
    expect(mockAtert).toHaveBeenCalledWith("Welcome");
  });
});
