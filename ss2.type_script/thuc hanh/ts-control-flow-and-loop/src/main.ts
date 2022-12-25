let sum : number = 0;
let count : number = 0;
function isPrime(number : number) {
    for(let i = 2;i<=Math.sqrt(number);i++) {
        if(number%i == 0) return false
    }
    return true;
}

for(let i = 2;i>0;i++) {
    if(isPrime(i)) {
        count++; sum += i;
    }
    if(count == 30) break;
}

console.log(sum);

// //Cách 2:
// for (let i = 2; count < 30; i++) {
//     let isPrime = true;
//     if (i == 2) {
//         sum += i;
//         count++;
//         continue;
//     }
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if(!isPrime){
//         continue;
//     }
//     sum += i;
//     count++;
// }
// console.log(sum);