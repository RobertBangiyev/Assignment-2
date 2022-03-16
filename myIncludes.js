Array.prototype.myIncludes = function(value, startIndex = 0) {
    let starting = startIndex;
    if(startIndex < 0) {
        starting = startIndex + this.length;
    }
    for(let i = starting; i < this.length; i++) {
        if(this[i] === value) {
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

const myArray = [1,2,,4,5];

console.log(myArray.includes(4, 100)); //false
console.log(myArray.myIncludes(4, 100)); //false