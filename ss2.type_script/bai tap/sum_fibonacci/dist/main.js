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
}
sumFibonaccies(12, 56);
//# sourceMappingURL=main.js.map