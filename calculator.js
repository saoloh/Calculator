

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
    return num1 / num2 ; 
}

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            add(num1,num2);
            break;

        case '-':
            subtract(num1,num2);
            break;
        
        case '*':
            multiply(num1,num2);
            break;

        case '/':
            divide(num1,num2);
            break;
            

        default :
            console.log("try another operator");
    }
}

// Get the display element and initialize the current input
const display = document.querySelector('.display');
let currentInput = "0";

// Get the first and second numbers
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(button => {
  button.addEventListener('click', event => {
    // Get the digit from the button's data-value attribute
    const digit = event.target.getAttribute('data-value');

    // If the current input is "0", replace it with the digit
    // Otherwise, append the new digit
    if (currentInput === "0") {
      currentInput = digit;
    } else {
      currentInput += digit;
    }

    // Update the display with the new current input
    display.textContent = currentInput;
    
     
    let firtstNumber = currentInput;
    
  });
});

/*
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', event => {
        const op = event.target.getAttribute('data-value');
    })
    let firstOperator = op;
    display.textContent = "0";
})


const getCalculation = document.querySelector('.equal');
    getCalculation.addEventListener('click', event => {
        operate(firtstNumber,secondNumber,firstOperator);
    })
*/