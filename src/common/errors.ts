export const normalizeError = (error: unknown): Error => {
  if (typeof error === "string") {
    return new Error(error);
  } else if (error instanceof Error) {
    return error;
  } else {
    return new Error("Unknown error type");
  }
};
