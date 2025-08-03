"use client";
import Link from "next/link";
import { useState } from "react";
import Wrapper from "./components/Wrapper";

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
    <Wrapper>
      <div className="p-2 mt-4">
        <nav className="flex gap-4">
          <Link href="/about" className="underline">
            About
          </Link>
          <Link href="/login" className="underline">
            Login
          </Link>
        </nav>
        <h1 className="text-red-500 font-semibold text-center ">Counter App</h1>
        <p className="text-center text-xl font-semibold mt-4">{count}</p>
        <div className="mt-6 text-center">
          <button
            onClick={removeCount}
            className="px-2 py-1 text-sm rounded bg-red-500 border border-red-600 cursor-pointer"
          >
            Decrease
          </button>
          <button
            onClick={addCount}
            className="px-2 py-1 text-sm bg-green-500 rounded ml-4 border border-green-600 cursor-pointer"
          >
            Increase
          </button>
        </div>
        <p className="text-center font-semibold mt-2">Tap and see</p>
      </div>
    </Wrapper>
  );
}
