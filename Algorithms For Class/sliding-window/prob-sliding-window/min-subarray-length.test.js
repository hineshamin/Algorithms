const minSubarrayLength = require("./min-subarray-length");

describe("#minSubarrayLength", function() {
  it("returns the min length", function() {
    expect(minSubarrayLength([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubarrayLength([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubarrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(
      1
    );
    expect(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    expect(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
    expect(minSubarrayLength([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
    expect(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });
});
