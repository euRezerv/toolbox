export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isUppercase = (str: string): boolean => {
  return str === str.toUpperCase();
};

export const isLowercase = (str: string): boolean => {
  return str === str.toLowerCase();
};
