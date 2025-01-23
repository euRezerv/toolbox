import { filterDuplicates, filterFalsy, asyncFilter } from "./arrays";

describe("filterDuplicates", () => {
  it("should filter duplicate primitive values (numbers)", () => {
    expect(filterDuplicates([6, 1, 2, 2, 3, 4, 4, 5, 6, 6, 6])).toEqual([6, 1, 2, 3, 4, 5]);
  });

  it("should filter duplicate primitive values (strings)", () => {
    expect(filterDuplicates(["a", "b", "a", "c", "b", "d"])).toEqual(["a", "b", "c", "d"]);
  });

  it("should filter duplicate boolean values", () => {
    expect(filterDuplicates([true, false, true, false, false])).toEqual([true, false]);
  });

  it("should handle an empty array", () => {
    expect(filterDuplicates([])).toEqual([]);
  });

  it("should handle an array with a single value", () => {
    expect(filterDuplicates([42])).toEqual([42]);
  });

  it("should handle an array of objects with keySelector", () => {
    // arrange
    const data = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Charlie" },
    ];

    // act
    const result = filterDuplicates(data, (item) => item.id);

    // assert
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });

  it("should handle mixed primitive and object values (without keySelector)", () => {
    // arrange
    const data = [1, "a", 1, "a", { id: 1 }, { id: 1 }];

    // act
    const result = filterDuplicates(data);

    // assert
    expect(result).toEqual([1, "a", { id: 1 }, { id: 1 }]);
  });

  it("should filter complex objects by computed keys using keySelector", () => {
    // arrange
    const data = [
      { id: 1, value: 100 },
      { id: 2, value: 200 },
      { id: 1, value: 300 },
    ];

    // act
    const result = filterDuplicates(data, (item) => `${item.id}:${item.value}`);

    // assert
    expect(result).toEqual(data);
  });
});

describe("filterFalsy", () => {
  it("should remove all falsy values", () => {
    // arrange
    const data = [0, 1, false, 2, "", 3, null, 4, undefined, NaN, 5, 6];

    // act
    const result = filterFalsy(data);

    // assert
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle an array with no falsy values", () => {
    // arrange
    const data = [1, 2, 3, 4];

    // act
    const result = filterFalsy(data);

    // assert
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should handle an array with only falsy values", () => {
    // arrange
    const data = [0, false, "", null, undefined, NaN];

    // act
    const result = filterFalsy(data);

    // assert
    expect(result).toEqual([]);
  });

  it("should handle an empty array", () => {
    expect(filterFalsy([])).toEqual([]);
  });
});

describe("asyncFilter", () => {
  it("should filter values based on an async condition", async () => {
    // arrange
    const data = [1, 2, 3, 4, 5];

    // act
    const result = await asyncFilter(data, async (value) => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      return value % 2 === 0;
    });

    // assert
    expect(result).toEqual([2, 4]);
  });

  it("should return the same array if all values pass the async condition", async () => {
    // arrange
    const data = [1, 2, 3];

    // act
    const result = await asyncFilter(data, async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      return true;
    });

    // assert
    expect(result).toEqual(data);
  });

  it("should return an empty array if no values pass the async condition", async () => {
    // arrange
    const data = [1, 2, 3];

    // act
    const result = await asyncFilter(data, async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      return false;
    });

    // assert
    expect(result).toEqual([]);
  });

  it("should handle an empty array", async () => {
    // act
    const result = await asyncFilter([], async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      return true;
    });

    // assert
    expect(result).toEqual([]);
  });

  it("should handle async errors gracefully", async () => {
    // arrange
    const data = [1, 2, 3];

    // act
    const result = await asyncFilter(data, async (value) => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      if (value === 2) throw new Error("Test error");
      return value % 2 === 0;
    }).catch((error) => {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Test error");
    });

    // assert
    expect(result).toBeUndefined();
  });
});
