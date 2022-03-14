Array.prototype.myLastIndexOf = (array, targetElement) => {
    let output = -1;
    for (index = 0; index < array.length; index++) {
        if (array[index] == targetElement) {
            output = index;
        }
    }
    return output;
}

//Test
LastindexTest = Array.prototype.myLastIndexOf([108, 18, 8, 8, 9, 9], 9);
console.log(LastindexTest);
