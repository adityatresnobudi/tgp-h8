function main(param1, param2, callback) {
  console.log(param1, param2);
  callback();
}

function callback() {
  console.log("Hello, World!");
}

main("Hello", "World", callback);

function sumWithCallback(nilai1, nilai2, callbackParam) {
  callbackParam(nilai1, nilai2);
}

function sumCallback(nilai1, nilai2) {
  console.log(nilai1 + nilai2);
}

function sumWithCallbackReturn(nilai1, nilai2, callbackParam) {
  if (typeof callbackParam == "function") {
    return callbackParam(nilai1, nilai2);
  }
  return "Callback is not a function";
}

sumWithCallback(5, 10, sumCallback);
// callback with anonymous arrow function
sumWithCallback(5, 10, (nilai1, nilai2) => console.log(nilai1 * nilai2));

console.log(
  "sum with return",
  sumWithCallbackReturn(5, 10, (nilai1, nilai2) => nilai1 + nilai2)
);

function callPromise() {
  let janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Janjian");
    }, 5000);
  });

  return janjian
    .then((data) => {
      console.log("janjian :", data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("callPromise Finally");
    });
}

function callPromiseReject() {
  let janjian = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Janjian");
    }, 5000);

    setTimeout(() => {
      reject("Janjian failed");
    }, 2000);
  });

  return janjian
    .then((data) => {
      console.log("janjian :", data);
    })
    .catch((error) => {
      console.log("Error :", error);
    })
    .finally(() => {
      console.log("callPromiseReject Finally");
    });
}

// callPromise();
// callPromiseReject();

const studentList = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

function fetchStudentById(id) {
  return new Promise((resolve, reject) => {
    let student = studentList.find((student) => student.id === id);
    if (student) {
      resolve(student);
    } else {
      reject("Student not found");
    }
  });
}

fetchStudentById(2)
  .then((student) => {
    console.log(student.name);
  })
  .catch((error) => {
    console.log(error);
  });

fetchStudentById(3)
  .then((student) => {
    console.log(student.name);
  })
  .catch((error) => {
    console.log(error);
  });

function fetchStudentByName(name) {
    let student = studentList.find((student) => student.name === name);
    if (student) {
        return Promise.resolve(student);
    }
    return Promise.reject("Student not found");
}

console.log(fetchStudentByName("Jane Doe"));