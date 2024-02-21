const arr = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
];
//使用reduce合併陣列
let result = arr.reduce((pre, cur) => {
    return pre.concat(cur);
}, []); //[] 初始值

console.log(`結果：${result}`); //['a', 'b', 'c', 'd', 'e', 'f']
console.log(`結果：${[].concat(...arr)}`); // ['a', 'b', 'c', 'd', 'e', 'f']
