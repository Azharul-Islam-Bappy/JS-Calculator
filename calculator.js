// JS calculator

// VARIABLES
let display = document.querySelector("#display"); 
let prevInput = "", currentInput = "", operator = "";
let buttons = document.querySelectorAll(".buttons");
let result = "";

// importing modules
import {calculate} from './mathUtil.js' 

// buttons event handling  
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;
    const content = button.innerText;
    console.log(value, content); // test code
    
    // condition checking
    if (!isNaN(value)) {
      currentInput += value;
      display.value += content;
      
    }
    else if (['+', '-', '/', '*'].includes(value)) {
      prevInput = currentInput;
      display.value += content;
      operator = value;
      currentInput = '';
    }
    else if (value === "=") {
      result = calculate(prevInput,currentInput,operator);
      display.value = result;
      currentInput = result;
      prevInput = '';
      operator = '';
    }
  });
});