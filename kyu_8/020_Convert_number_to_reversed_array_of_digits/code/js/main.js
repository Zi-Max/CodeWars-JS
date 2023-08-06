// solution 1
function digitize(n) {
  let tmp;
  
  n = String(n).split("")
  
  for (let i = 0; i < n.length; i++)
    n[i] = Number(n[i]);
  
  for (let i = 0; i < n.length / 2; i++) {
    tmp = n[n.length - i - 1];
    n[n.length - i - 1] = n[i];
    n[i] = tmp;
  }

  return n;
}

console.log(digitize(35231)); // 6 5 4 3 2 1

// solution 2
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize(35231)); // 6 5 4 3 2 1

// solution 3
function digitize(n) {
  let rev_arr = [];

  while (n > 0){
    rev_arr.push(n % 10);
    n = Math.floor(n / 10);
  }

  return rev_arr;
}

console.log(digitize(35231)); // 6 5 4 3 2 1

