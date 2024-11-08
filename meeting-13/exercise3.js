const urutHuruf = (text) => {
  return text.split("").sort().join("");
};

const urutHurufScratch = (text) => {
  let arrText = text.split("");
  let pointer1 = 0;
  let pointer2 = 1;
  let temp = "";
  while (pointer2 < arrText.length) {
    if (arrText[pointer1].charCodeAt(0) > arrText[pointer2].charCodeAt(0)) {
      temp = arrText[pointer1];
      arrText[pointer1] = arrText[pointer2];
      arrText[pointer2] = temp;
      pointer1++;
      continue;
    }
    pointer2++;
  }
  return arrText.join("");
};

console.log(urutHuruf("halo"));
console.log(urutHuruf("qwerty"));
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm"));
console.log(urutHurufScratch("halo"));
console.log(urutHurufScratch("qwerty"));
console.log(urutHurufScratch("qwertyuiopasdfhjklzxcvbnm"));