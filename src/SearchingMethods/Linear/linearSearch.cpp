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
