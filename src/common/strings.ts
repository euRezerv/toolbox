export const DIGITS = "0123456789";
export const EN_ALPHABET_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
export const EN_ALPHABET_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const EN_ALPHABET = EN_ALPHABET_UPPERCASE + EN_ALPHABET_LOWERCASE;

export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isUppercase = (str: string): boolean => {
  return str === str.toUpperCase();
};

export const isLowercase = (str: string): boolean => {
  return str === str.toLowerCase();
};

/**
 * Returns a random string of a given length.
 * @param range - The length of the string. If an array is provided, the string will have a length between the two numbers (including).
 * @param possibleCharacters - The characters that can be used in the string. If not provided, the string will contain all letters and numbers.
 * @returns A random string.
 *
 * @example
 * getRandomString(10); // "aBc1De2Fg3"
 * getRandomString([5, 10], "abc"); // "abccab"
 * getRandomString([5, 10]); // "aB1cD2eF3"
 * getRandomString(5, "abc"); // "abcca"
 * getRandomString(5); // "aBcD1"
 */
export const getRandomString = (range: number | number[], possibleCharacters?: string): string => {
  const characters = possibleCharacters ?? `${EN_ALPHABET}${DIGITS}`;
  let from, to;
  let result = "";

  if (Array.isArray(range)) {
    if (range.length < 2) {
      throw new Error("The range array must contain exactly 2 elements.");
    }

    from = range[0];
    to = range[1];
  } else {
    from = 0;
    to = range;
  }

  for (let i = from; i < to; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
