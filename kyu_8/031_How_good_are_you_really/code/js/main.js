// solution 1
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);

  averge = classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;

  return yourPoints > averge;
}

console.log(betterThanAverage([2, 3], 5)); // true
console.log(betterThanAverage([2, 3], 2)); // false
