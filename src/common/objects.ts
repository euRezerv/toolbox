export const isObject = (obj: unknown): obj is {} => {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
};

export const isObjectEmpty = (obj: {}) => {
  return Object.keys(obj).length === 0;
};

/**
 * @param obj Object to omit keys from
 * @param keysToOmit Array of keys to omit from the object
 * @returns Shallow copy of the object with the specified keys omitted
 */
export const omitKeys = <T extends {}>(obj: T, keysToOmit: (keyof T)[]): Partial<T> => {
  const newObj = { ...obj };
  keysToOmit.forEach((key) => delete newObj[key]);

  return newObj;
};
