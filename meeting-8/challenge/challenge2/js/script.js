let score = prompt("Score");

const checkScore = (score) => {
    if (score >= 80 && score <= 100) {
        alert("your grade is A");
    } else if (score >= 60 && score < 80) {
        alert("your grade is B");
    } else if (score >= 40 && score < 60) {
        alert("your grade is C");
    } else if (score < 40) {
        alert("your grade is D");
    } else {
        alert("cannot calculate your grade");
    }
}

checkScore(score);