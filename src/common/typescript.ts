/**
 * A type that represents a value that is either the entire T object or an empty object.
 */
export type AllOrNothing<T> = T | (Partial<Record<keyof T, never>> & {});
