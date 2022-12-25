let money = 10000;
function buyACar(car) {
    return new Promise((resolve, reject) => {
        if (money >= 10000) {
            resolve("can buy " + car);
        }
        else {
            reject("not enough money");
        }
    });
}
money = 100001;
buyACar("Vinfast").then((success) => {
    console.log(success);
}, (error) => {
    console.log(error);
});
//# sourceMappingURL=main.js.map