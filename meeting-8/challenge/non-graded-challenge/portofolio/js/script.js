const submitForm = document.getElementById("form");

const getDataPorto = () => {
  let arrData = ["name", "role", "avail", "age", "location", "exp", "email"];

  arrData.forEach((value) => {
    document.getElementById(`form-${value}`).value =
      document.getElementById(value).innerText;
  });
};

function updateDataPorto(event) {
  event.preventDefault();

  const form = event.target;

  const data = new FormData(form);
  for (const [index, value] of data) {
    console.log(index, value);
    document.getElementById(index).innerText =
      value;
  }
}

getDataPorto();
submitForm.addEventListener("submit", updateDataPorto);
