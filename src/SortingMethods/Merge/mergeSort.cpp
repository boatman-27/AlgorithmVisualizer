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