"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.Zodiac = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (exports.Gender = Gender = {}));
var Zodiac;
(function (Zodiac) {
    Zodiac["Aries"] = "aries";
    Zodiac["Taurus"] = "taurus";
    Zodiac["Gemini"] = "gemini";
    Zodiac["Cancer"] = "cancer";
    Zodiac["Leo"] = "leo";
    Zodiac["Virgo"] = "virgo";
    Zodiac["Libra"] = "libra";
    Zodiac["Scorpio"] = "scorpio";
    Zodiac["Sagittarius"] = "sagittarius";
    Zodiac["Capricorn"] = "capricorn";
    Zodiac["Aquarius"] = "aquarius";
    Zodiac["Pisces"] = "pisces";
})(Zodiac || (exports.Zodiac = Zodiac = {}));
class Person {
    constructor() {
        this.name = "";
        this.age = 0;
        this.weight = 0;
        this.height = 0;
        this.isMarriage = false;
        this.isDating = false;
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
    calculateBMI() {
        return (this.weight / Math.pow(this.height, 2)) * 10000;
    }
}
exports.Person = Person;
