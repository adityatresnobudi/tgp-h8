const harga = [19.99, 4.95, 25, 3.5];
const studentList = [
    {
        id: 1,
        name: "John Doe",
        score: 90,
        is_graduated: true,
    },
    {
        id: 2,
        name: "Jane Doe",
        score: 90,
        is_graduated: true,
    },
    {
        id: 3,
        name: "Bob Smith",
        score: 90,
        is_graduated: false,
    },
]

const mapWithForLoop = () => {
    let hargaSekarang = [];
    for (let i = 0; i < harga.length; i++) {
        hargaSekarang.push(harga[i] * 1.06);
    }
    return hargaSekarang;
}

const mapWithES6 = () => {
    let hargaSekarang = harga.map((h) => {
        return h * 1.06;
    })
    return hargaSekarang;
}

const filterOdd = () => {
    const numbers = [1, 60, 112, 123, 100, 99, 73];
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            oddNumbers.push(bilangan[i]);
        }
    }
    return oddNumbers;
}

function findStudent(id) {
    return studentList.find((student) => student.id === id);
    // will return the first id that's found
}

const findStudentIndex = (id) => {
    return studentList.findIndex((student) => student.id === id);
    // will return index at student.id is found
}

const isAllPass = (minPassScore) => {
    return studentList.every((student) => student.score >= minPassScore);
}

const isAnyGraduated = () => {
    return studentList.some((student) => student.is_graduated == true);
}

const sumScoreWithReduce = () => {
    return studentList.reduce((total, student) => total + student.score, 0);
}

const sumScoreWithReduceObject = () => {
    return studentList.flatMap((student) => student.score).reduce((prev, score) => prev + score);
}

console.log(mapWithForLoop());
console.log(mapWithES6());
console.log(findStudent(3));
console.log(findStudentIndex(3));
console.log(isAllPass(90))
console.log(isAnyGraduated());
console.log(sumScoreWithReduce());
console.log(sumScoreWithReduceObject());