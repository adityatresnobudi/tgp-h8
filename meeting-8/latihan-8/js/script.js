/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarriage
 * @property {number} studentScore
 */

let user = {
  name: "adit",
  age: 22,
  isMarriage: false,
  studentScore: 80,
  school: {
    name: "Binus",
  }
};

let user2 = {
    name: "tobio",
    age: 22,
    isMarriage: false,
    studentScore: 80,
    school: null,
  };

/**
 *
 * @param {number} score
 * @returns {number}
 */
function getGrade(score) {
  let grade = "F";
  if (score >= 80 && score <= 100) {
    grade = "A";
  } else if (score >= 60 && score < 80) {
    grade = "B";
  } else if (score >= 40 && score < 60) {
    grade = "C";
  } else if (score >= 0 && score < 40) {
    grade = "D";
  } else {
    alert("cannot calculate your grade");
  }
  return grade;
}

function checkIsMarriage(isMarriage) {
  return isMarriage === true;
}

console.log(`${user.name}, Score:`, getGrade(user.studentScore));
console.log(`${user2.school?.name ?? "belum sekolah"}, Score:`, getGrade(user.studentScore));

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"


// input: [80, 30, 20, 55, 32, 60, 10, 70, 90, 85]
// output: 

function twoSum(arr, search) {
    
}