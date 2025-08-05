import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="lg:flex lg:justify-between py-16 bg-blue-50 px-4 md:px-4 lg:px-32 border-blue-50">
      {/* LEFT SIDE */}
      <div className="">
        <h1 className="font-bold text-4xl text-blue-950">
          Experience trading like never before
        </h1>
        <p className="text-neutral-700 mt-2 text-lg">
          Use quickfunds global optimized trading bot which is optimized for
          maximum profit
        </p>
      </div>
      <div className="mt-12 mb-16">
        <Link
          href="/"
          className=" rounded h-[50px] py-4 px-8 text-neutral-100 bg-blue-600 shadow-xl"
        >
          Get Started
        </Link>
      </div>
      {/* IMAGE SIDE */}

      <div className="h-[450px] md:h-[550px] lg:h-[400px] relative mt-6">
        <Image
          src="/images/banner-people.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-full cursor-pointer"
        />
      </div>
    </div>
  );
}
