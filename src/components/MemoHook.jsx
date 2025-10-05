import React, { useState, useMemo } from "react";
import { nthPrime } from "../utils/constants";

const MemoHook = () => {
  const [theme, setTheme] = useState(false);
  const [num, setNum] = useState(0);

  const primeValue = useMemo(() => {
    if (num <= 0) return null;
    return nthPrime(num);
  }, [num]);

  console.log("render");

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        className={`h-[300px] w-[400px] border-2 rounded-md p-4 ${
          theme ? "bg-white" : "bg-black"
        }`}
      >
        <p className="text-center text-blue-600 font-bold text-4xl mb-4">
          Use Memo
        </p>

        {/* Theme toggle */}
        <div className="mb-4 text-center">
          <button
            onClick={() => setTheme(!theme)}
            className="font-bold text-white bg-blue-600 rounded-sm px-4 py-2"
          >
            Theme
          </button>
        </div>

        <hr className="mb-4" />

        {/* Input for nth prime */}
        <div className="mb-4 text-center">
          <input
            type="number"
            placeholder="Enter a num..."
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
            className="border border-black px-2 py-1 mr-2"
          />
        </div>

        {/* Answer */}
        {primeValue && (
          <div className="text-center text-red-500">
            <p>{num}th prime number is</p>
            <p>{primeValue}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoHook;
