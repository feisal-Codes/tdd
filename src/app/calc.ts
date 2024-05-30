const add = (...args: Array<number>): number =>
  args.reduce((a: number, c: number) => a + c, 0);

const subtract = (a: number, b: number): number => a - b;

const multiply = (...args: Array<number>): number => {
  return args.reduce((a, c) => a * c, 1);
};

const divide = (a: number, b: number): any => {
  if (a < b) return `${a} should be ${b}`;
  else return a / b;
};

export const calc = { add, subtract, multiply, divide };
