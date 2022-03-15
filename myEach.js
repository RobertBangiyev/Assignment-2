Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

//TESTING
let myArray = [1,2,,4,5];

console.log("One parameter for callback");
console.log("Actual forEach:");
myArray.forEach((x) => console.log(x));
console.log("myEach:");
myArray.myEach((x) => console.log(x));

console.log("Two params");
console.log("forEach:");
myArray.forEach((x, i) => console.log(x, i));
console.log("myEach:");
myArray.myEach((x, i) => console.log(x, i));

console.log("Three params");
console.log("forEach:");
myArray.forEach((x, i, myArray) => console.log(x, i, myArray));
console.log("myEach:");
myArray.myEach((x, i, myArray) => console.log(x, i, myArray));
