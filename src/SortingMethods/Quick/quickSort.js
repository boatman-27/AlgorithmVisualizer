// Input array to be sorted
const arr = [8, 2, 4, 7, 1, 3, 9, 6, 5];

function quickSort(arr) {
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Initialize pointers
  let i = -1; // Index of the smaller element boundary
  let j = 0; // Current index being checked
  let pivot = arr[arr.length - 1]; // Choose the last element as the pivot

  // Partition the array around the pivot
  while (arr[j] != pivot) {
    if (arr[j] <= pivot) {
      // Increment the boundary for smaller elements
      i += 1;
      // Swap the current element with the boundary element
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j += 1; // Move to the next element
  }

  // Place the pivot in its correct position
  [arr[i + 1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[i + 1]];

  // Recursively sort the left and right partitions
  const left = quickSort(arr.slice(0, i + 1)); // Elements smaller than pivot
  const right = quickSort(arr.slice(i + 2, arr.length)); // Elements larger than pivot

  // Combine the sorted left partition, pivot, and right partition
  return [...left, arr[i + 1], ...right];
}

// Print the sorted array
console.log(quickSort(arr));
