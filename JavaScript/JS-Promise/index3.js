const wait = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sec == 4) reject(sec);
            resolve(sec);
        }, sec * 1000);
    });
};

wait(1)
    .then((value) => {
        console.log(`value : ${value}`);
        return wait(2);
    })
    .then((value) => {
        console.log(`value : ${value}`);
        return wait(3);
    })
    .then((value) => {
        console.log(`value : ${value}`);
        return wait(4);
    })
    .catch((error) => {
        console.log(`error : ${error}`);
    })
    .finally(() => {
        console.log("最後一定會執行~");
    });

/*
value : 1
value : 2
value : 3
error : 4
最後一定會執行~
*/
