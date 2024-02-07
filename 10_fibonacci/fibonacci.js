const fibonacci = function (targetIndex) {
  let count;
  if (typeof targetIndex !== "number") {
    count = parseInt(targetIndex);
  } else {
    count = targetIndex;
  }

  if (count < 0) {
    return "OOPS";
  } else if (count === 0) {
    return 0;
  }

  let firstPrev = 1;
  let secondPrev = 0;
  for (let i = 2; i <= count; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
