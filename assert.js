const strictEqual = (result, expected) => {
  throw new Error(`${result} is not equal to ${expected}`);
};

module.exports = strictEqual;
