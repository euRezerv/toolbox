import { normalizeError } from "./errors";

describe("normalizeError", () => {
  it("should correctly normalize a string to an Error object", () => {
    const error = "Something went wrong";
    const result = normalizeError(error);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe(error);
  });

  it("should return the same Error object if input is already an Error", () => {
    const error = new Error("Something went wrong");
    const result = normalizeError(error);

    expect(result).toBe(error);
  });

  it("should return an Error object with the message from an object with a 'message' property", () => {
    const error = { message: "Something went wrong" };
    const result = normalizeError(error);

    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe(error.message);
  });

  it("should return an Error object with default message for objects without a 'message' property", () => {
    const result = normalizeError({});
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("Unknown error type");
  });

  it("should return an Error object with default message for null input", () => {
    const result = normalizeError(null);
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("Unknown error type");
  });

  it("should return an Error object with default message for undefined input", () => {
    const result = normalizeError(undefined);
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("Unknown error type");
  });

  it("should return an Error object with default message for non-object types", () => {
    const result = normalizeError(42);
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("Unknown error type");
  });

  it("should return an Error object with default message for arrays", () => {
    const result = normalizeError(["An array error"]);
    expect(result).toBeInstanceOf(Error);
    expect(result.message).toBe("Unknown error type");
  });
});
