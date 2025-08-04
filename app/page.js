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
        <h1 className="text-[#d1a954] text-4xl font-semibold text-center ">
          Counter App
        </h1>
        <div className="text-center mt-4">
          <h2 className="text-[#f5f5f5]">
            Invest and make profits quick and fast
          </h2>
          <h2 className="text-[#cbd5e1]">Double your profits now!</h2>
        </div>
        <p className="text-center text-xl font-semibold mt-4">{count}</p>
        <div className="mt-6 text-center">
          <button
            onClick={removeCount}
            className="px-2 py-1 text-sm rounded bg-[#b4893c] hover:bg-[#d1a954]"
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

      {/* CARD SECTION */}

      <div className="w-[70%] py-4 px-6 gap-4 m-auto bg-neutral-900 border-2 rounded-2xl border-neutral-800 text-neutral-300">
        <div className=" flex justify-between items-center p-4 border border-neutral-800  bg-[#121212] h-[100px] rounded-2xl">
          <p>Daily bitcoin buy</p>
          <p>+0.00004BTC</p>
        </div>
        <div className=" flex justify-between items-center p-4 mt-4  bg-[#121212] border border-neutral-800 h-[100px] rounded-2xl">
          <p>Daily bitcoin buy</p>
          <p className="text-teal-300">+0.00004BTC</p>
        </div>
      </div>
    </Wrapper>
  );
}
