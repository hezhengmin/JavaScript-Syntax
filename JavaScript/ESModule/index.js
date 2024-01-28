import showIsNum from "./utils.js";
import { productPrice } from "./discount.js";
import * as userInfo from "./user.js";
//1.預設匯入
let num = 200;
let result = !showIsNum(num);
console.log(`判斷${num}是否為數字:${result ? "是" : "否"}`);
//2.具名匯入
let price = 100,
    discount = 0.8;
console.log(`商品價格為:${price},折扣為:${discount * 10}折，打完折後價格為:${productPrice(price, discount)}`);
//3.匯入該模組中的所有內容
console.log(`姓名:${userInfo.name},年齡:${userInfo.age},興趣:${userInfo.fnInterest(["玩遊戲", "睡覺"])}`);

// PS D:\Github\JavaScript-Syntax\JavaScript\ESModule> node index.js
// 判斷200是否為數字:否
// 商品價格為:100,折扣為:8折，打完折後價格為:80
// 姓名:ming,年齡:20,興趣:玩遊戲,睡覺
