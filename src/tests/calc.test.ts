import { calc } from "../app/calc";
const { add, subtract, multiply, divide } = calc;

describe("calculator", function () {
  let counter = 5;

  beforeEach(() => {
    counter = 0;
  });

  it("should be able to add two numbers", function () {
    counter++;
    expect(add(1, 2)).toEqual(3);
  });

  it("should add all numbers given", () => {
    counter++;

    expect(add(20, 30, 40, 50, 60)).toEqual(200);
  });

  it("Should be able to subtract two numbers", () => {
    counter++;

    expect(subtract(7, 5)).toEqual(2);
  });
  it("should be able to multiply all numbers given", () => {
    counter++;

    expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
  });

  it("should divide two numbers", () => {
    counter++;
    console.log(counter);
    expect(divide(20, 5)).toEqual(4);
  });
});

describe("practise", () => {
  interface Obj {
    name: String;
    hobbies: Array<string>;
  }

  const obj: Obj = {
    name: "feisal",
    hobbies: ["reading", "writing", "coding"],
  };

  it("checks whether name is defined", () => {
    expect(obj.name).toBeDefined();
  });

  it("checks whether object contains correct values", () => {
    expect(obj).toEqual({
      name: "feisal",
      hobbies: ["reading", "writing", "coding"],
    });
  });

  it("checks whether reading and writing are contained in hobby", () => {
    const subset = expect.objectContaining({
      hobbies: expect.arrayContaining(["reading", "writing"]),
      name: expect.stringContaining("feisal"),
    });

    expect(obj).toEqual(subset);
  });
});

describe("Mocks", () => {
  it("calls a function 2 times", () => {
    const mock = jest.fn();
    mock("feisal");
    mock("fei");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenNthCalledWith(1, "feisal");
    expect(mock).toHaveBeenLastCalledWith("fei");
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it("adds two numbers", () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => a + b);
    expect(fakeAdd(1, 8)).toEqual(9);
  });

  it("prints greetings", () => {
    const printHello = jest.fn().mockImplementation((name) => `Hello ${name}`);
    expect(printHello("Feisal")).toEqual("Hello Feisal");
  });
});
