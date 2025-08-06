import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
//#0b163f

export default function Info1() {
  return (
    <div className="py-8 bg-[#0b163f] px-4">
      <div className="">
        <h1 className="font-bold text-xl lg:text-5xl lg:max-w-[500px]  lg:leading-[55px] text-neutral-100 leading-[45px] text-center">
          Why Choose Us?
        </h1>
      </div>
      <div className="text-neutral-100">
        {/* <h1 className="font-bold text-3xl lg:text-5xl lg:max-w-[500px]">
          Trusted by over 12 thousand cryptocurrency investors.
        </h1> */}
        <h2 className=" text-neutral-300 lg:text-xl text-lg  leading-[30px] text-center">
          The financial market changes each new day. We take advantage of these
          changes everyday to make profits. So, let's help you achieve your
          financial goals
        </h2>
      </div>

      <div className="h-[350px] md:h-[550px] lg:h-[500px] relative mt-6 lg:mt-2">
        <Image
          src="/images/crypto-app-image.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-full cursor-pointer"
        />
      </div>
      <div className=" mt-8">
        <h1 className="text-neutral-100 text-xl font-semibold">FEATURES</h1>
        <p className="text-neutral-300 mt-2 text-lg">
          Our investment providing services focus on our clients' most critical
          isuues and opportunities: profitability, marketing, strategy,
          organization and corporate finance.
        </p>
        <p className="text-neutral-300 text-lg">
          We buy or sell hundreds of CFD assets including major, minor and
          exotic forex pairs, metals, energies, indices, cryptocurrencies and
          shares of the world's biggest companies.
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Link href="/" className="text-neutral-200 font-semibold">
          Learn More
        </Link>
        <FaArrowRightLong  className=" text-neutral-200"/>
      </div>
    </div>
  );
}
