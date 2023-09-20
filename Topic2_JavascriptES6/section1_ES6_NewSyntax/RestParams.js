const demoFunction = (a, b, ...args) => {
    console.log(a, b, args);
}

//demoFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const sumNumbers = (...args) => {
    let sum = 0;
    for (let i in args) {
        if (typeof args[i] === 'number') {
            sum += args[i];
        }
    }
    console.log(sum);
}
sumNumbers(5, 'Hello', 5, 3.5, true);