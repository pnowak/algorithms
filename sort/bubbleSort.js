import swap from './../helpers/helpers';

/**
 * @param {Array} array array array.
 * @returns {Array} Sorted array.
 */
export default function bubbleSort(array) {
  const length = array.length;

  for (let index = 0; index < length; index += 1) {
    for (let indexCheck = 0, stop = length - index; indexCheck < stop; indexCheck += 1) {
      if (array[indexCheck] > array[indexCheck + 1]) {
        swap(indexCheck, indexCheck + 1);
      }
    }
  }

  return array;
}
