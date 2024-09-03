let firstNumber = null;
let secondNumber = null;
let operator = null;
let firstNumberInput = false;

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll('.number, .bottom-button');
const functionButtons = document.querySelectorAll('.function-button');


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
     
    numberButtons.forEach(button => {
        button.addEventListener('click', () =>{
            // need to add . functionality
            if(button.dataset.value == '.'){
                display.value += button.dataset.value;
            }else{
                display.value += parseFloat(button.dataset.value);
            }
     
        })
    });

// buttons to display
// one number to the display, do not display non numbers apart from . 
   functionButtons.forEach(button => {
    button.addEventListener('click', () =>{

        switch(button.dataset.value){
            case "AC": 
                display.value ="";
                firstNumber = null;
                secondNumber =null
                operator = null;
                waitingForSecondNumber = false;
                break;
            case "+/-":
                let currentValue = parseFloat(display.value);
                if (!isNaN(currentValue)) {
                    display.value = currentValue * -1;
                }
                break;
            case "%":
                // make this a number and perfom percentage
                display.value = display.value/100;
                break;
        }//end switch
    })
   });