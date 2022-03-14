Array.prototype.myReduce = function(callback, startValue) {
    let output = startValue;
    for(let i = 0; i < this.length; i++) {
        output = callback(output, this[i]);
    }
    return output;
}

const arr = [1, 2, 3, 4];

const startVal = 0;
const sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    startVal
);

console.log(sum); //prints 10

const mySum = arr.myReduce(
    (previousValue, currentValue) => previousValue + currentValue,
    startVal
);

console.log(mySum); //prints 10