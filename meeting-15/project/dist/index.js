"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./models/person");
function main() {
    const person = new person_1.Person();
    person.name = "John Doe";
    person.age = 30;
    person.weight = 65;
    person.height = 165;
    person.gender = person_1.Gender.Male;
    person.zodiac = person_1.Zodiac.Gemini;
    person.isMarriage = false;
    person.isDating = false;
    // const person: Person = new Person("John Doe", 30, 65, 165, false, false);
    // person.gender = Gender.Male;
    // person.zodiac = Zodiac.Gemini;
    console.log(person);
    console.log("BMI:", person.calculateBMI());
}
main();
