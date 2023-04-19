const divisionTwo = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("divisionTwo function delayed for 3 second.");
            if (num % 2 === 0) resolve("division two Success");
            else reject("division two Failure");
        }, 3000);
    });
};

const bigTen = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bigTen function delayed for 2 second.");
            if (num > 10) resolve("big Ten");
            else reject("small equal Ten");
        }, 2000);
    });
};

// divisionTwo(10)
//     .then((value) => {
//         console.log(value);
//         return bigTen(10);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("最後一定會執行~");
//     });

/*
divisionTwo function delayed for 3 second.
division two Success
bigTen function delayed for 2 second.
small equal Ten
最後一定會執行~
*/

// divisionTwo(5) // 5不能除以2，跳catch，不會再執行下一個then
//     .then((value) => {
//         console.log(value);
//         return bigTen(10);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("最後一定會執行~");
//     });
/*
divisionTwo function delayed for 3 second.
division two Failure
最後一定會執行~
*/
