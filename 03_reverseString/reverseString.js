const reverseString = function (toReverse) {
  let stringReversed = "";
  for (let i = toReverse.length; i >= 0; i--) {
    stringReversed += toReverse.charAt(i);
  }

  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
