import { isObject, isObjectEmpty } from "./objects";

describe("isObject", () => {
  it("should return true for objects", () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: "value" })).toBe(true);
    expect(isObject({ key: "value", key2: [1, "2", {}] })).toBe(true);
    expect(isObject(new Error("Something went wrong"))).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  it("should return false for non-objects", () => {
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject("string")).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});

describe("isObjectEmpty", () => {
  it("should return true for empty objects", () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  it("should return false for non-empty objects", () => {
    expect(isObjectEmpty({ key: "value" })).toBe(false);
    expect(isObjectEmpty({ key: "value", key2: [1, "2", {}] })).toBe(false);
    expect(isObjectEmpty(new Error("Something went wrong"))).toBe(false);
  });
});
