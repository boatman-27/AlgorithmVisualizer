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
