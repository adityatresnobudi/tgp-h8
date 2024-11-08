var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    // Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    radius: 100,
};
console.log(c);
var SchoolType;
(function (SchoolType) {
    SchoolType["negeri"] = "negeri";
    SchoolType["swasta"] = "swasta";
})(SchoolType || (SchoolType = {}));
;
// const school: School = { name: "SPH", address: "test" };
var Car = /** @class */ (function () {
    function Car(brand, name) {
        this.brand = brand;
        this.name = name;
    }
    return Car;
}());
var car = new Car("Mazda", "RX7");
var user = {
    name: "Nando",
    age: 23,
    car: car,
    school: SchoolType.negeri,
};
function isValidSchoolType(type) {
    return Object.values(SchoolType).includes(type);
}
function validateSchool(type) {
    if (!isValidSchoolType(type)) {
        throw new Error("Invalid school type: ".concat(type, ". Allowed school type are: ").concat(Object.values(SchoolType).join(", ")));
    }
    return type;
}
var item = "105";
item = 105;
var person = {
    name: "John",
    age: 30,
};
function main(args) {
    // console.log("asdasd");
    var nilai = 10;
    console.log(nilai);
    console.log(user);
    console.log(isValidSchoolType("internasional"));
    //   console.log(validateSchool("internasional"));
}
main();
