var sum = 0;
var count = 0;
function isPrime(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}
for (var i = 2; i > 0; i++) {
    if (isPrime(i)) {
        count++;
        sum += i;
    }
    if (count == 30)
        break;
}
console.log(sum);
