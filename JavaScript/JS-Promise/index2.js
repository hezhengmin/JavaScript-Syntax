const p = new Promise((resolve, reject) => {
    console.log("start");
    setTimeout(() => {
        let data = 10;
        resolve(data); // 1 秒後執行
    }, 1000);
});

p.then((value) => {
    console.log(`value : ${value}`);
    return value + 10;
})
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("最後一定會執行~");
    });

/*
start
value : 10
20
最後一定會執行~
*/
