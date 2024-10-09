let firstNumber = null;
let operator = null;
let secondNumber = null;


let btns = document.querySelectorAll('button');
let result = document.querySelector('.result');

result.textContent = '25';

console.log(btns.length);

const add = function(a, b){
    return a + b;
}

const minus = function (a, b) {
    return a - b;
}

const multiply = function (a, b){
    return a * b;
}

const divide = function (a, b){
    return a / b;
}

function operate (firstNumber, operator, secondNumber){
    if (operator == "+"){
        return add(firstNumber, secondNumber);
    } else if (operator == '-'){
        return minus(firstNumber, secondNumber);
    } else if (operator == '*'){
        return multiply(firstNumber, secondNumber);
    } else if (operator == '/'){
        return divide(firstNumber, secondNumber);
    }
}

