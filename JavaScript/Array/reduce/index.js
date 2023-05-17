// 偶數累加起來，使用JS的reduce函數
const numbers = [1, 2, 3, 4, 5];

let result = numbers.reduce((pre, curr) => {
    if (curr % 2 === 0) {
        return pre + curr;
    } else {
        return pre;
    }
}, 0);

console.log(`結果：${result}`); //結果：6

//找到最大值 ，使用reduce
const arr = [12, 5, 27, 8, 16];
let maxNumber = arr.reduce((pre, curr) => {
    return Math.max(pre, curr);
});

console.log(`結果：${maxNumber}`); //結果：27

//reduce函式，舉一個複雜的例子，要有物件陣列
const products = [
    { id: 1, name: "Apple", price: 1.5, quantity: 2 },
    { id: 2, name: "Banana", price: 0.5, quantity: 4 },
    { id: 3, name: "Orange", price: 0.8, quantity: 3 },
    { id: 4, name: "Mango", price: 2, quantity: 1 },
];

let total = products.reduce((pre, curr) => {
    return pre + curr.price * curr.quantity;
}, 0);

console.log(`結果：${total}`); //結果：9.4
