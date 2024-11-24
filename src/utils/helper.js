export function generateRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

export async function selectionSort(arr, delay = 500, isSorting) {
  console.log(delay);
  let bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array
  let minIndex;

  for (let i = 0; i < bars.length - 1; i++) {
    minIndex = i;
    bars[i].style.backgroundColor = "rgba(186, 181, 7, 0.8)"; // Yellow

    for (let j = i + 1; j < bars.length; j++) {
      if (!isSorting.current) return; // Check if sorting is stopped

      bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red
      await new Promise((resolve) => setTimeout(resolve, delay));

      if (
        parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)
      ) {
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
  for (let i = 1; i < bars.length; i++) {
    let swapped = false;
    for (let j = 0; j < bars.length - i; j++) {
      if (!isSorting.current) return; // Check if sorting is stopped
      bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red
      bars[j + 1].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red

      await new Promise((resolve) => setTimeout(resolve, delay));
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        bars[j].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
        bars[j + 1].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green

        // Swap the DOM elements by adjusting their height
        await new Promise((resolve) => setTimeout(resolve, delay));
        [bars[j].style.height, bars[j + 1].style.height] = [
          bars[j + 1].style.height,
          bars[j].style.height,
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
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        bars[resultIndex].style.height = right[rightIndex] * 2 + 10 + "px"; // Update bar height
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
      leftIndex++;
      resultIndex++;
      await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay
    }

    // Add remaining elements from right
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      bars[resultIndex].style.height = right[rightIndex] * 2 + 10 + "px"; // Update bar height
      bars[resultIndex].style.backgroundColor = "rgba(6, 140, 14, 0.8)"; // Green
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

export async function insterionSort(arr, delay = 500, isSorting) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array

  for (let i = 1; i < bars.length; i++) {
    let current = bars[i].style.height;
    let j = i - 1;
    bars[i].style.backgroundColor = "rgba(186, 181, 7, 0.8)"; // Yellow for element being compared

    while (j >= 0 && parseInt(bars[j].style.height) > parseInt(current)) {
      if (!isSorting.current) return; // Check if sorting is stopped

      await new Promise((resolve) => setTimeout(resolve, delay)); // Add delay for visualization

      bars[j + 1].style.height = bars[j].style.height;
      bars[j].style.backgroundColor = "rgba(178, 7, 7, 0.8)"; // Red for element being moved
      j--;
    }
    bars[j + 1].style.height = current;
    bars[j + 1].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue for element being inserted
  }
  // Reset colors for all bars after sorting
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Blue
  }
}

export async function quickSort(arr, delay = 500, isSorting) {
  const bars = Array.from(document.querySelectorAll(".Bar")); // Convert NodeList to Array
  console.log(arr);

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
