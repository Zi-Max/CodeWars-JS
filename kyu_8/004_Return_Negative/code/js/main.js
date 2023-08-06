// solution 1
function makeNegative(num) {
	if (num < 0) return num;
	else return -num;
}

console.log(makeNegative(5));
console.log(makeNegative(-1));

// solution 2
function makeNegative(num) {
	return num < 0 ? num : -num;
}

console.log(makeNegative(5));
console.log(makeNegative(-1));
