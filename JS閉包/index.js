// JS 閉包（Closure）
var x = 101;

function outer() {
    var x = 100;
    function inner() {
        console.log(x);
    }
    return inner;
}

var inner = outer();
inner(); //100