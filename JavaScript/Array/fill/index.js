let arr = [1, 2, 3, 4, 5];

/*******
 * @description: (填入值,開始索引,結束索引)
 * @return {*}
 */
arr.fill(-1, 2, 4);

console.log(arr); //[1, 2, -1, -1, 5]
