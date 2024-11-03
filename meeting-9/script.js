const hobi = ["sdvx", "piu", "ddr", "taiko no tatsujin"];
const studentList = [
    {
        name: "yuda",
    },
    {
        name: "nuki",
    },
    {
        name: "nando",
    },
];

hobi.push("maimai");
console.log(hobi);

studentList.push[{
    name: "lukman",
}];
console.log(studentList);

// hobi.pop();
console.log(hobi);

studentList.unshift({name:"adit"});
console.log(studentList);

hobi.shift();
console.log(hobi);

const joinHobi = hobi.join(",");
console.log(joinHobi);

const splitHobi = joinHobi.split(",");
console.log(splitHobi);

const number = [1,9,2,5,76,8,2];
console.log(number.sort());
number.sort((a,b) => a-b);
console.log(number);
number.sort((a,b) => b-a);
console.log(number);

// hobi.splice(0,1)
console.log(hobi)

console.log(hobi.slice(1,3))

const mapStudent = studentList.map((value) => {
    return {
        name: value.name,
        sehat: true,
    };
});
console.log(mapStudent);