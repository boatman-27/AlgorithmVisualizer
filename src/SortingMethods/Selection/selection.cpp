#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {2, 8, 5, 3, 9, 4, 1}; // Initial array to be sorted

    // Outer loop: iterate through the entire array except the last element
    for (size_t i = 0; i < arr.size() - 1; i++) {
        size_t minIndex = i; // Assume the smallest element is at the current index
        
        // Inner loop: find the index of the smallest element in the unsorted portion
        for (size_t j = i + 1; j < arr.size(); j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }
        // Swap the smallest element with the current element if needed
        if (minIndex != i) {
            swap(arr[i], arr[minIndex]);
        }
    }
    // Prsize_t the sorted array
    for (size_t i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }

    return 0;
}