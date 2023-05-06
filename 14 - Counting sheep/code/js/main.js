// solution 1
function countSheeps(arrayOfSheep) {
  let result = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) result++;
  }

  return result;
}

console.log(countSheeps([false, false, true, true, undefined, null])); // 2

// solution 2
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(function(acc, curr) {
    return curr ? acc + curr : acc;
  }, 0)
}

console.log(countSheeps([false, false, true, true, undefined, null])); // 2

// solution 3
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

console.log(countSheeps([false, false, true, true, undefined, null])); // 2
