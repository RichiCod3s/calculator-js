let firstNumber;
let secondNumber;
let operator;
const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');

function appendToDisplay(input){
    display.value += input;
}

function add(numOne,numTwo){
    return numOne+numTwo;
}

function subtract(numOne,numTwo){
    return numOne - numTwo;
}

function multiply(numOne,numTwo){
    return numOne*numTwo;
} 

function divide(numOne,numTwo){

    if(numTwo == 0){
        return numOne;
    }
    return numOne/numTwo;
}

function operate(operator, numOne, numTwo){

} 

// buttons to display
buttons.forEach(button => {
    button.addEventListener('click', () =>{

        if(button.dataset.value == "AC"){
            display.value ="";
        }else{
            display.value += button.dataset.value;
        }
    })
   })