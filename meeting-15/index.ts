enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Circle,
  // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
  radius: 100,
};
console.log(c);

interface User {
  name: string;
  age: number;
  car: Car;
  school: SchoolType;
}

enum SchoolType {
  negeri = 'negeri',
  swasta = 'swasta',
};

// const school: School = { name: "SPH", address: "test" };

class Car {
  public brand: string;
  public name: string;
  constructor(brand: string, name: string) {
    this.brand = brand;
    this.name = name;
  }
}

const car: Car = new Car("Mazda", "RX7");

const user: User = {
  name: "Nando",
  age: 23,
  car: car,
  school: SchoolType.negeri,
};

function isValidSchoolType(type: string) {
    return Object.values(SchoolType).includes(type as SchoolType);
}

function validateSchool(type: string): SchoolType {
    if (!isValidSchoolType(type)) {
        throw new Error(
            `Invalid school type: ${type}. Allowed school type are: ${Object.values(SchoolType).join(", ")}`
        );
    }
    return type as SchoolType;
}

let item: number | string = "105";
item = 105;

let person: Record<string, any> = {
    name: "John",
    age: 30,
};

let scores: number[] = [10, 59, 70, 90];

scores.push(100);

for (let score of scores) {
    console.log(score);
};

let mixedArray: (string | number)[] = [10, "nama"];

function ceilScratch(num: number): number {
    return Math.ceil(num);
}

console.log(ceilScratch(7.77777777777));

type A = { name: string };
type B = { age: number };

type AandB = A&B;

const abc: A&B = {
    name: "ini dari tipe A",
    age: 10,
};

function main(args?: any[]) {
  // console.log("asdasd");

  let nilai: number = 10;
  console.log(nilai);
  console.log(user);
  console.log(isValidSchoolType("internasional"));
//   console.log(validateSchool("internasional"));
}

main();
