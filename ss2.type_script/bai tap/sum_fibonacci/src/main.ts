//Cách tính tổng số Fibo trong khoảng cho trước;
function sumFibonaccies(start: number,end: number) {
    let n1 = 0;
    let n2 = 1;
    let nNext;
    let sum = 0;
    let array = [];
    for(let i = 0;i>=0;i++) {
        nNext = n1 + n2;
        n1 = n2;
        n2 = nNext;

        if (nNext>end) break;
        if(nNext >= start) {
            array.push(nNext);
            sum += nNext;
        }
    }
    console.log(`Dãy fibonacci trong khoảng ${start} và ${end} là [${array}]`);
    console.log(`Tổng: ${sum}`);
}
sumFibonaccies(12,56);

/*SỬA BÀI*/
function fibonacci(number : number) :number {
    if(number==1 || number==2) return 1;
    return fibonacci(number-1) + fibonacci(number-2);
}

let n = 10;
let summation = 0;
for(let i =1; i<=n;i++) {
    console.log(fibonacci(i));
    summation += fibonacci(i);
}
console.log(summation);
