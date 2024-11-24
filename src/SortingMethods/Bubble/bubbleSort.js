// Initial array to be sorted using Bubble Sort
const arr = [2, 8, 5, 3, 9, 4, 1];

// Outer loop to iterate through the array, performing passes
for (let i = 1; i < arr.length; i++) {
  // Flag to track if any swaps were made in this pass
  let swapped = false;

  // Inner loop to compare adjacent elements in the array
  // As 'i' increases, the number of comparisons reduces because the largest elements bubble to the end
  for (let j = 0; j < arr.length - i; j++) {
    // If the current element is greater than the next, swap them
    if (arr[j] > arr[j + 1]) {
      // Swap the elements at position j and j+1
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      // Set swapped to true since a swap was made
      swapped = true;
    }
  }

  // If no swaps were made during this pass, break out of the loop early
  // This indicates the array is already sorted
  if (!swapped) {
    break;
  }
}

// Print the sorted array after completing the Bubble Sort
console.log(arr);
