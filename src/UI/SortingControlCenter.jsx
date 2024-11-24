import Button from "./Button";
import CodeBlock from "./CodeBlock";

function SortingControlCenter({
  getNewArray,
  startSorting,
  stopSorting,
  setLength,
  setDelay,
  setMethod,
  chosenMethod,
  setSelectedLanguage,
  delay,
  length,
  selectedLanguage,
  languages,
  methods,
}) {
  const getCodeSnippet = () => {
    let codeSnippet;
    switch (selectedLanguage) {
      case "cpp":
        codeSnippet = chosenMethod?.cppCode;
        break;
      case "python":
        codeSnippet = chosenMethod?.pythonCode;
        break;
      case "javascript":
        codeSnippet = chosenMethod?.jsCode;
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
    <div className="bg-slate-700 w-full overflow-y-hidden p-2">
      <h1 className="text-center text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        Sorting Visualizer
      </h1>
      <div className="flex flex-row gap-2 items-center justify-center p-2 mt-3">
        <Button type="next" onClick={() => getNewArray()}>
          New Array
        </Button>
        <Button type="start" onClick={() => startSorting()}>
          Start Sorting
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
      </div>

      <div className="flex flex-row gap-2 items-center justify-center p-2 mt-3">
        {methods.map((method) => (
          <Button
            key={method.name}
            type="answer"
            onClick={() => setMethod(method)}
            customClass={
              method.name === chosenMethod.name
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
            onClick={() => setSelectedLanguage(language.value)}
            stomClass={
              selectedLanguage === language.value
                ? "border-2 border-yellow-500"
                : ""
            }
          >
            {language.name}
          </Button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-center p-2 mt-3 w-full overflow-hidden">
        <CodeBlock code={getCodeSnippet()} pLang={selectedLanguage} />
      </div>
    </div>
  );
}

export default SortingControlCenter;
