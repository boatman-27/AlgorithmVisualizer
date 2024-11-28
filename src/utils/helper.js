import toast from "react-hot-toast";

export function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

// Sorting Algorithms

export async function selectionSort(arr, delay = 500, isSorting) {
  let bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array
  let minIndex;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    bars[i].style.backgroundColor = "rgba(186, 181, 7, 0.8)"; // Yellow

    for (let j = i + 1; j < bars.length; j++) {
      if (!isSorting.current) return; // Check if sorting is stopped

      bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (arr[j] < arr[minIndex]) {
        if (minIndex !== i) {
          bars[minIndex].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
        }
        minIndex = j;
        bars[minIndex].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
      } else {
        bars[j].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
      }
    }

    if (minIndex !== i) {
      // Swap the DOM elements by adjusting their height
      await new Promise((resolve) => setTimeout(resolve, delay));
      [bars[i].style.height, bars[minIndex].style.height] = [
        bars[minIndex].style.height,
        bars[i].style.height,
      ];

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

      [bars[i].textContent, bars[minIndex].textContent] = [
        bars[minIndex].textContent,
        bars[i].textContent,
      ];

      // Reset colors after swapping
      bars[minIndex].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
    }

    // Reset the current traversed bar to blue after its final position
    bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
  }

  // Ensure the last bar is set to blue after sorting
  bars[bars.length - 1].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
}

export async function bubbleSort(arr, delay = 500, isSorting) {
  let bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array
  for (let i = 1; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (!isSorting.current) return; // Check if sorting is stopped
      bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red
      bars[j + 1].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red

      await new Promise((resolve) => setTimeout(resolve, delay));
      if (arr[j] > arr[j + 1]) {
        bars[j].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
        bars[j + 1].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green

        // Swap the DOM elements by adjusting their height
        await new Promise((resolve) => setTimeout(resolve, delay));
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        [bars[j].style.height, bars[j + 1].style.height] = [
          bars[j + 1].style.height,
          bars[j].style.height,
        ];

        [bars[j].textContent, bars[j + 1].textContent] = [
          bars[j + 1].textContent,
          bars[j].textContent,
        ];

        swapped = true;
      }
      // Reset colors after swapping
      bars[j].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
      bars[j + 1].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
    }
    if (!swapped) {
      break;
    }
  }
  // Ensure the last bar is set to blue after sorting
  bars[bars.length - 1].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
  console.log(arr);
}

export async function insertionSort(arr, delay = 500, isSorting) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array

  for (let i = 1; i < bars.length; i++) {
    let currentHeight = bars[i].style.height; // Extract height as a value
    let currentText = bars[i].textContent; // Extract text content as a value
    let j = i - 1;

    bars[i].style.backgroundColor = "rgba(186, 181, 7, 0.8)"; // Yellow for element being compared

    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(currentHeight)) {
      if (!isSorting.current) return; // Check if sorting is stopped

      await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay for visualization

      // Shift bar heights and text
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].textContent = bars[j].textContent;

      bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red for element being moved
      j--;
    }

    // Insert current bar's height and text in the correct position
    bars[j + 1].style.height = currentHeight;
    bars[j + 1].textContent = currentText;
    bars[j + 1].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue for element being inserted
  }

  // Reset colors for all bars after sorting
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
  }
}

export async function quickSort(arr, delay = 500, isSorting) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array

  async function partion(low, high) {
    if (low >= high) return;
    let i = low - 1;
    let pivot = arr[high];
    bars[high].style.backgroundColor = "rgba(186, 181, 7, 0.8)"; // Yellow for pivot element

    for (let j = low; j < high; j++) {
      if (!isSorting.current) return; // Check if sorting is stopped
      if (arr[j] < pivot) {
        i++;
        bars[i].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red for element being swapped
        bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red for element being swapped

        [arr[i], arr[j]] = [arr[j], arr[i]];

        [bars[i].style.height, bars[j].style.height] = [
          bars[j].style.height,
          bars[i].style.height,
        ];

        [bars[i].textContent, bars[j].textContent] = [
          bars[j].textContent,
          bars[i].textContent,
        ];

        await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay for visualization
        bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue for element after swapping
        bars[j].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue for element after swapping
      }
    }
    bars[i + 1].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red for element being swapped with pivot
    bars[high].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red for pivot element

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    [bars[i + 1].style.height, bars[high].style.height] = [
      bars[high].style.height,
      bars[i + 1].style.height,
    ];

    [bars[i + 1].textContent, bars[high].textContent] = [
      bars[high].textContent,
      bars[i + 1].textContent,
    ];

    await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay for visualization
    bars[i + 1].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Blue for pivot element after swapping
    bars[high].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue for pivot element after swapping

    await partion(low, i);
    await partion(i + 2, high);
  }

  await partion(0, arr.length - 1);

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
  }
}

export async function mergeSort(arr, delay = 500, isSorting) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array

  async function split(arr, startIndex) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return await merge(
      await split(left, startIndex),
      await split(right, startIndex + mid),
      startIndex
    );
  }

  async function merge(left, right, startIndex) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let resultIndex = startIndex;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (!isSorting.current) return; // Check if sorting is stopped

      await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay for visualization

      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        bars[resultIndex].style.height = left[leftIndex] * 2 + 10 + "px"; // Update bar height
        bars[resultIndex].textContent = left[leftIndex];
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        bars[resultIndex].style.height = right[rightIndex] * 2 + 10 + "px"; // Update bar height
        bars[resultIndex].textContent = right[rightIndex];
        rightIndex++;
      }

      bars[resultIndex].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
      resultIndex++;
    }

    // Add remaining elements from left
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      bars[resultIndex].style.height = left[leftIndex] * 2 + 10 + "px"; // Update bar height
      bars[resultIndex].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
      bars[resultIndex].textContent = left[leftIndex];
      leftIndex++;
      resultIndex++;
      await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay
    }

    // Add remaining elements from right
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      bars[resultIndex].style.height = right[rightIndex] * 2 + 10 + "px"; // Update bar height
      bars[resultIndex].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
      bars[resultIndex].textContent = right[rightIndex];
      rightIndex++;
      resultIndex++;
      await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay
    }

    // Reset bar colors after merging
    for (let i = startIndex; i < startIndex + result.length; i++) {
      bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
    }

    return result;
  }

  await split(arr, 0);
}

// Searching Algorithms

export async function linearSearch(
  arr,
  delay = 500,
  isSorting,
  valueToLookFor
) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array

  async function search(arr, valueToLookFor) {
    for (let i = 0; i < bars.length; i++) {
      if (!isSorting.current) return; // Check if sorting is stopped

      bars[i].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (arr[i] === parseInt(valueToLookFor)) {
        bars[i].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
        return i;
      } else {
        bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    return -1;
  }

  const index = await search(arr, valueToLookFor);

  if (index >= 0) {
    toast.success(`Found item ${valueToLookFor} at index ${index}`);
  } else {
    toast.error(`Item ${valueToLookFor} was not found`);
  }
}

export async function binarySearch(
  arr,
  delay = 500,
  isSorting,
  valueToLookFor
) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array
  let i = 0;
  let j = arr.length - 1;
  let mid;

  async function search(arr, valueToLookFor) {
    while (i <= j) {
      if (!isSorting.current) return; // Check if sorting is stopped
      mid = parseInt((i + j) / 2);
      bars[mid].style.backgroundColor = "rgba(186, 181, 7, 0.8)"; // Yellow
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (arr[mid] === parseInt(valueToLookFor)) {
        bars[mid].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
        return mid;
      } else if (arr[mid] < parseInt(valueToLookFor)) {
        bars[mid].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
        i = mid + 1;
      } else {
        bars[mid].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
        j = mid - 1;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    return -1;
  }

  const index = await search(arr, valueToLookFor);

  if (index >= 0) {
    toast.success(`Found item ${valueToLookFor} at index ${index}`);
  } else {
    toast.error(`Item ${valueToLookFor} was not found`);
  }
}
