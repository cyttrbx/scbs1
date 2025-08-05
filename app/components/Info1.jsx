import Image from "next/image";
import Wrapper from "./Wrapper";
//#0b163f

export default function Info1() {
  return (
    <div className="py-2 bg-[#0b163f] px-4">
      <div className="">
        <h1 className="font-bold text-xl lg:text-5xl lg:max-w-[500px]  lg:leading-[55px] text-neutral-100 leading-[45px]">
          Why Choose Us?
        </h1>
      </div>
      <div className="text-neutral-100">
        {/* <h1 className="font-bold text-3xl lg:text-5xl lg:max-w-[500px]">
          Trusted by over 12 thousand cryptocurrency investors.
        </h1> */}
        <h2 className=" text-neutral-300 lg:text-xl text-lg  leading-[30px]">
          The financial market changes each new day. We take advantage of these
          changes everyday to make profits. So, let's help you achieve your
          financial goals
        </h2>
      </div>
      <div className="h-[650px] md:h-[550px] lg:h-[500px] relative mt-6 lg:mt-2">
        <Image
          src="/images/crypto-app-image.png"
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
