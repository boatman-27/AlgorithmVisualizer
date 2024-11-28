export const sortingMethods = [
  {
    name: "Selection Sort",
    Desc: "Selection sort is a simple and intuitive sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.",
    steps: [
      "Set the first element as the minimum value.",
      "Compare the minimum value with the next element.",
      "If the next element is smaller than the current minimum, set it as the new minimum.",
      "Repeat steps 2 and 3 until the end of the list.",
      "Swap the minimum value with the first element of the unsorted portion of the list.",
    ],
    pythonCode: `
# Initial array to be sorted using Selection Sort
arr = [2, 8, 5, 3, 9, 4, 1]

# Outer loop: iterates through the entire array except the last element
# Since the last element will already be sorted when we finish the second last iteration
for i in range(0, len(arr) - 1):
    # Assume the smallest element is at the current index "i" i.e. first element of the unsorted portion
    minIndex = i
    
    # Inner loop: find the index of the smallest element in the unsorted portion of the array
    for j in range(i + 1, len(arr)):
        # Compare current element "arr[j]" with the smallest known element "arr[minIndex]"
        if arr[j] < arr[minIndex]:
            # Update "minIndex" to the index of the new smallest element
            minIndex = j
    
    # After inner loop, "minIndex" holds the index of the smallest element in the unsorted portion
    # If the smallest element is not already at the current position "i", swap them
    if minIndex != i:
        # Swap the elements at indices "i" and "minIndex"
        arr[i], arr[minIndex] = arr[minIndex], arr[i]

# Print the sorted array
print(arr)

    `,
    cppCode: `
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {2, 8, 5, 3, 9, 4, 1}; // Initial array to be sorted

    // Outer loop: iterate through the entire array except the last element
    for (int i = 0; i < arr.size() - 1; i++) {
        int minIndex = i; // Assume the smallest element is at the current index
        
        // Inner loop: find the index of the smallest element in the unsorted portion
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }
        // Swap the smallest element with the current element if needed
        if (minIndex != i) {
            swap(arr[i], arr[minIndex]);
        }
    }
    // Print the sorted array
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
    `,
    jsCode: `
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
    `,
  },
  {
    name: "Bubble Sort",
    Desc: "Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    steps: [
      "Go through the array, one value at a time.",
      "For each value, compare it to the value next to it.",
      "If the value is greater than the next value, swap the two values so the larger value is on the right.",
      "Go through the array as many times as there are values in the array.",
    ],
    pythonCode: `
# Initial array to be sorted using Bubble Sort
arr = [2, 8, 5, 3, 9, 4, 1]

# Outer loop that goes through the entire array
# We start at i = 1 because the first pass is always comparing all pairs
for i in range(1, len(arr)):
    # Set swapped to False initially, meaning no swaps have been made yet in this pass
    swapped = False
    
    # Inner loop to perform the comparison and swapping of adjacent elements
    # We reduce the number of comparisons by 'i' because the last 'i' elements are already sorted
    for j in range(0, len(arr) - i):
        # If the current element is greater than the next one, swap them
        if arr[j] > arr[j + 1]:
            # Swap the elements
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            # Mark that a swap occurred during this pass
            swapped = True
    
    # If no swaps occurred during the inner loop, the array is already sorted
    # In that case, we break out of the outer loop early to avoid unnecessary passes
    if not swapped:
        break

# Print the sorted array after completing the Bubble Sort
print(arr)
    `,
    cppCode: `
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Initial array to be sorted
    vector<int> arr = {2, 8, 5, 3, 9, 4, 1}; 

    // Outer loop to iterate through the array, performing passes
    for (size_t i = 0; i < arr.size() - 1; i++) {
        // Flag to track if any swaps were made in this pass
        bool swapped = false;

        // Inner loop to compare adjacent elements in the array
        // The number of comparisons decreases after each pass as the largest elements bubble to the end
        for (size_t j = 0; j < arr.size() - i - 1; j++) {
            // If the current element is greater than the next, swap them
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]); // Swap the elements at position j and j+1
                swapped = true; // Mark that a swap occurred
            }
        }

        // If no swaps were made during this pass, break out of the loop early
        // This indicates that the array is already sorted
        if (!swapped) {
            break;
        }
    }

    // Print the sorted array
    for (const int& num : arr) {
        cout << num << " ";
    }

    return 0;
}
    `,
    jsCode: `
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
    `,
  },
  {
    name: "Insertion Sort",
    Desc: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.",
    steps: [
      "Start with the second element (index 1) of the array.",
      "Compare the current element with the previous elements.",
      "If the current element is smaller than the previous element, move the previous element to the current position.",
      "Repeat this process until the current element is in the correct position.",
      "Move to the next element and repeat the process.",
    ],
    pythonCode: `
# Initialize the array to be sorted
arr = [2, 8, 5, 3, 9, 4, 10, 6, 7, 1]

# Outer loop: Iterate through each element starting from the second one (index 1)
for i in range(1, len(arr)):
    current = arr[i]  # Store the current element to be inserted into the sorted portion
    j = i - 1         # Start comparing with the element to the left of the current element

    # Inner loop: Shift elements of the sorted portion to the right if they are greater than 'current'
    while j >= 0 and arr[j] > current:
        arr[j + 1] = arr[j]  # Shift the larger element one position to the right
        j -= 1               # Move one position to the left
        print(arr)           # Print the array to observe the intermediate steps

    # Insert the current element into its correct position in the sorted portion
    arr[j + 1] = current

# Print the final sorted array
print(arr)
`,
    cppCode: `
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Initialize the array (vector) to be sorted
    vector<int> arr = {2, 8, 5, 3, 9, 4, 10, 6, 7, 1};

    // Outer loop: Iterate through each element starting from the second one (index 1)
    for (size_t i = 1; i < arr.size(); i++) {
        int key = arr[i]; // Store the current element to be inserted into the sorted portion
        int j = i - 1;    // Start comparing with the element to the left of the current element

        // Inner loop: Shift elements of the sorted portion to the right if they are greater than 'key'
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift the larger element one position to the right
            j--;                 // Move one position to the left
        }

        // Insert the key into its correct position in the sorted portion
        arr[j + 1] = key;
    }

    // Output the final sorted array
    for (int num : arr) {
        cout << num << " "; // Print each element in the sorted array
    }
}`,
    jsCode: `
// Initialize the array to be sorted
const arr = [2, 8, 5, 3, 9, 4, 10, 6, 7, 1];

// Outer loop: Iterate through each element starting from the second one (index 1)
for (let i = 1; i < arr.length; i++) {
  let current = arr[i]; // Store the current element to be inserted into the sorted portion
  let j = i - 1; // Start comparing with the element to the left of the current element

  // Inner loop: Shift elements of the sorted portion to the right if they are greater than 'current'
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j]; // Shift the larger element one position to the right
    j--; // Move one position to the left
  }

  // Insert the current element into its correct position in the sorted portion
  arr[j + 1] = current;
}

// Print the final sorted array
console.log(arr);

    `,
  },
  {
    name: "Merge Sort",
    Desc: "Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, sorts them recursively, and then merges the sorted halves to produce the final sorted array.",
    steps: [
      "Divide the unsorted list into n sublists, each containing one element.",
      "Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.",
      "This will be the sorted list.",
    ],
    pythonCode: `
# Input array to be sorted
arr = [2, 8, 5, 3, 9, 4, 1, 7]

# Function to recursively split the array into halves and merge them back
def split(arr):
    # Base case: If the array has only one element, it's already sorted
    if len(arr) == 1:
        return arr
    
    # Find the middle index to split the array
    mid = len(arr) // 2
    
    # Divide the array into left and right halves
    left = arr[:mid]
    right = arr[mid:]
    
    # Recursively split and merge the left and right halves
    return merge(split(left), split(right))

# Function to merge two sorted arrays into a single sorted array
def merge(left, right):
    result = []  # Initialize an empty list to store the merged result

    # Compare elements from both arrays and append the smaller one to 'result'
    while len(left) > 0 and len(right) > 0:
        if left[0] < right[0]:  # If the first element of 'left' is smaller
            result.append(left[0])  # Append it to 'result'
            left.pop(0)  # Remove the appended element from 'left'
        else:  # If the first element of 'right' is smaller or equal
            result.append(right[0])  # Append it to 'result'
            right.pop(0)  # Remove the appended element from 'right'

    # Append any remaining elements from 'left' to 'result'
    while len(left) > 0:
        result.append(left[0])
        left.pop(0)  # Use pop(0) to remove the first element
    
    # Append any remaining elements from 'right' to 'result'
    while len(right) > 0:
        result.append(right[0])
        right.pop(0)  # Use pop(0) to remove the first element

    # Return the merged sorted array
    return result

# Call the split function on the input array and print the sorted array
print(split(arr))
`,
    cppCode: `
#include <iostream>
#include <vector>
using namespace std;

vector<int> split(vector<int>& arr) {
    if (arr.size() == 1) {
        return arr;
    }

    size_t mid = arr.size() / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());

    left = split(left);
    right = split(right);
    
    vector<int> result;
    size_t i = 0, j = 0;

    // Merge the two sorted halves
    while (i < left.size() && j < right.size()) {
        if (left[i] <= right[j]) {
            result.push_back(left[i++]);
        } else {
            result.push_back(right[j++]);
        }
    }

    // Add any remaining elements from the left subarray
    while (i < left.size()) {
        result.push_back(left[i++]);
    }

    // Add any remaining elements from the right subarray
    while (j < right.size()) {
        result.push_back(right[j++]);
    }

    return result;
}

int main() {
    vector<int> arr = {2, 8, 5, 3, 9, 4, 1, 7};
    vector<int> sortedArr = split(arr);

    // Print sorted array
    cout << "Sorted array: ";
    for (int num : sortedArr) {
        cout << num << " ";
    }
    cout << endl;
}
    
    `,
    jsCode: `
// Input array to be sorted
const arr = [2, 8, 5, 3, 9, 4, 1, 7, 6, 10];

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
  while (left.length > 0) {
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
`,
  },
  {
    name: "Quick Sort",
    Desc: "Quick Sort is a sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.",
    steps: [
      "Select a pivot element from the array.",
      "Partition the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
      "Recursively sort the sub-arrays.",
    ],
    pythonCode: `
# Input array to be sorted
arr = [8, 2, 4, 7, 1, 3, 9, 6, 5]

def quickSort(arr):
    if len(arr) <= 1:  # Base case
        return arr  # Return the array if it has 1 or 0 elements

    pivot = arr[-1]  # Choose the last element as the pivot
    i = -1  # Initialize the partition index
    for j in range(len(arr) - 1):  # Iterate through all elements except the pivot
        if arr[j] <= pivot:  # If the element is smaller than or equal to the pivot
            i += 1  # Move the partition index
            arr[i], arr[j] = arr[j], arr[i]  # Swap the elements

    arr[i + 1], arr[-1] = arr[-1], arr[i + 1]  # Place the pivot in its correct position
    left = quickSort(arr[:i + 1])  # Recursively sort the left partition
    right = quickSort(arr[i + 2:])  # Recursively sort the right partition

    return left + [arr[i + 1]] + right  # Combine the sorted partitions

print(quickSort(arr))
`,
    cppCode: `
#include <iostream>
#include <vector>
using namespace std;

// QuickSort function to sort the array
vector<int> quickSort(vector<int> arr) {
    // Base case: if the array has 1 or no elements, it's already sorted
    if (arr.size() <= 1) {
        return arr;
    }

    // Choose the last element as the pivot
    int pivot = arr[arr.size() - 1];

    // Index for the smaller element
    int i = -1;

    // Partition the array based on the pivot
    for (size_t j = 0; j < arr.size() - 1; j++) {
        // If the current element is less than or equal to the pivot
        if (arr[j] <= pivot) {
            i++; // Move the boundary of the smaller elements
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Place the pivot in its correct position
    int temp = arr[i + 1];
    arr[i + 1] = arr[arr.size() - 1];
    arr[arr.size() - 1] = temp;

    // Recursively apply QuickSort to the left and right partitions
    vector<int> left = quickSort(vector<int>(arr.begin(), arr.begin() + i + 1)); // Left subarray
    vector<int> right = quickSort(vector<int>(arr.begin() + i + 2, arr.end())); // Right subarray

    // Combine the sorted left, pivot, and right arrays
    left.push_back(pivot); // Add pivot to the end of the left array
    left.insert(left.end(), right.begin(), right.end()); // Append the right array to the left

    return left; // Return the sorted array
}

int main() {
    // Input array
    vector<int> arr = {10, 7, 8, 9, 1, 5};

    // Call the QuickSort function
    vector<int> sortedArr = quickSort(arr);

    // Print the sorted array
    for (int num : sortedArr) {
        cout << num << " ";
    }
}
`,
    jsCode: `
// Input array to be sorted
const arr = [8, 2, 4, 7, 1, 3, 9, 6, 5];

function quickSort(arr) {
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) return arr;

  // Initialize pointers
  let i = -1; // Index of the smaller element boundary
  let j = 0;  // Current index being checked
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
`,
  },
];
