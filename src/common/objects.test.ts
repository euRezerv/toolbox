import { isObject, isObjectEmpty, omitKeys } from "./objects";

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

  it("should return true for objects with no own properties", () => {
    expect(isObjectEmpty(new Error("Something went wrong"))).toBe(true);
    expect(isObjectEmpty(new Date())).toBe(true);
  });

  it("should return false for non-empty objects", () => {
    expect(isObjectEmpty({ key: "value" })).toBe(false);
    expect(isObjectEmpty({ key: "value", key2: [1, "2", {}] })).toBe(false);
  });
});

describe("omitKeys", () => {
  it("should return a new object with the specified keys omitted", () => {
    const obj = { key1: "value1", key2: "value2", key3: "value3" };

    expect(omitKeys(obj, [])).toEqual(obj);
    expect(omitKeys(obj, ["key1"])).toEqual({ key2: "value2", key3: "value3" });
    expect(omitKeys(obj, ["key2", "key3"])).toEqual({ key1: "value1" });
    expect(omitKeys(obj, ["key1", "key3"])).toEqual({ key2: "value2" });
    expect(omitKeys(obj, ["key1", "key2", "key3"])).toEqual({});
    expect(omitKeys(obj, ["key1", "key2", "key3", "key4"] as any)).toEqual({});
    expect(omitKeys(obj, ["key4", "key5", "key6"] as any)).toEqual(obj);
  });

  it("should not modify the original object", () => {
    const obj = { key1: "value1", key2: "value2", key3: "value3" };
    const objCopy = { ...obj };

    omitKeys(obj, ["key1"]);

    expect(obj).toEqual(objCopy);
  });
});
