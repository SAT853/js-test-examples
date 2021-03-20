const { subtract, sum } = require("./math");

test("sum add numbers", () => {
  const result = sum(7, 3);
  expect(result).toBe(10);
});

test("subtract numbers", () => {
  const result = subtract(3, 7);
  expect(result).toBe(4);
});

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error(`${actual} is not equal to ${expected}`);
    },
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}
