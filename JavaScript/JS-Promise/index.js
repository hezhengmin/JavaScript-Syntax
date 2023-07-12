/*
 * @Author: hezhengmin zhengmin099@gmail.com
 * @Date: 2023-04-19 22:27:41
 * @LastEditors: hezhengmin zhengmin099@gmail.com
 * @LastEditTime: 2023-07-12 22:52:19
 * @FilePath: \JavaScript-Syntax\JavaScript\JS-Promise\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const divisionTwo = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("divisionTwo function delayed for 3 second.");
            if (num % 2 === 0) resolve("division two Success");
            else reject("division two Failure");
        }, 3000);
    });
};

const bigTen = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bigTen function delayed for 2 second.");
            if (num > 10) resolve("big Ten");
            else reject("small equal Ten");
        }, 2000);
    });
};

// divisionTwo(10)
//     .then((value) => {
//         console.log(value);
//         return bigTen(10);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("最後一定會執行~");
//     });

/*
divisionTwo function delayed for 3 second.
division two Success
bigTen function delayed for 2 second.
small equal Ten
最後一定會執行~
*/

divisionTwo(5) // 5不能除以2，跳catch，不會再執行下一個then
    .then((value) => {
        console.log(`第一個 then: ${value}`);
        return bigTen(10);
    })
    .then((result) => {
        console.log(`第二個 then: ${result}`);
    })
    .catch((error) => {
        console.log(`catch: ${error}`);
    })
    .finally(() => {
        console.log("最後一定會執行~");
    });
/*
divisionTwo function delayed for 3 second.
division two Failure
最後一定會執行~
*/
