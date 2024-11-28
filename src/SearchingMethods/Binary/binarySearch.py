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
