function Visualizer({ array = [] }) {
  return (
    <div className="bg-gray-700 w-full overflow-hidden flex flex-col items-center p-2">
      <h1 className="text-center text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        Visualizer
      </h1>

      <div className="flex flex-grow flex-col items-center justify-center overflow-hidden flew-wrap">
        <div className="flex flex-wrap justify-center items-end space-x-1 mt-4">
          {array.map((value, index) => (
            <div
              key={index}
              className={`Bar text-sm ${
                array.length > 50
                  ? "w-[8px] md:w-[13.5px]"
                  : array.length > 40
                  ? "w-[12px] md:w-[16px]"
                  : array.length > 30
                  ? "w-[15px] md:w-[18px]"
                  : array.length > 20
                  ? "w-[20px] md:w-[25px]"
                  : array.length > 10
                  ? "w-[30px] md:w-[40px]"
                  : "w-[40px] md:w-[60px]"
              } text-center text-white font-semibold`}
              style={{
                height: `${value * 2 + 10}px`,
                borderRadius: "5px",
                backgroundColor: "rgba(0, 123, 255, 0.8)",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Visualizer;
