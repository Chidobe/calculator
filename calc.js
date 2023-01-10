

function add(...nums) {
    let addition = 0;
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