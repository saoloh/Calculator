

function add(num1,num2,){
    return num1 + num2 ; 
}

function subtract(num1,num2,){
    return num1 - num2 ; 
}

function multiply(num1,num2,){
    return num1 * num2 ; 
}

function divide(num1,num2,){
    if (num2 === 0) return 'error'
    return num1 / num2 ; 
}

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2);
            break;

        case '-':
            return subtract(num1,num2);
            break;
        
        case '*':
            return multiply(num1,num2);
            break;

        case '/':
            return divide(num1,num2);
            break;
            

        default :
            console.log("try another operator");
    }
}

// Get the display element and initialize the current input
const display = document.querySelector('.display');
let currentInput = "0";
let firstNumber = null;
let operator = null;
let secondNumber = null;
let shouldResetInput = false; 

// Get the first and second numbers
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the digit from the button's data-value attribute
    const digit = event.target.getAttribute('data-value');

    // If the current input is "0", replace it with the digit
    // Otherwise, append the new digit

    if (shouldResetInput) {
        currentInput = "0";
        shouldResetInput = false;
      }
  
      currentInput = currentInput === "0" ? digit : currentInput + digit;
      display.textContent = currentInput;
  
      // Update the appropriate number based on operator state
      if (operator) {
        secondNumber = Number(currentInput);
      } else {
        firstNumber = Number(currentInput); // Fixed typo
      }
  
      display.textContent = currentInput;
    
    
    
    
  });
});


// get the operator

const operatorButtons = document.querySelectorAll('.operator');
 operatorButtons.forEach(button =>{
    button.addEventListener('click', e => {
         operator = e.target.getAttribute('data-value');
         shouldResetInput = true; 
    display.textContent = operator;
    })

 })


//make the calculation

const getCalculation = document.querySelector('.equal');
    getCalculation.addEventListener('click', event => {
       const result =  operate(firstNumber,secondNumber,operator);
       display.textContent = result.toString();
       currentInput = result.toString();
       firstNumber = result;
       operator = null;
       shouldResetInput = true;
    })

    // clear
    const getClear = document.querySelector('.clear');
    getClear.addEventListener('click', event => {
       currentInput = 0;
       firstNumber = null;  // Reset all state
       operator = null;
       display.textContent = 0;
    })
