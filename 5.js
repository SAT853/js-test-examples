const { subtract, sum } = require("./math");

test("sum add numbers", () => {
  const result = sum(7, 3);
  expect(result).toBe(10);
});

test("subtract numbers", () => {
  const result = subtract(3, 7);
  expect(result).toBe(4);
});
