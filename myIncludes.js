Array.prototype.myIncludes = function(value) {
    for(let i = 0; i < this.length; i++) {
        if(this[i] == value) {
            return true;
        }
    }
    return false;
}

const array1 = [1, 2, 3];

console.log(array1.includes(2)); //prints true
console.log(array1.myIncludes(2)); //prints true

const newArr = [1, 3, 5, 7];

console.log(newArr.includes(2)); //prints false
console.log(newArr.myIncludes(2)); //prints false