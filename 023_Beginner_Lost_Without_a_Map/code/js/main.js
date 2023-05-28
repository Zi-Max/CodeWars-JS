// solution 1
function maps(x) {
  return x.map((x) => x * 2);
}

console.log(maps([1, 2, 3]));

// solution 2
function maps(x) {
  let newArr = [];

  for (let i = 0; i < x.length; i++) 
    newArr.push(x[i] * 2);

  return newArr;
}

console.log(maps([1, 2, 3]));

