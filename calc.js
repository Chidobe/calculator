

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

function multiply(...nums){
    let multiple = 1;
    for (let num of nums){
        multiple *= num;
    }
    return multiple;
}