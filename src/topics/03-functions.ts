function addNumbers(num1: number, num2: number) {
  return num1 + num2;
}

const subNumbers = (a: number, b: number) => {
  return a - b;
};

function multiply(firsNumber: number, secondNumber?: number, base: number = 2) {
  return firsNumber * base;
}

const result = addNumbers(1, 2);
const substract = subNumbers(10, 4);
const multiplyResult = multiply(5);

console.log({ result, substract, multiplyResult });

export {};
