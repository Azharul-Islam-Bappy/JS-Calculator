// Calculator || console version

export function addNumber(num1, num2) {
  return num1 + num2;
}
export function subtract(num1, num2) {
  return num1 - num2;
}
export function multiply(num1, num2) {
  return num1 * num2;
}
export function divide(num1, num2) {
  return num1 / num2;
}
export function remainder(num1, num2) {
  return num1 % num2;
}
export function logResult(num1, num2, operator, result) {
  console.log(`${num1} ${operator} ${num2} = ${result}`);
}


// calculate 
export function calculate(num1, num2, operator) {
  let result;
  
  // operator check
  switch (operator) {
    case '+':
      // add numbers 
      result = addNumber(num1, num2);
      return result;
      break;
    case '-':
      // subtract numbers 
      result = subtract(num1, num2);
      return result;
      break;
    case '*':
      // multiply numbers
      result = multiply(num1, num2);
      return result;
      break;
    case '/':
      // divide numbers
      result = divide(num1, num2);
      return result;
      break;
    case '%':
      // divide numbers
      result = remainder(num1, num2);
      return result;
      break;
    default:
      // exception or Error 
      console.error('No operator found');
  }
}

calculate(5,20,'*'); // Expected Output: 100