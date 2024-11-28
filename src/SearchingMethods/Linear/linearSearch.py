# Define the array of elements to search in and the value to look for
arr = [12, 8, 9, 11, 5, 11]
valueToLookFor = 11

# Function to perform linear search
def linearSearch(arr, valueToLookFor):
    """
    Perform a linear search in the given array to find the index of the target value.
    
    Parameters:
    arr (list): The array in which to search for the value.
    valueToLookFor (int): The target value to search for in the array.

    Returns:
    int: The index of the first occurrence of the target value if found, otherwise -1.
    """
    # Iterate over the array using a loop
    for i in range(len(arr)):  
        # Check if the current element matches the value we are looking for
        if arr[i] == valueToLookFor:  
            # If a match is found, return the index of the current element
            return i  
    # If no match is found after the loop ends, return -1 to indicate failure
    return -1  

# Call the linearSearch function and print the result
print(linearSearch(arr, valueToLookFor))
