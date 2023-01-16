// CALCULATOR APP

const operation = document.querySelector('.oprtn-disp');
const results = document.querySelector('.rslt-disp');
const clearBtn = document.querySelector('.clrBtn')
const deleteBtn = document.querySelector('.backspace')
const addBtn = document.querySelector('.add');
const numsBtn = document.querySelectorAll('.numbr');
let values = [];


// 1. EVENT LISTENERS

clearBtn.addEventListener('pointerdown', () => clear());

deleteBtn.addEventListener('pointerdown', () => backspace());

addBtn.addEventListener('pointerdown', () => add());

numsBtn.forEach(btn => {
    btn.addEventListener('pointerdown', () => {
        dispNums(btn.value); 
        values.push(parseInt(btn.value, 10));
    });
});


// 2. FUNCTIONS

function clear(){
    operation.textContent = '';
    results.textContent = '';
    values = [];
}


function dispNums(val){
    operation.append(val);
}


function backspace(){
    results.textContent = '';
    let str = operation.textContent
     return operation.textContent = str.slice(0, str.length - 1);
}


function add() {
    if (operation.textContent.slice(-1) == '+') return alert('+ is already present');
    if (operation.textContent == '') return alert('Input a number first!');
    dispNums(addBtn.value);
    let addition = values.reduce((acc, curr) => acc + curr);
    return results.textContent = addition;
};



function subtract(a, ...nums) {
    let subtraction = a;
    for (let num of nums){
        subtraction -= num;
    }
    return subtraction;
};



function multiply(...nums){
    let multiple = 1;
    for (let num of nums){
        multiple *= num;
    }
    return multiple;
};



function divide(a, ...nums){
    let dividend = a;
    for (let num of nums){
        dividend /= num
    }
    return dividend;
};