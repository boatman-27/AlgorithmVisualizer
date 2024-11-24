// Initial array to be sorted
let arr = [2, 8, 5, 3, 9, 4, 1];

// Outer loop: iterate through the entire array except the last element
for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i; // Assume the smallest element is at the current index

  // Inner loop: find the index of the smallest element in the unsorted portion
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j; // Update minIndex if a smaller element is found
    }
  }

  // Swap the smallest element with the current element if needed
  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // ES6 destructuring for swapping
  }
}

// Print the sorted array
console.log(arr);
