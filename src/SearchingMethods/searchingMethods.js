export const searchingMethods = [
  {
    name: "Linear Search",
    Desc: "The Linear Search algorithm searches through an array and returns the index of the value it searches for.",
    steps: [
      "Go through the array value by value from the start.",
      "Compare each value to check if it is equal to the value we are looking for.",
      "If the value is found, return the index of that value.",
      "If the end of the array is reached and the value is not found, return -1 to indicate that the value was not found.",
    ],
    pythonCode: `
# Define the array of elements to search in and the value to look for
arr = [12, 8, 9, 11, 5, 11]
valueToLookFor = 11

# Function to perform linear search
def linearSearch(arr, valueToLookFor):
    """
    Perform a linear search in the given array to find the index of the target value.
    
    Parameters:
    arr (list): The array in which to search for the value.
    valueToLookFor (int): The target value to search for in the array.

    Returns:
    int: The index of the first occurrence of the target value if found, otherwise -1.
    """
    # Iterate over the array using a loop
    for i in range(len(arr)):  
        # Check if the current element matches the value we are looking for
        if arr[i] == valueToLookFor:  
            # If a match is found, return the index of the current element
            return i  
    # If no match is found after the loop ends, return -1 to indicate failure
    return -1  

# Call the linearSearch function and print the result
print(linearSearch(arr, valueToLookFor))
    `,
    cppCode: `
#include <iostream>
#include <vector>
using namespace std;

// Linear search function template to work with any data type
template <typename T>
int linearSearch(vector<T> arr, T key) {
    // Iterate through the vector
    for (int i = 0; i < arr.size(); i++) {
        // Check if the current element matches the key
        if (arr[i] == key) {
            return i;  // Return the index if a match is found
        }
    }
    // Return -1 if the key is not found
    return -1;
}

int main() {
    // Initialize a vector of integers
    vector<int> arr = {1, 2, 3, 4, 5};

    // Define the key to search for
    int key = 3;

    // Call the linearSearch function and store the result
    int index = linearSearch(arr, key);

    // Output the result
    cout << "Index of " << key << " is " << index << endl;

    return 0;  // Indicate successful execution
}
    
    `,
    jsCode: `
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

    `,
  },
  {
    name: "Binary Search",
    Desc: "The Binary Search algorithm searches through an array and returns the index of the value it searches for.",
    steps: [
      "Start with the middle element of the array.",
      "If the middle element is the target value, return its index.",
      "If the target value is less than the middle element, repeat the search in the left half of the array.",
      "If the target value is greater than the middle element, repeat the search in the right half of the array.",
      "Repeat steps 1-4 until the target value is found or the search space is empty.",
    ],
    pythonCode: `
# Array to search in and the value to search for
arr = [1, 2, 3, 4, 5]
valueToLookFor = 2

def binarySearch(arr, valueToLookFor):
    """
    Perform a binary search to find the index of a given value in a sorted array.
    :param arr: List of sorted elements
    :param valueToLookFor: Element to search for in the array
    :return: Index of the element if found; otherwise -1
    """
    # Initialize the lower and upper bounds for the search
    i, j = 0, len(arr) - 1

    # Continue searching while the bounds are valid
    while i <= j:
        # Calculate the midpoint of the current range
        mid = (i + j) // 2

        # Check if the midpoint element matches the target value
        if arr[mid] == valueToLookFor:
            return mid  # Return the index if found

        # If the midpoint element is less than the target, search the right half
        elif arr[mid] < valueToLookFor:
            i = mid + 1

        # If the midpoint element is greater than the target, search the left half
        else:
            j = mid - 1

    # If the loop exits without finding the element, return -1
    return -1

# Call the binary search function and print the result
print(binarySearch(arr, valueToLookFor))

    `,
    cppCode: `
#include<iostream>  // Include the iostream library for input and output
#include<vector>    // Include the vector library for using the vector container
using namespace std;

// Define a template function for binary search to handle generic types
template <typename T>
int binarySearch(vector<T> arr, T valueToLookFor) {
    // Initialize the starting (i) and ending (j) indices
    size_t i = 0;                    // Lower bound of the search range
    size_t j = arr.size() - 1;       // Upper bound of the search range
    size_t mid;                      // Variable to store the midpoint index

    // Loop to perform the binary search
    while (i <= j) {
        // Calculate the midpoint index
        mid = int((i + j) / 2);      // Integer division to get the middle index

        // Check if the value at the midpoint matches the target value
        if (arr[mid] == valueToLookFor) {
            return mid;              // Return the index if the value is found
        }
        // If the midpoint value is less than the target, search in the right half
        else if (arr[mid] < valueToLookFor) {
            i = mid + 1;             // Update the lower bound
        }
        // If the midpoint value is greater than the target, search in the left half
        else {
            j = mid - 1;             // Update the upper bound
        }
    }

    // If the loop ends without finding the value, return -1 to indicate not found
    return -1;
}

int main() {
    // Initialize a vector of integers to search in
    vector<int> arr = {1, 2, 3, 4, 5};

    // Define the key to search for
    int key = 2;

    // Call the binary search function and store the result
    int index = binarySearch(arr, key);

    // Output the result
    cout << "Index of " << key << " is " << index << endl;

    return 0;  // Indicate successful execution
}

    `,
    jsCode: `
// Array to search in and the value to search for
const arr = [1, 2, 3, 4, 5];
const valueToLookFor = 2;

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

    `,
  },
];
