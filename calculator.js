let firstNumber;
let secondNumber;
let operator;
const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');
const functionButtons = document.querySelectorAll('.function-button');

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

        switch(button.dataset.value){
            case "AC": 
                display.value ="";
                break;
            case "+/-":
                let calculation = display.value;
                if (calculation.startsWith("-")) {
                    // If the current value starts with a '-', remove it
                    display.value = calculation.substring(1);
                } else {
                    // Otherwise, add a '-' at the beginning
                    display.value = "-" + calculation;
                }
                break;
                default:
                    display.value += button.dataset.value;
            
        }//end switch
    })
   })