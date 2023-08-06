// solution 1
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) 
    return [];
  
  let newArray = [];

  newArray.push(input.filter((ele) => ele > 0).length);
  newArray.push(input.filter((ele) => ele < 0).reduce((acc, curr) => acc + curr));

  return newArray;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives(null)) // []
console.log(countPositivesSumNegatives([])) // []

// solution 2
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) 
    return [];
  
  let newArray = [0, 0];

  for (let i = 0; i < input.length; i++)
  {
    if (input[i] < 0)
      newArray[1] += input[i]
    else if (input[i] > 0)
      newArray[0] += 1
  }

  return newArray;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
console.log(countPositivesSumNegatives(null)) // []
console.log(countPositivesSumNegatives([])) // []
