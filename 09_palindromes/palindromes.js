const palindromes = function (string) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanString = string
    .toLowerCase()
    .split("")
    .filter((char) => validCharacters.includes(char))
    .join("");

  const reverseString = cleanString.split("").reverse().join("");

  return string === reverseString;
};

console.log(palindromes("mom"));
console.log(palindromes("dad"));

// Do not edit below this line
module.exports = palindromes;
