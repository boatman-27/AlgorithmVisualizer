// Define an array to search within
const arr = [12, 8, 9, 11, 5, 11];
// Define the value we want to search for
const valueToLookFor = 11;

// Function to perform a linear search on the array
function linearSearch(arr, valueToLookFor) {
  // Iterate over the array using a for loop
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element matches the value we are looking for
    if (valueToLookFor === arr[i]) {
      return i; // Return the index of the first match
    }
  }
  // If the value is not found after checking all elements, return -1
  return -1;
}

// Call the linearSearch function and log the result to the console
console.log(linearSearch(arr, valueToLookFor));
