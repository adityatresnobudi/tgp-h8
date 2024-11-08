const rowsGenerate = (arr) => {
    let result = [1];
    for (let i = 0; i < arr.length-1; i++) {
        result.push(arr[i]+arr[i+1]);
    }
    result.push(1);
    return result;
}

const pascalGenerate = (numRows) => {
    let pascal = [[1], [1,1]];
    let length = 2;
    if (numRows === 1) {
        return [pascal[0]];
    }
    if (numRows === 2) {
        return pascal;
    }
    while (length < numRows) {
        pascal.push(rowsGenerate(pascal[length-1]))
        length++;
    }
    return pascal;
}

// console.log(rowsGenerate([1,2,1]));
console.log(pascalGenerate(5));