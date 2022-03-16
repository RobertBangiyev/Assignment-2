Array.prototype.myReduce = function(callback, startValue = this[0]) {
    let output = startValue;
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined) {
            continue;
        }
        output = callback(output, this[i], i, this);
    }
    return output;
}

const arr = [1, 2, 3, 4];
let myArray = [1,2,,4,5];

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

const newSum = myArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    startVal
);

console.log(newSum); //prints 12

const newerSum = myArray.myReduce(
    (previousValue, currentValue) => previousValue + currentValue,
    startVal
);

console.log(newerSum); //prints 12

