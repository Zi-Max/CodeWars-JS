// solution 1
function findAverage(array) {
  if (!array.length) return 0;

  averge = array.reduce((acc, curr) => acc + curr) / array.length;

  return averge;
}

console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5
console.log(findAverage([])); // 0

// solution 2
function findAverage(array) {
  let averge = 0;

  if (!array.length) return 0;

  for (let i = 0; i < array.length; i++) averge += array[i];

  return averge / array.length;
}

console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5
console.log(findAverage([])); // 0

