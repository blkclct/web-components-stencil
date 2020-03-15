export function format(first: string, middle: string, last: string): string {
  return (
    (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "")
  );
}

export const calc = (input: string): number => {
  const inputNumber = input.split(/\+|\-|\*|\//).map(s => parseInt(s));
  const inputOperator = input.split(/\d+/).filter(s => s !== "");

  if (inputNumber === null || inputOperator === null) {
    return 0;
  }
  if (inputNumber.length <= 1 || inputOperator.length <= 0) {
    return 0;
  }
  if (inputNumber.length - inputOperator.length !== 1) {
    return 0;
  }

  return inputOperator.reduce((acc, cur, index) => {
    return _calc(acc, inputNumber[index + 1], cur);
  }, inputNumber[0]);
};

const _calc = (num1: number, num2: number, operator: string): number => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};
