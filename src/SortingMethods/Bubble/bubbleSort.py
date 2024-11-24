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
