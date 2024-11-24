// Input array to be sorted
const arr = [2, 8, 5, 3, 9, 4, 1, 7, 6];

/**
 * Recursive function to split the array into halves until each piece has one element
 * @param {Array} arr - Array to be split
 * @returns {Array} - Sorted array after merging
 */
function split(arr) {
  // Base case: if the array has only one element, it is already sorted
  if (arr.length === 1) {
    return arr;
  }

  // Find the midpoint of the array
  const mid = arr.length / 2;

  // Divide the array into two halves: left and right
  const left = arr.slice(0, mid); // First half
  const right = arr.splice(mid); // Second half
  console.log(left, right); // Log the split arrays for debugging

  // Recursively split and merge the arrays
  return merge(split(left), split(right));
}

/**
 * Merges two sorted arrays into one sorted array
 * @param {Array} left - Left sorted array
 * @param {Array} right - Right sorted array
 * @returns {Array} - Merged sorted array
 */
function merge(left, right) {
  const result = []; // Array to store the merged result

  // Compare elements from both arrays and pick the smallest
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left[0]); // Add the smallest element from "left" to "result"
      left.splice(0, 1); // Remove the smallest element from "left"
    } else {
      result.push(right[0]); // Add the smallest element from "right" to "result"
      right.splice(0, 1); // Remove the smallest element from "right"
    }
  }

  // If there are remaining elements in the "left" array, add them to "result"
  while (left.length) {
    result.push(left[0]); // Add the first element from "left" to "result"
    left.splice(0, 1); // Remove the added element from "left"
  }

  // If there are remaining elements in the "right" array, add them to "result"
  while (right.length > 0) {
    result.push(right[0]); // Add the first element from "right" to "result"
    right.splice(0, 1); // Remove the added element from "right"
  }

  return result; // Return the merged sorted array
}

// Call the "split" function to sort the array and log the result
console.log(split(arr)); // Prints the sorted array
