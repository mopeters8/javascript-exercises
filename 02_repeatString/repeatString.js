//Remember to check arguments are valid.
const repeatString = function (string, num) {
  if (string.length === 0) {
    return "";
  }

  if (num < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  for (let i = 0; i < num; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
