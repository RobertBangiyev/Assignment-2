// KEYS 
Object.myKeys = function(someObj) {
    let objArray = [];
    for(let key in someObj) {
        objArray.push(key);
    }
    return(objArray);
};

// Test Code
let myObj = {a: "1", b: "2", c: "3"};
console.log(Object.myKeys(myObj));
console.log(Object.keys(myObj));