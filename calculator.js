let firstNumber = null; // Stores the first number in the operation
let secondNumber = null; // Stores the second number in the operation
let operator = null; // Stores the current operator (+, -, *, /)
let firstNumberInput = false; // Tracks whether the first number has been input
let secondNumberInput = false; //// Tracks whether the second number is being input
let calculated =false; // flag: number button pressed with a calculation, it resets the value.

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll('.number, .bottom-button');
const functionButtons = document.querySelectorAll('.function-button');
const operatorButtons = document.querySelectorAll('.operator');
const equals = document.querySelector("#equals");
display.disabled=true; 
display.value = 0;

//calculation functions
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
    switch(operator){
  
        case "+":
                display.value = add(numOne,numTwo);
                break;
        case "-":
                display.value = subtract(numOne,numTwo)
                break;
        case "/":
                display.value = divide(numOne,numTwo)
                break;
        case "*":
                display.value = multiply(numOne, numTwo);
                break;
    }
   
} 
     // number buttons pressed - event listener
    numberButtons.forEach(button => {
        button.addEventListener('click', () =>{

            // press number with a calulation, the value is reset.
            if(calculated || display.value == "0"){ 
                display.value = '';
            }

            if(display.value == '.' || display.value == '0.' || display.value == '0'){
                display.value = "0.";
            }
            

            if(firstNumberInput == true && secondNumberInput == false){
                display.value ="";
                secondNumberInput = true;
            }

            if(button.dataset.value == '.'){
                //decimal functionality
                if(display.value == '0.' || display.value == 0){
                    display.value = "0.";
                }else{
                    display.value += button.dataset.value;
                }
            }else{
                display.value += parseFloat(button.dataset.value);
            }
     
        })
        
    });


    // function buttons clicked - event listener
   functionButtons.forEach(button => {
    button.addEventListener('click', () =>{

        switch(button.dataset.value){
            case "AC": // reset all
                display.value ="";
                firstNumber = null;
                secondNumber =null
                operator = null;
                firstNumberInput = false;
                secondNumberInput = false;
                calculated = false;
                display.value = 0;
                break;
            case "+/-":
                let currentValue = parseFloat(display.value);
                if (!isNaN(currentValue)) {
                    display.value = currentValue * -1;
                }
                break;
            case "%":
                display.value = display.value/100;
                break;
        }//end switch
    })
   });

   // when operator buttons are clicked - event listner
   operatorButtons.forEach(button => {
   button.addEventListener('click', () =>{
    //first number is assigned once the operator is clicked
    if(!firstNumberInput){
        firstNumber = parseFloat(display.value);
        firstNumberInput =true;  
      }
      
      // sets operator 
      switch(button.dataset.value){
  
          case "+":
                  operator = "+";
                  break;
          case "-":
                  operator = "-";
                  break;
          case "/":
                  operator = "/";
                  break;
          case "*":
                  operator = "*";
                  break;
      }

      calculated =false;
      // display half of the calculations - awaiting second number
      display.value = display.value + operator;   
   })
   });

   // equals button pressed - event listener
   equals.addEventListener('click', () => {
    if(firstNumberInput){
       secondNumber =  parseFloat(display.value);
       secondNumberInput = true;
    }

    if(firstNumberInput == true && secondNumberInput == true){
         operate(operator, firstNumber, secondNumber);
         firstNumberInput =false;
         secondNumberInput=false;
         calculated = true; // if number pressed after sum - display is reset
    }
   });