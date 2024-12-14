import { isLowercase, isString, isUppercase } from "./strings";

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
