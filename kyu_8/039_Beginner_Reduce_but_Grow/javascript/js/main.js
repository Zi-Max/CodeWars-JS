// solution 1
function grow(x) {
  return x.reduce((acc, curr) => acc * curr, 1);
}

console.log(grow([1, 2, 3, 4]));

// solution 2
function grow(x) {
  let result = 1;

  for (let i = 0; i < x.length; i++) 
    result *= x[i];

  return result;
}

console.log(grow([1, 2, 3, 4]));

