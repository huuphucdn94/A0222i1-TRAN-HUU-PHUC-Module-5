function isPrime(number : number): boolean {
if(number < 2) return false;
else {
    for(let i = 2;i<=Math.sqrt(number);i++) {
        if(number % i == 0) return false;
    }
    return true;
}
}

let array = [1,5,9,2,6,15,19,35,51,53];
let sum = 0;

for(let i = 0; i<array.length;i++) {
    if(isPrime(array[i])) sum+= array[i];
}

console.log(sum);