const gcdLoop = (firstNum, secondNum) => {
    let smaller = Math.min(firstNum, secondNum);
    let factor = 1;
    for (let i = 1; i <= smaller; i++) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            factor = i;
        }
    }
    return factor;
}

const gcdRecursive = (firstNum, secondNum) => {
    if (secondNum === 0) {
        return firstNum;
    }
    return gcdRecursive(secondNum, firstNum % secondNum);
}

console.log(gcdLoop(12, 16));
console.log(gcdRecursive(12, 16));