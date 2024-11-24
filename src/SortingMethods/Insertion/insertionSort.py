# Initialize the array to be sorted
arr = [2, 8, 5, 3, 9, 4, 10, 6, 7, 1]

# Outer loop: Iterate through each element starting from the second one (index 1)
for i in range(1, len(arr)):
    current = arr[i]  # Store the current element to be inserted into the sorted portion
    j = i - 1         # Start comparing with the element to the left of the current element

    # Inner loop: Shift elements of the sorted portion to the right if they are greater than 'current'
    while j >= 0 and arr[j] > current:
        arr[j + 1] = arr[j]  # Shift the larger element one position to the right
        j -= 1               # Move one position to the left
        print(arr)           # Print the array to observe the intermediate steps

    # Insert the current element into its correct position in the sorted portion
    arr[j + 1] = current

# Print the final sorted array
print(arr)
