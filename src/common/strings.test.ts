import { getRandomString, isLowercase, isString, isUppercase } from "./strings";

describe("isString", () => {
  it("should return true for strings", () => {
    expect(isString("")).toBe(true);
    expect(isString("string")).toBe(true);
    expect(isString("42")).toBe(true);
    expect(isString("true")).toBe(true);
  });

  it("should return false for non-strings", () => {
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(42)).toBe(false);
    expect(isString(true)).toBe(false);
  });
});

describe("isUppercase", () => {
  it("should return true for uppercase strings", () => {
    expect(isUppercase("")).toBe(true);
    expect(isUppercase("UPPERCASE")).toBe(true);
    expect(isUppercase("UPPERCASE 42")).toBe(true);
    expect(isUppercase("42")).toBe(true);
    expect(isUppercase("TRUE")).toBe(true);
  });

  it("should return false for non-uppercase strings", () => {
    expect(isUppercase("lowercase")).toBe(false);
    expect(isUppercase("MixedCase")).toBe(false);
    expect(isUppercase("true")).toBe(false);
  });
});

describe("isLowercase", () => {
  it("should return true for lowercase strings", () => {
    expect(isLowercase("")).toBe(true);
    expect(isLowercase("lowercase")).toBe(true);
    expect(isLowercase("lowercase 42")).toBe(true);
    expect(isLowercase("42")).toBe(true);
    expect(isLowercase("true")).toBe(true);
  });

  it("should return false for non-lowercase strings", () => {
    expect(isLowercase("UPPERCASE")).toBe(false);
    expect(isLowercase("MixedCase")).toBe(false);
    expect(isLowercase("TRUE")).toBe(false);
  });
});

describe("getRandomString", () => {
  it("should return a string of the given length", () => {
    // act
    const result = getRandomString(10);

    // assert
    expect(result).toHaveLength(10);
  });

  it("should return a string containing all letters and numbers if no characters are provided", () => {
    // act
    const result = getRandomString(10);

    // assert
    expect(result).toMatch(/^[a-zA-Z0-9]{10}$/);
  });

  it("should return a string containing only the given characters", () => {
    // act
    const result = getRandomString(10, "abc");

    // assert
    expect(result).toMatch(/^[abc]{10}$/);
  });

  it("should return a string of a random length within the given range", () => {
    // act
    const result = getRandomString([5, 10]);

    // assert
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.length).toBeLessThanOrEqual(10);
  });

  it("should return a string containing only the given characters within the given range", () => {
    // act
    const result = getRandomString([5, 10], "abc");

    // assert
    expect(result).toMatch(/^[abc]{5,10}$/);
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.length).toBeLessThanOrEqual(10);
  });

  it("should throw an error if the range array does not contain at least 2 elements", () => {
    // act
    const result = () => getRandomString([5]);

    // assert
    expect(result).toThrow();
  });
});
