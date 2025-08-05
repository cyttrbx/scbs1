import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";


export default function Banner() {
  return (
    <div className="lg:grid lg:grid-cols-2 items-center py-12 lg:pt-4 lg:pb-12 bg-neutral-50 px-4 md:px-4 lg:px-32 ">
      <div>
        <div className="">
          <h1 className="font-bold text-4xl lg:text-5xl lg:max-w-[500px]  lg:leading-[55px] text-blue-950 leading-[45px]">
            Experience trading like never before
          </h1>
          <p className="text-slate-600 mt-4 text-lg lg:text-xl  leading-[30px]">
            Use quickfunds global optimized trading bot which is optimized for
            maximum profit.
          </p>
        </div>
        <div className="mt-12 mb-16 flex gap-10 items-center">
          <div>
            <Link
              href="/"
              className=" rounded h-[50px] py-4 px-8 text-neutral-50 font-semibold bg-blue-600 shadow-xl"
            >
              Get Started
            </Link>
          </div>
          {/* <div className="flex gap-4 items-center text-blue-500 cursor-pointer">
            <div className="w-[45px] h-[45px] font-semibold border-2 border-blue-500 rounded-full flex justify-center items-center">
                <FaPlay className="bg-blue-500"/>
            </div>
            <div className="font-semibold">How it works</div>
          </div> */}
        </div>
      </div>
      {/* LEFT SIDE */}
      {/* IMAGE SIDE */}

      <div className="h-[450px] md:h-[550px] lg:h-[500px] relative mt-6 lg:mt-2">
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
