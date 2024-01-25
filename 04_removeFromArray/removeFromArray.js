const removeFromArray = function (array, ...args) {
  let cleanArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      cleanArray.push(item);
    }
  });

  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
