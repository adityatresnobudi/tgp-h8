console.log("Hello from external js");


let message = "Hello my name Adit"
let age = 25;
let isLogin = true;
let nilai = 10.5;
let user = {
    name: "Joshua",
    age: 25,
    isLogin: true,
}
let hobbies = ["coding", "reading", "swimming"];
let empty = null;

message = parseInt("10") - 1;

console.log(user["name"]);

let result = document.getElementById("result");
console.log(result);

result.innerHTML = "<h1>Hello from script</h1>";

let resultWithSelector = document.querySelector("#result2");
console.log(resultWithSelector);
resultWithSelector.innerText = "<h1>Hello from script</h1>";
// alert(message);

// let test = prompt("Username");

// let isOk = confirm("Are you sure?")
// alert(isOk);

