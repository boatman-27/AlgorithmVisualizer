import { Toaster } from "react-hot-toast";
import ControlCenter from "./UI/ControlCenter";
import Visualizer from "./UI/Visualizer";
import { useState } from "react";

function App() {
  const [array, setArray] = useState([]); // Add state to hold the array

  return (
    <>
      <div className="overflow-hidden min-h-screen bg-slate-200 dark:bg-slate-500">
        <div className="flex flex-col md:flex-row p-4 gap-3 min-h-screen overflow-hidden">
          <ControlCenter setArray={setArray} />
          <Visualizer array={array} />
        </div>
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </>
  );
}

export default App;
