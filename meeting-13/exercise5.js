const threeStepAB = (text) => {
    for (let i = 0; i < text.length-4; i++) {
        if ((text[i] === 'a' && text[i+4] === 'b') || (text[i] === 'b' && text[i+4] === 'a')) {
            return true;
        }
    }
    return false;
}

console.log(threeStepAB("lane borrowed"));
console.log(threeStepAB("i am sick"));
console.log(threeStepAB("you are boring"));
console.log(threeStepAB("barbarian"));
console.log(threeStepAB("bacon and meat"));