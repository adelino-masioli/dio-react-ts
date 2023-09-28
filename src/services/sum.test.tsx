import { multiply, sum } from "./sum";

describe("sum", () => {
  it("should be able to sum", () => {
    const value = sum(1);
    expect(value).toBe(2);
  });

  it("should be able to multiply per 2", () => {
    const value = multiply(2, 2);
    expect(value).toBe(4);
  });

  it("should be able to multiply per 3", () => {
    const value = multiply(2, 3);
    expect(value).toBe(6);
  });

  it("should not report an error with a multiplier other than 2 or 3", () => {
    const value = multiply(2, 4);
    expect(value).toBe("Multiplier not accepted");
  });
});
