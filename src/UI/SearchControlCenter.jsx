import toast from "react-hot-toast";
import Button from "./Button";
import CodeBlock from "./CodeBlock";
import { useState } from "react";

function SearchControlCenter({
  searchingMethods,
  chosenSearchingMethod,
  setChosenSearchingMethod,
  languages,
}) {
  const [selectedSearchingLanguage, setSelectedSearchingLanguage] = useState(
    chosenSearchingMethod?.pythonCode
  );

  const getSearchingCodeSnippet = () => {
    let codeSnippet;
    switch (selectedSearchingLanguage) {
      case "cpp":
        codeSnippet = chosenSearchingMethod?.cppCode;
        break;
      case "python":
        codeSnippet = chosenSearchingMethod?.pythonCode;
        break;
      case "javascript":
        codeSnippet = chosenSearchingMethod?.jsCode;
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

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-semibold tracking-tight text-white md:text-5xl">
        Searching
      </h1>

      <div className="flex flex-row gap-2 items-center justify-center p-2 mt-3">
        {searchingMethods.map((method) => (
          <Button
            key={method.name}
            type="answer"
            onClick={() => setChosenSearchingMethod(method)}
            customClass={
              method.name === chosenSearchingMethod?.name
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
              if (language.value === selectedSearchingLanguage) {
                setSelectedSearchingLanguage("");
              } else {
                setSelectedSearchingLanguage(language.value);
              }
            }}
            customClass={
              selectedSearchingLanguage === language.value
                ? "border-2 border-yellow-500"
                : ""
            }
          >
            {language.name}
          </Button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-center p-2 mt-3 w-full overflow-hidden">
        <CodeBlock
          code={getSearchingCodeSnippet()}
          pLang={selectedSearchingLanguage}
        />
      </div>
    </div>
  );
}

export default SearchControlCenter;
