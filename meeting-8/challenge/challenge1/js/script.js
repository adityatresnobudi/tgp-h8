const userPassword = "test";
let password = prompt("Password");

const checkPassword = (password) => {
    if (password === userPassword) {
        alert("benar");
    } else {
        window.location.replace("https://google.com");
    }
}

checkPassword(password);