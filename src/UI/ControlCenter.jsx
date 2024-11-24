import { methods } from "../SortingMethods/methods";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import {
  bubbleSort,
  generateRandomArray,
  insterionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "../utils/helper";
import SortingControlCenter from "./SortingControlCenter";

function ControlCenter({ setArray }) {
  const [chosenMethod, setMethod] = useState(methods[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(
    chosenMethod.pythonCode
  );
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

  const startSorting = () => {
    isSorting.current = true; // Set sorting flag to true
    switch (chosenMethod) {
      case methods[0]:
        // Selection Sort
        selectionSort(array, delay, isSorting);
        break;
      case methods[1]:
        // Bubble Sort
        bubbleSort(array, delay, isSorting);
        break;
      case methods[2]:
        // Insertion Sort
        insterionSort(array, delay, isSorting);
        break;
      case methods[3]:
        // Merge Sort
        mergeSort(array, delay, isSorting);
        break;
      case methods[4]:
        // Quick Sort
        quickSort(array, delay, isSorting);
        break;
      default:
        toast.error("Invalid sorting method.");
        break;
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
    <div className="flex w-full ">
      <SortingControlCenter
        getNewArray={getNewArray}
        startSorting={startSorting}
        stopSorting={stopSorting}
        setLength={setLength}
        setDelay={setDelay}
        setMethod={setMethod}
        chosenMethod={chosenMethod}
        setSelectedLanguage={setSelectedLanguage}
        delay={delay}
        length={length}
        selectedLanguage={selectedLanguage}
        languages={languages}
        methods={methods}
      />
    </div>
  );
}

export default ControlCenter;
