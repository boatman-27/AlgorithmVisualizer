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
}
