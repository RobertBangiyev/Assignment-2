// KEYS 
Object.myKeys = function(someObj) {
    for(let key in someObj) {
        console.log(key)
    }
};

// Test Code
let myObj = {a: "1", b: "2", c: "3"};
Object.myKeys(myObj);