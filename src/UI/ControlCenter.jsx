import { sortingMethods } from "../SortingMethods/sortingMethods";
import { searchingMethods } from "../SearchingMethods/searchingMethods";
import { useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  bubbleSort,
  generateRandomArray,
  mergeSort,
  quickSort,
  selectionSort,
  linearSearch,
  insertionSort,
  binarySearch,
} from "../utils/helper";
import SortingControlCenter from "./SortingControlCenter";
import SearchControlCenter from "./SearchControlCenter";
import Button from "./Button";

function ControlCenter({ setArray }) {
  const [chosenSortingMethod, setSortingMethod] = useState(sortingMethods[0]);
  const [chosenSearchingMethod, setChosenSearchingMethod] = useState(
    searchingMethods[0]
  );
  const [valueToLookFor, setValueToLookFor] = useState(0);

  const [length, setLength] = useState(10);
  const [array, setArrayState] = useState([]);
  const [delay, setDelay] = useState(500);
  const isSorting = useRef(false);

  const languages = [
    { name: "Python", value: "python" },
    { name: "C++", value: "cpp" },
    { name: "JavaScript", value: "javascript" },
  ];

  // Update the array state in the parent (App)
  const setArrayToParent = (array) => setArray(array);

  const sortingFunctions = {
    "Selection Sort": selectionSort,
    "Bubble Sort": bubbleSort,
    "Insertion Sort": insertionSort,
    "Merge Sort": mergeSort,
    "Quick Sort": quickSort,
  };

  const searchingFunctions = {
    "Linear Search": linearSearch,
    "Binary Search": binarySearch,
  };

  const startSorting = () => {
    isSorting.current = true; // Set sorting flag to true

    if (sortingFunctions[chosenSortingMethod.name]) {
      sortingFunctions[chosenSortingMethod.name](array, delay, isSorting);
    } else {
      toast.error("Invalid sorting method.");
    }
  };

  const startSearching = () => {
    isSorting.current = true; // Set sorting flag to true

    if (searchingFunctions[chosenSearchingMethod.name]) {
      searchingFunctions[chosenSearchingMethod.name](
        array,
        delay,
        isSorting,
        valueToLookFor
      );
    } else {
      toast.error("Invalid searching method.");
    }
  };

  const getNewArray = () => {
    const newArray = generateRandomArray(length);
    setArrayState(newArray);
    setArrayToParent(newArray);
  };

  const stopSorting = () => {
    isSorting.current = false;
    toast.success("Sorting stopped.");
  };

  return (
    <div className="flex flex-col w-full bg-slate-700 overflow-y-hidden p-2 gap-3">
      <h1 className="text-center text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        Algorithm Control Center
      </h1>

      {/* Control Center */}
      <div className="flex flex-row gap-2 items-center justify-center p-2 mt-3">
        <Button type="next" onClick={() => getNewArray()}>
          New Array
        </Button>
        <Button type="start" onClick={() => startSorting()}>
          Start Sorting
        </Button>
        <Button type="start" onClick={() => startSearching()}>
          Start Searching
        </Button>
        <Button type="end" onClick={() => stopSorting()}>
          End Sorting
        </Button>

        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="10"
            max="100"
            id="array-length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-blue-500"
          />
          <span className="text-sm font-medium italic text-white">
            Array Size: {length}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="range"
            min="100"
            max="1000"
            id="speed"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
            className="w-full accent-blue-500"
          />
          <span className="text-sm font-medium italic text-white">
            Delay: {delay} ms
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <label
            className="text-white font-medium text-sm"
            htmlFor="valueToLookFor"
          >
            Value to Look For:
          </label>
          <input
            type="number"
            id="valueToLookFor"
            value={valueToLookFor}
            onChange={(e) => setValueToLookFor(e.target.value)}
            className="w-32 px-3 py-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <SortingControlCenter
        setSortingMethod={setSortingMethod}
        chosenSortingMethod={chosenSortingMethod}
        languages={languages}
        sortingMethods={sortingMethods}
      />
      <SearchControlCenter
        searchingMethods={searchingMethods}
        chosenSearchingMethod={chosenSearchingMethod}
        setChosenSearchingMethod={setChosenSearchingMethod}
        languages={languages}
      />
    </div>
  );
}

export default ControlCenter;
