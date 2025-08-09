import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="lg:grid lg:grid-cols-2 items-center py-12 lg:pt-4 lg:pb-12 bg-neutral-50 px-5 md:px-8 lg:px-32 ">
      <div className="">
        <h1 className="font-bold text-4xl lg:text-5xl lg:max-w-[500px]  lg:leading-[55px] text-blue-950 leading-[45px]">
          Experience trading like never before
        </h1>
        <p className="text-slate-600 mt-4 text-lg lg:text-xl  leading-[30px]">
          Invest in Bitcoin with confidence and use quickfunds global optimized
          trading bot which is optimized for maximum profit.
        </p>
      </div>
      <div className="mt-6 mb-16 flex gap-6 items-center">
        <div>
          <Link
            href="/"
            className=" rounded h-[50px] py-4 px-8 text-neutral-50 font-semibold bg-blue-600 hover:bg-blue-600 hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
        <div className="flex gap-4 items-center text-blue-600 cursor-pointer">
          <Link
            href="/"
            className=" flex justify-center items-center rounded py-3 px-8 text-blue-600 font-semibold bg-neutral-50 border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-neutral-50 transition-all duration-100"
          >
            Sign In
          </Link>
        </div>
      </div>
      {/* LEFT SIDE */}
      {/* IMAGE SIDE */}

      <div className="h-[430px] md:h-[550px] lg:h-[500px] relative mt-6 lg:mt-2">
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
