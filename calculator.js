// JS calculator

// importing modules
import {calculate} from './mathUtil.js' 

// VARIABLES
let display = document.querySelector("#display"); 
let prevInput = "", currentInput = "", operator = "";
let buttons = document.querySelectorAll(".buttons");
let result = "";

// buttons event handling  
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;
    const content = button.innerText;
    console.log(value, content); // test code
    
    // condition checking
    if (!isNaN(value) || value === '.') {
      currentInput += value;
      display.value += content;
      
    }
    
    else if (['+', '-', '/', '%', '*'].includes(value)) {
      prevInput = currentInput;
      display.value += content;
      operator += value;
      currentInput = '';
    }
    else if (value === "=") {
      let num1 = Number(prevInput), num2 = Number(currentInput);
      result = calculate(num1, num2, operator);
      currentInput = result.toString();
      display.value = result.toString();
      prevInput = '';
      operator = '';
    }
    else if (value === "AC") {
      currentInput = "";
      prevInput = "";
      operator = "";
      display.value = "";
      display.placeholder = "0";
    }
    else if (value === "←") {
      if (currentInput !== "") {
        console.log(typeof currentInput); // test code
        currentInput = currentInput.slice(0,-1);
        display.value = display.value.slice(0, -1);
       
        console.log(currentInput,'\n',display.value); // test code
      }
      else if (operator !== "") {
        operator = "";
        display.value = display.value.slice(0, -1);
        console.log(operator,'\n',display.value); // test code
      }
    }
  });
});