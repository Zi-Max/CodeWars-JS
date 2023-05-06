// solution 1
function solution(str) {
	let result = "";

	for (let i = str.length - 1; i >= 0; i--)
		result += str[i];

	return result;
}

console.log(solution(abc)); // cba

// solution 2
function solution(str) {
	let result = "";

	for (let i = 0; i >= str.length; i++)
		result = str[i] + result;

	return result;
}

console.log(solution(abc)); // cba

// solution 3
function solution(str) {
	return str.split("").reverse().join("");
}

console.log(solution(abc)); // cba


