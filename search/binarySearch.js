/**
 * @param {Array} array Input array.
 * @param {Number} item Value of the element which index should be found.
 * @returns {Number} Index of the element or -1 if not found.
 */
export function binarySearch(array, item) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = array[mid];

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

/**
 * @param {Array} array Input array.
 * @param {Number} item Value of the element which index should be found.
 * @param {Number} [low=0] Min start index.
 * @param {Number} [high=array.length - 1] Max end index.
 * @returns {Number} Index of the element or -1 if not found.
 */
export function binarySearchRecursive(array, item, low = 0, high = array.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);
  const guess = array[mid];

  if (guess === item) {
    return mid;
  }

  if (guess > item) {
    binarySearchRecursive(array, item, low, mid - 1);
  } else if (guess < item) {
    binarySearchRecursive(array, item, mid + 1, high);
  }
}
