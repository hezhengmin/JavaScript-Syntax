// js event loop

console.log("first");
setTimeout(()=>{console.log("second"),0});
console.log("third");

Promise.resolve().then(()=>{
    console.log("promise 1");
}).then(()=>{
    console.log("promise 2");
})

// first
// third
// promise 1
// promise 2
// second

