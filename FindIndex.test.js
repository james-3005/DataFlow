const {getIndex}= require('./FindIndex');

test("1", () => {
  expect(getIndex([1,2], 1)).toBe(0);
})
test("2", () => {
  expect(getIndex([1], 2)).toBe(-1);
})
test("3", () => {
  expect(getIndex([], 1)).toBe(-1);
})
test("5", () => {
  expect(getIndex([2,3], 2)).toBe(0);
})
test("6", () => {
  expect(getIndex([2,3], 3)).toBe(1);
})