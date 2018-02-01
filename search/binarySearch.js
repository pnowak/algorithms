export default function binarySearch(array, item) {
	let low = 0;
	let high = array.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = array[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} 

		if (guess < item) {
			low = mid + 1;
		}
	}

	return null;
}

export default function binarySearchRec(array, item) {
	let low = 0;
	let high = array.length - 1;
	let a;

	let mid = Math.floor((low + high) / 2);
	let guess = array[mid];

	if (guess === item) {
		return mid;
	} else if (guess > item) {
		high = mid - 1;
		a = array.splice(low, high);
		binarySearchRec(a, item);
	}  else if (guess < item) {
		low = mid + 1;
		a = array.splice(low, high);
		binarySearchRec(a, item);
	} else {
		return null;
	}
}

