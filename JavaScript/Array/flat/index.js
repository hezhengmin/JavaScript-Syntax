let arr = [1, 2, 3, [4, 5]];

const arrflat = arr.flat();

console.log(arrflat); // [1, 2, 3, 4, 5]

let arr2 = [1, 2, 3, [4, 5, [6, 7, 8]]];

// array.flat([depth]) depth預設1，下方例子要設2，才能完全扁平化数组
console.log(arr2.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8]
