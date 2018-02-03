export function binarySearch(array, item) {
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

	return -1;
}

export function binarySearchRecursive(array, item, low = 0, high = array.length - 1) {
	if (low > high) {
		return -1;
	}

	let mid = Math.floor((low + high) / 2);
	let guess = array[mid];

	if (guess === item) {
		return mid;
	}

	if (guess > item) {
		binarySearchRec(array, item, low, mid - 1);

	}  else if (guess < item) {
		binarySearchRec(array, item, mid + 1, high);

	}
}
