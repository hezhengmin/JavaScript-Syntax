var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "foo");
});
const p2 = Promise.resolve("second");

Promise.all([p1, p2])
    .then((res) => {
        console.log(res);
        // ['foo', 'second']
    })
    .catch((err) => {
        console.log(err);
    });
