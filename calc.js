// CALCULATOR APP

const operation = document.querySelector('.oprtn-disp');
const results = document.querySelector('.rslt-disp');
const clearBtn = document.querySelector('.clrBtn')
const addBtn = document.querySelector('.add');
const numsBtn = document.querySelectorAll('.numbr');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');


let values = [];


// 1. EVENT LISTENERS

clearBtn.addEventListener('pointerdown', () => clear());

addBtn.addEventListener('pointerdown', () => add());

// numsBtn.forEach((btn) => {
//     addEventListener('click', (event) => {
//         let btnValue = event.target.value;
//         dispNums(btnValue);
//         console.log(btnValue)
//     })
// });

sevenBtn.addEventListener('pointerdown', () => {
    dispNums(sevenBtn.value); 
    values.push(parseInt(sevenBtn.value, 10));
});

eightBtn.addEventListener('pointerdown', () => {
    dispNums(eightBtn.value); 
    values.push(parseInt(eightBtn.value, 10));
});


// 2. FUNCTIONS

function clear(){
    operation.textContent = '';
    results.textContent = '';
}


function dispNums(val){
    operation.append(val);
}



function add() {
    if (operation.textContent == '') return alert('Input a number first!');
    dispNums(addBtn.value)
    if (values[0] == null ) return;
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