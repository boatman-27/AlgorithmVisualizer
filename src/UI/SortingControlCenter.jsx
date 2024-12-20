import toast from "react-hot-toast";
import Button from "./Button";
import CodeBlock from "./CodeBlock";
import { useState } from "react";

function SortingControlCenter({
  setSortingMethod,
  chosenSortingMethod,
  languages,
  sortingMethods,
}) {
  const getCodeSnippet = () => {
    let codeSnippet;
    switch (selectedSortingLanguage) {
      case "cpp":
        codeSnippet = chosenSortingMethod?.cppCode;
        break;
      case "python":
        codeSnippet = chosenSortingMethod?.pythonCode;
        break;
      case "javascript":
        codeSnippet = chosenSortingMethod?.jsCode;
        break;
      default:
        codeSnippet = "// Code not available";
    }

    if (!codeSnippet) {
      toast.error("No code snippet available for the selected language.");
      return;
    }
    return codeSnippet;
  };

  const [selectedSortingLanguage, setSelectedSortingLanguage] = useState(
    chosenSortingMethod?.pythonCode
  );

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        Sorting
      </h1>

      <div className="flex flex-row gap-2 items-center justify-center p-2 mt-3">
        {sortingMethods.map((method) => (
          <Button
            key={method.name}
            type="answer"
            onClick={() => setSortingMethod(method)}
            customClass={
              method.name === chosenSortingMethod?.name
                ? "border-2 border-yellow-500"
                : ""
            }
          >
            {method.name}
          </Button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-center p-2 mt-3 whitespace-nowrap">
        {languages.map((language) => (
          <Button
            key={language.name}
            type="answer"
            onClick={() => {
              if (language.value === selectedSortingLanguage) {
                setSelectedSortingLanguage("");
              } else {
                setSelectedSortingLanguage(language.value);
              }
            }}
            customClass={
              selectedSortingLanguage === language.value
                ? "border-2 border-yellow-500"
                : ""
            }
          >
            {language.name}
          </Button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-center p-2 mt-3 w-full overflow-hidden">
        <CodeBlock code={getCodeSnippet()} pLang={selectedSortingLanguage} />
      </div>
    </div>
  );
}

export default SortingControlCenter;
