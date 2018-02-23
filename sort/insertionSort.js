export default function insertionSort(unsorted) {
  for (let index = 0; index < unsorted.length; index += 1) {
    const currentElement = unsorted[index];
    let indexCheck;

    for (indexCheck = index; indexCheck > 0 && currentElement < unsorted[indexCheck - 1];
      indexCheck -= 1) {
      unsorted[indexCheck] = unsorted[indexCheck - 1];
    }

    unsorted[indexCheck] = currentElement;
  }

  const sorted = unsorted;

  return sorted;
}
