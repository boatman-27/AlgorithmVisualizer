# Input array to be sorted
arr = [2, 8, 5, 3, 9, 4, 1, 7]

# Function to recursively split the array into halves and merge them back
def split(arr):
    # Base case: If the array has only one element, it's already sorted
    if len(arr) == 1:
        return arr
    
    # Find the middle index to split the array
    mid = len(arr) // 2
    
    # Divide the array into left and right halves
    left = arr[:mid]
    right = arr[mid:]
    print("Left:", left, "Right:", right)
    
    # Recursively split and merge the left and right halves
    return merge(split(left), split(right))

# Function to merge two sorted arrays into a single sorted array
def merge(left, right):
    result = []  # Initialize an empty list to store the merged result
    print("Left in merge:", left, "Right in merge:", right)
    # Compare elements from both arrays and append the smaller one to 'result'
    while len(left) > 0 and len(right) > 0:
        if left[0] < right[0]:  # If the first element of 'left' is smaller
            result.append(left[0])  # Append it to 'result'
            left.pop(0)  # Remove the appended element from 'left'
        else:  # If the first element of 'right' is smaller or equal
            result.append(right[0])  # Append it to 'result'
            right.pop(0)  # Remove the appended element from 'right'

    # Append any remaining elements from 'left' to 'result'
    while len(left) > 0:
        result.append(left[0])
        left.pop(0)  # Use pop(0) to remove the first element
    
    # Append any remaining elements from 'right' to 'result'
    while len(right) > 0:
        result.append(right[0])
        right.pop(0)  # Use pop(0) to remove the first element

    # Return the merged sorted array
    return result

# Call the split function on the input array and print the sorted array
print(split(arr))
