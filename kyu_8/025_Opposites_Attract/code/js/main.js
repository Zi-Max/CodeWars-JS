// solution 1
function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 != 0) return true;
  else if (flower1 % 2 != 0 && flower2 % 2 == 0) return true;
  return false;
}

// solution 2
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}

// solution 3
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

