export const isObject = (obj: unknown): obj is {} => {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
};

export const isObjectEmpty = (obj: {}) => {
  return Object.keys(obj).length === 0;
};

export const omitKeys = <T extends {}>(obj: T, keys: (keyof T)[]): Partial<T> => {
  const newObj = { ...obj };
  keys.forEach((key) => delete newObj[key]);

  return newObj;
};
