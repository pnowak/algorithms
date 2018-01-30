export default function binarySearch(array, item) {
	let low = 0;
	let high = array.length - 1;
	let mid;
	let guess;

	while (low <= high) {
		mid = low + high;
		guess = array[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
}