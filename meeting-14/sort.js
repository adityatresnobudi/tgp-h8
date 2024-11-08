let arr = [4,5,2,1,0,3];

const selectionSort = (someArray) => {
    let arrLength = someArray.length;
    let minimumIndex = 0; // minimum value position
    for (let idx = 0; idx < arrLength-1; idx++) {
        minimumIndex = idx;
        for (let checker = idx+1; checker < arrLength; checker++) {
            if (someArray[minimumIndex] > someArray[checker]) {
                minimumIndex = checker;
            }
        }
        let temp = someArray[idx];
        someArray[idx] = someArray[minimumIndex];
        someArray[minimumIndex] = temp;
        console.log(someArray);
    }
    return someArray;
}

function insertionSort(inputArr) {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        console.log("key:", key);
        let j = i-1;
        while (j >= 0 && inputArr[j] > key) {
            // console.log("inhere");
            inputArr[j+1] = inputArr[j];
            j -= 1;
            console.log(inputArr);
        }
        inputArr[j+1] = key;
        console.log(i, inputArr);
    }
    return inputArr;
}

console.log(arr);
// console.log(selectionSort(arr));
console.log(insertionSort(arr));