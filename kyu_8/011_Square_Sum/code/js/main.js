// solution 1
function squareSum(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++)
  {
    result += Math.pow(numbers[i], 2);
  }

  return result;
}

console.log(squareSum([1, 2, 2])); // 9

// solution 2
function squareSum(numbers) {
  let result = numbers.forEach(function (ele) {
    result += ele * ele;
  })

  return result;
}

console.log(squareSum([3, 3])); // 18

// solution 3
function squareSum(numbers) {
  return numbers.reduce(function (acc, curr) {
    return acc + (curr ** 2);
  }, 0)
}

console.log(squareSum([2, 2, 2, 3])); // 21
