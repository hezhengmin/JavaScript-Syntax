console.log(num); // undefined
num = 6;
num += 7;
var num;

var x = 1; // 初始化 x
console.log(x + " " + y); // 1 undefined
var y = 2;

var a = 1; // 初始化 x
var b;
console.log(a + " " + b); // 1 undefined
b = 2;

console.log(`sum = ${sum(5, 10)}`); // result = 15

function sum(x, y) {
    return x + y;
}
/*
提升(Hoisting)
在宣告函式程式碼時，便可在之前使用方法或變數
*/
