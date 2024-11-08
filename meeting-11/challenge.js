function removeSpaces (text) {
    return text.replaceAll(" ", "");
  }
  
  function reverseText (text) {
    return text.split("").reverse().join("");
  }
  
  function updateVowels (text) {
    let vowels = new Array("a", "e", "i", "o", "u");
    let encrypt = [];
    for (const value of text.split("")) {
      if (vowels.includes(value)) {
        encrypt.push(String.fromCharCode(value.charCodeAt(0)+1));
        continue
      }
      encrypt.push(value);
    }
    return encrypt.join("");
  }
  
  // Log to console
  console.log(removeSpaces(" hacktiv 8"));
  console.log(reverseText(removeSpaces(" hacktiv 8")));
  console.log(updateVowels(reverseText(removeSpaces(" hacktiv 8"))));