// solution 1
function sum(numbers) {
  "use strict";

  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0

// solution 2
function sum(numbers) {
  "use strict";

  if (numbers.length === 0) return 0;

  let result = 0;

  for (let i = 0; i < numbers.length; i++) result += numbers[i];

  return result;
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0

