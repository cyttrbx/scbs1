import Link from "next/link";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-4 h-[50px] bg-indigo-50 sticky top-0 z-50 backdrop-blur pb-8 pt-12 lg:px-32  px-4">
      {/* FIRST SIDE */}
      <div className="flex items-center gap-1">
        <div
          className="bg-blue-800 text-white p-1 h-[30px] w-[30px] flex items-center justify-center rounded-tr-xl rounded-br-none 
  rounded-tl-none rounded-bl-xl"
        >
          <h2 className="text-neutral-100">Q</h2>
        </div>
        <h2 className=" text-blue-800 font-semibold">QUICKFUNDS</h2>
      </div>
      {/* SECOND SIDE */}
      <div className="hidden lg:flex justify-between gap-4">
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
        <MdMenu size={30} className="text-neutral-500"/>
      </div>
    </nav>
  );
}
