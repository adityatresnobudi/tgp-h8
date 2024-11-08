export enum Gender {
  Male = "male",
  Female = "female",
}

export enum Zodiac {
  Aries = "aries",
  Taurus = "taurus",
  Gemini = "gemini",
  Cancer = "cancer",
  Leo = "leo",
  Virgo = "virgo",
  Libra = "libra",
  Scorpio = "scorpio",
  Sagittarius = "sagittarius",
  Capricorn = "capricorn",
  Aquarius = "aquarius",
  Pisces = "pisces",
}

export class Person {
  name: string = "";
  age: number = 0;
  weight: number = 0;
  gender?: Gender;
  height: number = 0;
  zodiac?: Zodiac;
  isMarriage: boolean = false;
  isDating: boolean = false;

  calculateBMI(): number {
    return (this.weight / Math.pow(this.height, 2)) * 10000;
  }
//   constructor(
//     name: string,
//     age: number,
//     weight: number,
//     height: number,
//     marriageStatus: boolean,
//     datingStatus: boolean
//   ) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.height = height;
//     this.isMarriage = marriageStatus;
//     this.isDating = datingStatus;
//   }
}
