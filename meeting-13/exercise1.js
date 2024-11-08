const compareNumber = (firstNum, secondNum) => {
    return secondNum > firstNum ? true : (secondNum === firstNum ? -1 : false)
}

console.log(compareNumber(5, 8));
console.log(compareNumber(5, 3));
console.log(compareNumber(4, 4));
console.log(compareNumber(3, 3));
console.log(compareNumber(17, 2));
