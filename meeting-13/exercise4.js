const isArithmeticProgression = (numbers) => {
    let pointer1 = 0;
    let pointer2 = 1;
    let tempDiff = numbers[pointer2]-numbers[pointer1];
    while (pointer2 < numbers.length) {
        if (tempDiff !== numbers[pointer2]-numbers[pointer1]) {
            return false;
        }
        pointer1++;
        pointer2++;
    }
    return true;
}

console.log(isArithmeticProgression([1,2,3,4,5,6]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7,9]));