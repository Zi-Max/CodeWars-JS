// solution 1
function invert(array) {
  return array.map((ele) => -ele);
}

console.log(invert([1, 2, 3, 4])); // [-1, -2, -3, -4]
console.log(invert([1, -2, 3, -4])); // [-1, 2, -3, 4]

// solution 2
function invert(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) 
    newArray.push(-array[i]);

  return newArray;
}

console.log(invert([1, 2, 3, 4])); // [-1, -2, -3, -4]
console.log(invert([1, -2, 3, -4])); // [-1, 2, -3, 4]

