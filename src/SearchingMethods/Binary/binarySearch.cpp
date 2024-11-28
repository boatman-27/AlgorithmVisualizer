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
