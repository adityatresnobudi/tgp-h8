function isPrime(number) {
    for (let i = 2; i < number-1; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true
}

const effectiveIsPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    if (number === 2 || number === 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    for (let i = 5; i*i <= number; i = i+6) {
        if (number % i === 0 || number % (i+2) === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));
console.log(effectiveIsPrime(3));
console.log(effectiveIsPrime(7));
console.log(effectiveIsPrime(6));
console.log(effectiveIsPrime(23));
console.log(effectiveIsPrime(33));