// // CALCULATOR APP
// Variables
const numberBtns = document.querySelectorAll('.numbr');
const operatorBtns = document.querySelectorAll('.operator');
const backspaceBtn = document.querySelector('.backspace');
const allClearBtn = document.querySelector('.clear');
const operation = document.querySelector('.oprtn-disp');
const results = document.querySelector('.rslt-disp');

let firstNumberClicked = '';
let secondNumberClicked = '';



// Event listeners for buttons
numberBtns.forEach(btn => {
    btn.addEventListener('pointerdown', () => {
        getBtnValue(btn);
        displayClickedBtn(btn);

    });
});


operatorBtns.forEach(btn => {
    btn.addEventListener('pointerdown', () => {
        getBtnValue(btn);

    });
});


backspaceBtn.addEventListener('pointerdown', () => {
    results.textContent = '';
    let str = operation.textContent
    return operation.textContent = str.slice(0, str.length - 1);
});


allClearBtn.addEventListener('pointerdown', () => {
    operation.textContent = '';
    results.textContent = '';
});


// Functions
function getBtnValue(button) {
    return button.value;
};


function displayClickedBtn(button) {
    let btnValue = button.value;
    //if (operation.textContent.length > 15) return;
    operation.append(btnValue);
};





































// const operation = document.querySelector('.oprtn-disp');
// const results = document.querySelector('.rslt-disp');
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
