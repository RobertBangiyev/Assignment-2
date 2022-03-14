Array.prototype.myIndexOf = (array, targetElement) => {
    let output = -1;
    for (index = 0; index < array.length; index++) {
        if (array[index] == targetElement) {
            return index;
        }
    }
    return output;
}

//Test
samplearray = [6, 98, 54, 8, 11, 11]
indexTest = Array.prototype.myIndexOf(samplearray,11);
