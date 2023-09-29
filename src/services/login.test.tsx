import { login } from "./login";

// const mockSetIsLoggedIn = jest.fn();
// const mockNavegate = jest.fn();

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useContext: () => ({
//     isLoggedIn: true,
//     setIsLoggedIn: mockSetIsLoggedIn,
//   }),
// }));

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockNavegate,
// }));

describe("login", () => {
  // const mockAtert = jest.fn();
  //window.alert = mockAtert;

  const mockEmail = "email@example.com";

  it("Should display a welcome alert with a valid email", async () => {
    const response = await login(mockEmail);
    // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    // expect(mockNavegate).toHaveBeenCalledWith("/1");
    expect(response).toBeTruthy();
  });

  it("Should display an error if is not a valid email", async () => {
    // await Login("email1@example.com");
    // expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
    // expect(mockNavegate).not.toHaveBeenCalledWith();

    const response = await login("email1@example.com");
    expect(response).toBeFalsy();
  });
});
