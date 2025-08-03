"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    
    }
  };

  return (
    <div className="p-2 mt-4">
      <h1 className="text-red-500 font-semibold text-center ">Counter App</h1>
      <p className="text-center text-xl font-semibold mt-4">{count}</p>
      <div className="mt-6 text-white text-center">
        <button
          onClick={removeCount}
          className="px-2 py-1 text-sm rounded bg-red-400 border border-red-500 cursor-pointer"
        >
          Decrease
        </button>
        <button
          onClick={addCount}
          className="px-2 py-1 text-sm bg-green-400 rounded ml-4 border border-green-500 cursor-pointer"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
