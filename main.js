'use strict';

let addition = (a, b) => {
    let total = a + b;
    console.log(`${a} + ${b} = ${total}`);
};

let subtracion = (a, b) => {
    let total = a - b;
    console.log(`${a} - ${b} = ${total}`);
};

let multiply = (a, b) => {
    let numberOfBuckets;
    numberOfBuckets = a;

    let sizeOfBuckets;
    sizeOfBuckets = b;

    let total;
    total = numberOfBuckets * sizeOfBuckets;

    console.log(`${numberOfBuckets} * ${sizeOfBuckets} = ${total}`)
    return total;
};

let n = multiply(2, 4);
for (let i = 0; i < 8; i++) {
    console.log(`${i}: Hello, Evelyn!`);
}

alert("Welcome!");