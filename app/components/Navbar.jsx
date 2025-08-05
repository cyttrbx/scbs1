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
      className={`flex justify-between items-center sticky top-0 z-50 px-4 lg:px-32 py-8 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-neutral-50"
      }`}
    >
      {/* FIRST SIDE */}
      <div className="flex items-center gap-1">
        <div
          className="bg-blue-800 text-white p-1 h-[30px] w-[30px] flex items-center justify-center rounded-tr-xl rounded-br-none 
  rounded-tl-none rounded-bl-xl"
        >
          <h2 className="text-neutral-100 text-xl">Q</h2>
        </div>
        <h2 className=" text-blue-800 font-semibold text-xl">
          QUICKFUNDS
        </h2>
      </div>
      {/* SECOND SIDE */}
      <div className="hidden lg:flex justify-between gap-4 text-neutral-600 font-semibold text-[15px]">
        <Link href="/">Services</Link>
        <Link href="/">Plans</Link>
        <Link href="/">Affiliates</Link>
        <Link href="/">About Us</Link>
      </div>
      {/* THIRD SIDE */}
      <div className="hidden lg:flex">
        <Link href="/">Sing In</Link>
        <Link href="/">Get Started</Link>
      </div>
      <div className="lg:hidden flex">
        <MdMenu size={30} className="text-neutral-500" />
      </div>
    </nav>
  );
}
