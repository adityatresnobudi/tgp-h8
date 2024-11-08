const isPrime = (number) => {
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

const listPrima = (angkaPertama, angkaKedua) => {
    let prima = [];
    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if (isPrime(i)) {
            prima.push(i);
        }
    }
    return prima
}

console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));
console.log(listPrima(1, 99));