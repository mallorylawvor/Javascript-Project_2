// creats an object to keep track of value
const Calculator = {
    //this will display 0 on the cal screen
    Display_Vaule: '0',
    //this will hold hte first operand for any expressions we set it to null for now
    First_Operand: null,
    //this chekcs wheather or not the second operand has been inputted bu the user
    Wait_Second_Operand: false,
    // this will hold hte operator we set it to null for now.
    operator: null,
};

//this modifies vaules each time a button is clicked on
function Input_Digit(digit) {
    const { Display_Vaule, Wait_Second_Operand } = Calculator;
    //this checks if the Wait_second_operand is true and set Display_value
    //to the key that was clicked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Vaule = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites Display_Value if the vurrent vaule is -
        //otherwise it adds to it
        Calculator.Display_Vaule = Display_Vaule === '0' ? digit : Display_Vaule + digit;
    }
}

//this sectin handle decimal points
function Input_Digit(dot) {
    // this ensures that accidental clicking of the decimal point doesnt
    //cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Vaule.includes(dot)) {
        //we are saying that if the Display_vaule does not contain a decimal point
        //we want to add a decimal point
        Calculator.Display_Vaule += dot;
    }
}

// this section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Vaule, operator } = Calculator;
    //when an operator key is pressed we convert the current number 
    // displayed on th e screen to a number and then stor the result in
    // Calculator.First.Operand if it doest already exist.
    const Value_of_Input = parseFloat(Display_Vaule);
    //checks if an operator already existis and if Wair_second_operand is tru 
    //then updates the operator to an exit for the funciton
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //if operator exists, property look up is performed for the operator
        // in the Perform_Calculation Onject the function that matches the 
        //operator is excuted. 
        let result = Perform_Caluculation[operator](Value_Now, Value_of_Input);
        // here we add a fixed amound of numbers after the decimal
        result = Number(result).toFixed(9);
        // this will remove any trailing 0's
        result = (result * 1).toString();
        Calculator.Display_Vaule = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};
function Calculator_Rest() {
    Calculator.Display_Vaule = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//this function update the calcutlator screen with the contecnt of Disppay_Value
function Update_Display() {
    // makes use of the calculatio-screen class to target the 
    //input tag in the HTML doc
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Vaule;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element 
    // that was clicked 
    const { target } = event;
    //if the element that was clicked on is not a button exits the funciton 
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return
    }
    // ensures that AC clears all inputs from the Calcutor screen
    if (target.classList.contains('all-clear')) {
        Calculator_Rest();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})