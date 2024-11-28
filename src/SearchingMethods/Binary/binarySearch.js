// Array to search in and the value to search for
const arr = [1, 2, 3, 4, 5];
const valueToLookFor = 5;

/**
 * Perform a binary search to find the index of a given value in a sorted array.
 * @param {number[]} arr - The sorted array to search in
 * @param {number} valueToLookFor - The value to search for in the array
 * @returns {number} - The index of the value if found, otherwise -1
 */
function binarySearch(arr, valueToLookFor) {
  // Initialize the lower and upper bounds of the search
  let i = 0; // Lower bound (starting index)
  let j = arr.length - 1; // Upper bound (last index)
  let mid; // Midpoint index

  // Continue searching while the lower bound is less than or equal to the upper bound
  while (i <= j) {
    // Calculate the midpoint of the current range
    mid = parseInt((i + j) / 2); // Use integer division to find the midpoint index

    // Check if the midpoint element matches the target value
    if (arr[mid] == valueToLookFor) {
      return mid; // Return the index of the element if found
    }

    // If the target value is greater, search in the right half
    else if (arr[mid] < valueToLookFor) {
      i = mid + 1; // Update the lower bound to narrow the search
    }

    // If the target value is smaller, search in the left half
    else {
      j = mid - 1; // Update the upper bound to narrow the search
    }
  }

  // If the loop ends without finding the value, return -1 to indicate not found
  return -1;
}

// Call the binarySearch function and print the result
console.log(binarySearch(arr, valueToLookFor));
