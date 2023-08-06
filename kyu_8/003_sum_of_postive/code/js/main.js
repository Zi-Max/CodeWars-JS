// solution 1
function positiveSum(arr) {
	let result = 0;

	for (let i = 0; i < arr.length; i++){
		if (arr[i] > 0) result += arr[i];
	}

	return result;
}

console.log(positiveSum([1, 2, 3, ,4 ,5 ,6, -7, -8, -9, 0]));

