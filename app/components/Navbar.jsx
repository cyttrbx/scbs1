import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between gap-4 h-[70px] bg-blue-50 sticky top-0 z-50 backdrop-blur py-8 px-32">
      {/* FIRST SIDE */}
      <div className="">
        <h1>BigCakes</h1>
      </div>
      {/* SECOND SIDE */}
      <div className="flex justify-between gap-4">
        <Link href="/">
          Services
        </Link>
        <Link href="/">
          Plans
        </Link>
        <Link href="/">
          Affiliates
        </Link>
        <Link href="/">
          About Us
        </Link>
      </div>
      {/* THIRD SIDE */}
      <div className="">
        <Link href="/">Sing In</Link>
        <Link href="/">Get Started</Link>
      </div>
    </nav>
  );
}
