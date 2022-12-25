function sumFibonaccies(start, end) {
    let n1 = 0;
    let n2 = 1;
    let nNext;
    let sum = 0;
    let array = [];
    for (let i = 0; i >= 0; i++) {
        nNext = n1 + n2;
        n1 = n2;
        n2 = nNext;
        if (nNext > end)
            break;
        if (nNext >= start) {
            array.push(nNext);
            sum += nNext;
        }
    }
    console.log(`Dãy fibonacci trong khoảng ${start} và ${end} là [${array}]`);
    console.log(`Tổng: ${sum}`);
}
sumFibonaccies(12, 56);
function isPerfectSquare(n) {
    let squareRoot = Math.sqrt(n);
    if ((Math.ceil(squareRoot) * Math.ceil(squareRoot) == n) || (Math.floor(squareRoot) * Math.floor(squareRoot) == n)) {
        return true;
    }
    else {
        return false;
    }
}
function isFibonacci(number) {
    return isPerfectSquare(5 * number * number - 4) || isPerfectSquare(5 * number * number + 4);
}
let array = [];
let noOfFibonacci = 10;
let sum = 0;
for (let i = 0; array.length < noOfFibonacci; i++) {
    if (i == 0 || i == 1) {
        array.push(1);
        sum += 1;
    }
    else {
        if (isFibonacci(i)) {
            array.push(i);
            sum += i;
        }
    }
}
console.log('Dãy ' + noOfFibonacci + ' số Fibonacci đầu tiên là: ' + array);
console.log('Tổng: ' + sum);
function fibonacci(number) {
    if (number == 1 || number == 2)
        return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
let n = 10;
let summation = 0;
for (let i = 1; i <= n; i++) {
    console.log(fibonacci(i));
    summation += fibonacci(i);
}
console.log(summation);
//# sourceMappingURL=main.js.map