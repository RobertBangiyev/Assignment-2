Array.prototype.myLastIndexOf = function (targetElement, fromIndex = this.length - 1) {
    let output = -1;
    let searchIndex = fromIndex;
    if(searchIndex < 0) {
        searchIndex = this.length + searchIndex;
    }
    if(searchIndex < 0) {
        return output;
    }
    for (let i = searchIndex; i >= 0; i--)  {
        if (this[i] == targetElement) {
            return i;
        }
    }
    return output;
};


//Test
const numbers = [2, 5, 9, 2];

console.log(numbers.lastIndexOf(2, 3));
console.log(numbers.myLastIndexOf(2, 3));

console.log(numbers.lastIndexOf(2, 2));
console.log(numbers.myLastIndexOf(2, 2));

console.log(numbers.lastIndexOf(2, -2));
console.log(numbers.myLastIndexOf(2, -2));

console.log(numbers.lastIndexOf(2, -1));
console.log(numbers.myLastIndexOf(2, -1));