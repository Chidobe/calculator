// THE CALCULATOR APP


// VARIABLES
const numberBtns = document.querySelectorAll('.numbr');
const operatorBtns = document.querySelectorAll('.operator');
const backspaceBtn = document.querySelector('.backspace');
const allClearBtn = document.querySelector('.clear');
const operationDisplay = document.querySelector('.oprtn-disp');
const resultDisplay = document.querySelector('.rslt-disp');

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
    if (operationDisplay.textContent.slice(-1) == btnValue) return;
    operationDisplay.append(btnValue);
};



































// const operationDisplay = document.querySelector('.oprtn-disp');
// const resultDisplay = document.querySelector('.rslt-disp');
// const clearBtn = document.querySelector('.clrBtn')
// const deleteBtn = document.querySelector('.backspace')
// const addBtn = document.querySelector('.add');
// const numsBtn = document.querySelectorAll('.numbr');
// let values = [];


// // 1. EVENT LISTENERS

// clearBtn.addEventListener('pointerdown', () => clear());

// deleteBtn.addEventListener('pointerdown', () => backspace());

// addBtn.addEventListener('pointerdown', () => add());

// numsBtn.forEach(btn => {
//     btn.addEventListener('pointerdown', () => {
//         dispNums(btn.value); 
//         values.push(parseInt(operation.textContent, 10));
//     });
// });


// // 2. FUNCTIONS

// function add() {
//     if (operation.textContent.slice(-1) == '+') return alert('+ is already present');
//     if (operation.textContent == '') return alert('Input a number first!');
//     dispNums(addBtn.value);
//     let addition = values.reduce((acc, curr) => acc + curr);
//     return results.textContent = addition;
// };



// function subtract(a, ...nums) {
//     let subtraction = a;
//     for (let num of nums){
//         subtraction -= num;
//     }
//     return subtraction;
// };



// function multiply(...nums){
//     let multiple = 1;
//     for (let num of nums){
//         multiple *= num;
//     }
//     return multiple;
// };



// function divide(a, ...nums){
//     let dividend = a;
//     for (let num of nums){
//         dividend /= num
//     }
//     return dividend;
// };





// function clear(){
//     operation.textContent = '';
//     results.textContent = '';
//     values = [];
// };


// function dispNums(val){
//     operation.append(val);
// };


// function backspace(){
//     results.textContent = '';
//     let str = operation.textContent
//      return operation.textContent = str.slice(0, str.length - 1);
// };
