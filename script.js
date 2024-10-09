let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "0";

let btns = document.querySelectorAll("button");
let result = document.querySelector(".result");

result.textContent = "0";

function updateDisplay() {
    result.textContent = displayValue;
}


function handleButtonClick(value) {

    if (value == "AC") {
      resetCalculator();
    }
    if (value == "C"){
      if(displayValue.length == 1){
        result.textContent = '0';
      }
      else if(displayValue.length >= 1){
        displayValue = displayValue.slice(0, -1);
        result.textContent = displayValue;
      }
    }

    if (value == '%'){
      
    }

    if (!isNaN(value)) {
      if (displayValue === "0") {
        displayValue = value;
        
      } else {
        displayValue += value;
      }
      console.log(displayValue.length);
      result.textContent = displayValue;
    }
    if (value === '.') {
        if (!displayValue.includes('.')) {
            displayValue += value; 
            result.textContent = displayValue; 
        }
        return; 
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
      } else if (operator !== null && displayValue !== "") {
        secondNumber = parseFloat(displayValue);
        let resultValue = operate(firstNumber, operator, secondNumber);
        result.textContent = resultValue.toFixed(2);
        firstNumber = resultValue;
      }
      operator = value;
      displayValue = "";
    }
    if (value === "=") {
      secondNumber = parseFloat(displayValue);
      if (firstNumber !== null && operator !== null && secondNumber !== null) {
        let resultValue = operate(firstNumber, operator, secondNumber);
        result.textContent = resultValue.toFixed(2);
        displayValue = resultValue.toFixed(2).toString();
        firstNumber = null;
        operator = null;
        secondNumber = null;
      }
    }
  }

btns.forEach((btn) => {
  btn.addEventListener("click", () => handleButtonClick(btn.textContent));
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    const keyMap =  {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '.': '.',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        'Enter': '=', 
        '=': '=', 
        'Backspace': 'AC', 

    };

    if (keyMap[key]) {
        handleButtonClick(keyMap[key]);
    }
});

function resetCalculator() {
  firstNumber = null;
  operator = null;
  secondNumber = null;
  displayValue = "0";
  result.textContent = displayValue;
}

const add = function (a, b) {
  return a + b;
};

const minus = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

function operate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return minus(firstNumber, secondNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}
