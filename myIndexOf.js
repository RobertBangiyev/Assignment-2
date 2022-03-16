Array.prototype.myIndexOf = function (targetElement, fromIndex = 0) {
    let searchIndex = fromIndex;
    if(searchIndex < 0) {
        searchIndex = this.length + searchIndex;
    }
    let output = -1;
    for (let i = searchIndex; i < this.length; i++)  {
        if (this[i] === targetElement) {
            return i;
        }
    }
    return output;
};

//Test
const array = [2, 9, 9];

console.log(array.indexOf(9, 2));
console.log(array.myIndexOf(9, 2));

console.log(array.indexOf(2, -1));
console.log(array.myIndexOf(2, -1));

console.log(array.indexOf(2, -3));
console.log(array.myIndexOf(2, -3));

