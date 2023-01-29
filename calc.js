// THE CALCULATOR APP


// VARIABLES
const numberBtns = document.querySelectorAll('.numbr');
const operatorBtns = document.querySelectorAll('.operator');
const backspaceBtn = document.querySelector('.backspace');
const allClearBtn = document.querySelector('.clear');
const operationDisplay = document.querySelector('.oprtn-disp');
const resultDisplay = document.querySelector('.rslt-disp');
const equalsBtn = document.querySelector('.equals');

let firstOperand = '';
let secondOperand = '';



// EVENT LISTENERS

//adds an event listener to all number buttons and executes some functions when the number is clicked
numberBtns.forEach(btn => {
    btn.addEventListener('pointerdown', () => {
        getBtnValue(btn);
        appendClickedBtnVal(btn);

    });
});


//adds an event listener to all operator buttons and executes some functions when the operator is clicked
operatorBtns.forEach(btn => {
    btn.addEventListener('pointerdown', () => {
        getBtnValue(btn);
        appendOperator(btn); 
    });
});


// clears the last value added to the display
backspaceBtn.addEventListener('pointerdown', () => {
    resultDisplay.textContent = '';
    let str = operationDisplay.textContent
    return operationDisplay.textContent = str.slice(0, str.length - 1);
});


// clears all numbers or operators in the display
allClearBtn.addEventListener('pointerdown', () => {
    operationDisplay.textContent = '';
    resultDisplay.textContent = '';
});

// computes the values
equalsBtn.addEventListener('pointerdown', () => {
    operationDisplay.textContent = '';
    resultDisplay.textContent = '';
});




// FUNCTIONS

//gets the value of the button and stores it
function getBtnValue(button) {
    return button.value;
};


// appends the value of the clicked number button to the operation display
function appendClickedBtnVal(button) {
    let btnValue = button.value;
    operationDisplay.append(btnValue);
};



// appends the value of the clicked operator button to the operation display
function appendOperator(button) {
    let btnValue = button.value;
    if (operationDisplay.textContent.slice(-1) == btnValue ) return;
    operationDisplay.append(btnValue);
};



function computeValues(btn, first, second) {
    switch(btn, first, second){
        case 1:
            if(btn.value === '+') return first + second;
            break;

    }
};




