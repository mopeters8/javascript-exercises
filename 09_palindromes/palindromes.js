const palindromes = function (string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(string);
  let j = string.length;

  for (let i = 0; i < j / 2; i++) {
    if (string[i] !== string[j - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
