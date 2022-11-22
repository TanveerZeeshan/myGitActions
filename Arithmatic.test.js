const Multiply = require("./Multiply");

const Divide = require("./DivideFunctionality");

test("Multiply testCase", () => {
  expect(Multiply(2, 5)).toBe(10);
});

test("Divide testCase", () => {
  expect(Divide(20, 4)).toBe(5);
});
