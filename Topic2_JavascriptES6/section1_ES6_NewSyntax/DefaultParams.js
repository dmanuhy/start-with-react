const sumNumbers = (a, b) => {
    return a + b;
}

console.log(sumNumbers("Hello ", 2));

//default parameters
const totalNumbers = (a = 10, b = 5) => {
    return a + b;
}

console.log(totalNumbers());
console.log(totalNumbers(20));
console.log(totalNumbers(undefined, 20));
