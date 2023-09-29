import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  const mockGetItem = jest.spyOn(Storage.prototype, "getItem");

  it("Shoud return storage object", () => {
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalled();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Shoud create storage object", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Shoud change storage object", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
});
