// VALUES 

Object.myValues = function(someObj) {
    let objArray = [];
    for(let key in someObj) {
        objArray.push(someObj[key])
    }
    
    return(objArray);
};

// Test Code 
let myObj = {a: "1", b: "2", c: "3"};
console.log(Object.myValues(myObj));
console.log(Object.values(myObj));
