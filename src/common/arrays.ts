/**
 * Filters duplicates from an array, optionally by a specific property, keeping the first occurrence.
 *
 * @param array - The array to filter.
 * @param keySelector - Optional function to extract the key for filtering.
 * @returns A new array with duplicates removed.
 *
 * @example
 * const filtered = filterDuplicates([1, 2, 1]);
 * const filtered = filterDuplicates([{ id: 1 }, { id: 2 }, { id: 1 }], (item) => item.id);
 */
export const filterDuplicates = <T>(array: T[], keySelector?: (item: T) => unknown): T[] => {
  const seen = new Set();
  return array.filter((item) => {
    const key = keySelector ? keySelector(item) : item;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

/**
 * Filters an array for truthy values.
 *
 * @param array - The array to filter.
 * @returns A new array with falsy values removed.
 */
export const filterFalsy = <T>(array: T[]): T[] => {
  return array.filter(Boolean);
};

/**
 * Filters an array asynchronously based on a callback function.
 *
 * @param array - The array to filter.
 * @param callback - An async function that returns true if the item should be included.
 * @returns A promise resolving to a filtered array.
 */
export const asyncFilter = async <T>(array: T[], callback: (value: T, index: number, array: T[]) => Promise<boolean>) => {
  const results = await Promise.all(array.map(callback));

  return array.filter((_, index) => results[index]);
};
