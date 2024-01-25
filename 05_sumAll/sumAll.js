const sumAll = function (edge1, edge2) {
  let totalSum = 0;

  if (
    !Number.isInteger(edge1) ||
    !Number.isInteger(edge2) ||
    edge1 < 0 ||
    edge2 < 0
  ) {
    return "ERROR";
  }

  if (edge1 > edge2) {
    let temp = edge1;
    edge1 = edge2;
    edge2 = temp;
  }

  for (let i = edge1; i <= edge2; i++) {
    totalSum += i;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
