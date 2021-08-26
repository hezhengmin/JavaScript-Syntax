// JS 作用域(Scope)
let x =1;
{
    let x= 2;
    console.log(`內層 let x 變數的值: ${x}`);
}
console.log(`外層 let x 變數的值: ${x}`);

var y =1;
{
    var y= 2;
    console.log(`內層 var y 變數的值: ${y}`);
}
console.log(`外層 var y 變數的值: ${y}`);

const pi = 3.1415926;
// pi = 3.14; //Uncaught TypeError: Assignment to constant variable