import { BaseResponse } from './models/base_response';
import Geometry from "./helpers/geometry";
import { Gender, Person, Zodiac } from "./models/person";

function main() {
  const person: Person = new Person();
  person.name = "John Doe";
  person.age = 30;
  person.weight = 65;
  person.height = 165;
  person.gender = Gender.Male;
  person.zodiac = Zodiac.Gemini;
  person.isMarriage = false;
  person.isDating = false;

  // const person: Person = new Person("John Doe", 30, 65, 165, false, false);
  // person.gender = Gender.Male;
  // person.zodiac = Zodiac.Gemini;

  console.log(person);

  console.log("BMI:", person.calculateBMI());

  console.log(Geometry.calculateArea(10));

  const baseResponse = new BaseResponse<Person, Error>(200, "Success", person);

  console.log(baseResponse.errors);
}

main();
