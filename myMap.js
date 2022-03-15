Array.prototype.myMap = function(callback) {
    let output = [];
    for(let i = 0; i < this.length;i++) {
      if(this[i] === undefined) {
        continue;
      }
      output.push(callback(this[i], i, this));
    }
    return output;
}

const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
const map2 = array1.myMap(x => x * 2)

console.log(map1); //prints [2, 8, 18, 32]
console.log(map2); //prints [2, 8, 18, 32]

const anotherArray = [1, 3, 5, 7];

const anotherMap1 = anotherArray.map(x => x + 1);
const anotherMap2 = anotherArray.myMap(x => x + 1);

console.log(anotherMap1); //prints [2, 4, 6, 8]
console.log(anotherMap2); //prints [2, 4, 6, 8]

let myArray = [1,2,,4,5];

console.log("Two params");
console.log("map:");
myArray.map((x, i) => console.log(x, i));
console.log("myMap:");
myArray.myMap((x, i) => console.log(x, i));

console.log("Three params");
console.log("map:");
myArray.map((x, i) => console.log(x, i, this));
console.log("myMap:");
myArray.myMap((x, i) => console.log(x, i, this));