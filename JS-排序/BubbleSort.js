Array.prototype.bubble_sort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

let num = [22, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70];
num.bubble_sort();

console.log(num);
