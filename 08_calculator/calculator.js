const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

//great reduce practice
const sum = function (array) {
  const sum = array.reduce((total, num1) => {
    return total + num1;
  }, 0);

  return sum;
};

//another reduce?
const multiply = function (array) {
  // const total = array.reduce((total, num1) => {
  //   return total * num1;
  // }, 1);

  // return total;

  return array.reduce((total, num1) => total * num1);
};

const power = function (num1, power1) {
  return Math.pow(num1, power1);
};

const factorial = function (num1) {
  if (num1 == 0) {
    return 1;
  }
  let total = 1;
  for (let i = num1; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
