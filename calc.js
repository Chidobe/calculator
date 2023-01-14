// CALCULATOR APP

const operation = document.querySelector('.oprtn-disp');
const results = document.querySelector('.rslt-disp');
const clearBtn = document.querySelector('.clrBtn')
const addBtn = document.querySelector('.add');












function add(...nums) {
    let addition = 1;
    for (let num of nums){
        addition += num;
    }
    return addition;
    
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