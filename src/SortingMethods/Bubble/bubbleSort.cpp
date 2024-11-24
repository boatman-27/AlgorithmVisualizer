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
