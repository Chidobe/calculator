const operation = document.querySelector('.operation-text');
const results = document.querySelector('.result-text');
const allNumbers = document.querySelectorAll('.number');
const addBtn = document.querySelector('.add');


addBtn.addEventListener('click', () => {
    results.textContent = add(Number(operation.textContent));
})





// function add(...nums) {
//     let addition = 1;
//     for (let num of nums){
//         addition += num;
//     }
//     return addition;
    
// };

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