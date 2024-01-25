const convertToCelsius = function (degree) {
  let convertedNum = 0;
  convertedNum = (5 / 9) * (degree - 32);

  let rounded = Math.round(convertedNum * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (degree) {
  return Math.round((degree * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
