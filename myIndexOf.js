Array.prototype.indexOf = (array, targetElement) => {
    let output = -1;
    for (index = 0; index < array.length; index++) {
        var arrayvalue = array[index];

        if (arrayvalue == targetElement) {
            output = index;
        }
    }
    return output;
}

//Test
indexTest = Array.prototype.indexOf([6, 98, 54, 8, 11], 11);
console.log(indexTest);