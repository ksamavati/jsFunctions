let var1 = 3;
let var2 = 2;

function sum(arg1, arg2) {
    return arg1 + arg2;
}

function difference(arg1, arg2) {
    return arg1 - arg2;
}

function multiply(arg1, arg2) {
    return arg1 * arg2;
}

function divide(arg1, arg2) {
    return arg1 / arg2;
}

const sumArrow = (arg1, arg2) => {
    return arg1 + arg2;
}

const differenceArrow = (arg1, arg2) => {
    return arg1 - arg2;
}

const multiplyArrow = (arg1, arg2) => {
    return arg1 * arg2;
}

const divideArrow = (arg1, arg2) => {
    return arg1 / arg2;
}

console.log(sum(var1, var2));
console.log(difference(var1, var2));
console.log(multiply(var1, var2));
console.log(divide(var1, var2));

console.log(sumArrow(var1, var2));
console.log(differenceArrow(var1, var2));
console.log(multiplyArrow(var1, var2));
console.log(divideArrow(var1, var2));