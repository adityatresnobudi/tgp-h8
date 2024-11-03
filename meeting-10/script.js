const service = require("./service");

const car = {
    name: "Fiat",
    model: 50,
    weight: 850,
    color: "white",
    price: 200000000,
    getName: () => {
        console.log(car.name);
        console.log(getWeightInKG(car.weight));
        car.start();
        console.log(service.getPrice(car.price));
    },
    start: () => {
        console.log("start car");
    },
    drive: () => {
        console.log("drive car");
    },
    brake: () => {
        console.log("brake car");
    },
    stop: () => {
        console.log("stop car");
    },
};

car.getName();

car.start();

function getWeightInKG(weight) {
    return weight+" KG";
}