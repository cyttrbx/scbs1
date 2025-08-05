import Link from "next/link";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Add background after 10px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center sticky pb-4 pt-10 lg:pt-4 top-0 z-50 px-4 lg:px-32 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-neutral-50 "
      }`}
    >
      {/* FIRST SIDE */}
      <div className="flex items-center gap-1">
        <div
          className="bg-[#172c7a] text-white p-1 h-[30px] w-[30px] flex items-center justify-center rounded-tr-xl rounded-br-none 
  rounded-tl-none rounded-bl-xl"
        >
          <h2 className="text-neutral-50 text-xl">Q</h2>
        </div>
        <h2 className=" text-[#172c7a] font-semibold text-xl">
          QUICKFUNDS
        </h2>
      </div>
      {/* SECOND SIDE */}
      <div className="hidden lg:flex justify-between gap-8  text-slate-500 font-semibold">
        <Link href="/">Services</Link>
        <Link href="/">Plans</Link>
        <Link href="/">Affiliates</Link>
        <Link href="/">About Us</Link>
      </div>
      {/* THIRD SIDE */}
      <div className="hidden lg:flex gap-8 items-center">
        <Link href="/" className="text-slate-500 font-semibold">
          Sign In
        </Link>
        <Link
          href="/"
          className=" rounded h-[50px] py-4 px-8 text-neutral-100 bg-blue-600 shadow-xl font-semibold"
        >
          Get Started
        </Link>
      </div>
      <div className="lg:hidden flex">
        <MdMenu size={30} className="text-neutral-500" />
      </div>
    </nav>
  );
}
