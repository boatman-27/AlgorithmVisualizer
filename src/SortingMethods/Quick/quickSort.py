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