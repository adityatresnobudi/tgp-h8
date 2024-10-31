/**
 * sum: sum a+b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b = 0) {
  return a + b;
}

function sumVariadic(...b) {
  let total = 0;
  b.forEach((value) => (total += value));
  return total;
}

function sumVariadicReduce(...b) {
  const total = b.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return total;
}

/**
 *
 * @param  {...any} b intuitive
 * @returns
 */
const sumWithArrow = (...b) => {
  return b.reduce((prev, current) => prev + current, 0);
};

function toggleImage() {
  const coffeeImage = document.getElementById("devImage");
  if (coffeeImage.classList.contains("hidden")) {
    coffeeImage.classList.remove("hidden");
  } else {
    coffeeImage.classList.add("hidden");
  }
}

// Fn ini akan dijalankan ketika html sudah ke load
// document.onload(() => {

// });
const submitForm = document.getElementById("submitForm");
const inputName = document.getElementById("inputName");
const displayEdu = document.getElementById("displayEdu");
const inputGender = document.querySelectorAll("[name='gender']");


inputGender.forEach((value) => {
    value.addEventListener("change", function (event) {
    const value = event.target.value;
    const displayGender = document.querySelector("#displayGender");
    displayGender.textContent = value;
  });
});

inputName.addEventListener("input", function (event) {
  const value = event.target.value;
  const displayName = document.getElementById("inputName");
  displayName.textContent = value;
});

selectEdu.addEventListener("change", function (event) {
    const value = event.target.value;
  const displayEdu = document.querySelector("#displayEdu");
  displayEdu.textContent = value;
});

submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const form = event.target;
    
    const data = new FormData(form);
    for (const [name, value] of data) {
        console.log(name, ":", value);
    }
    
    console.log(event);
});

const checkedGender = document.querySelector("[name='gender']:checked");
// inputGender.addEventListener("change", function (event) {
    //     const value = event.target.value;
//     const displayGender = document.querySelector("#displayEdu");
//     displayGender.textContent = value;
// })

console.log(sumVariadic(10, 20, 30, 40));
console.log(sumVariadicReduce(20, 30, 40, 50));
console.log(sumWithArrow(10, 20, 30, 40));
