let money = 10000;
function buyACar(car : string) : any  {
    return new Promise((resolve, reject) => {
            if(money >= 10000) {
                resolve("can buy " + car);
            }else {
                reject("not enough money");
            }
        });

}

money = 100001;
buyACar("Vinfast").then((success: any) => {
    console.log(success);
}, (error: any) => {
    console.log(error);
})

//Bài thực hành
/*
let money = 10000;
const buyACar = (car: any) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 100);
    }))
}

money = 1000001;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})
*/