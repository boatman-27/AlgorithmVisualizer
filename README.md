# Algorithms Visualizer

Algorithms Visualizer is a web application built with **React** and **Vite** to visualize various sorting algorithms. This project helps in understanding how different sorting algorithms work through a visually appealing and interactive interface.

## Features

- Visualize popular sorting algorithms:
  - Selection Sort
  - Bubble Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
- Adjustable delay for sorting animations.
- Change array size dynamically.
- Supports code visualization in multiple languages:
  - Python
  - C++
  - JavaScript
- Real-time control to start or stop sorting.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/boatman-27/AlgorithmVisualizer
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

The app offers many features including:

1. **Generate a Random Array**: Click on the "Generate Array" button to create a new array with random values.
2. **Choose a Sorting Algorithm**: Select one of the algorithms from the dropdown menu.
   Adjust Parameters:
3. Change the array size using the length slider.
4. Adjust the sorting speed using the delay slider.
5. Start Sorting: Click "Start Sorting" to visualize the algorithm in action.
6. Stop Sorting: Stop the ongoing sorting process at any time using the "Stop Sorting" button.

## Supported Sorting Algorithms

### Selection Sort

- Compares each element with the rest to find the smallest and swaps them.
- Time Complexity: O(n²).

### Bubble Sort

- Repeatedly swaps adjacent elements if they are in the wrong order.
- Time Complexity: O(n²).

### Insertion Sort

- Builds the sorted array one item at a time by inserting elements into the correct position.
- Time Complexity: O(n²).

### Merge Sort

- Divides the array into halves, sorts each half, and merges them back.
- Time Complexity: O(n log n).

### Quick Sort

- Divides the array into subarrays around a pivot and recursively sorts them.
- Time Complexity: O(n log n) (average).

## Future Improvements

- Add more algorithms like Heap Sort, Counting Sort, and Radix Sort.
- Implement user-friendly code visualization for more languages.
- Improve user interface and responsiveness.
