import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Info2() {
  return (
    <div className="py-12 lg:pt-4 lg:pb-12 bg-neutral-50 px-5 md:px-8 lg:px-32 h-[500px]">
      <h2 className="text-center text-2xl font-bold text-[#0b163f]">
        Over 500 Companies Trusted Us
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="h-[70px] p-1 md:h-[250px] lg:h-[200px] relative bg-white flex items-center justify-center rounded-tr-none rounded-br-xl 
  rounded-tl-xl rounded-bl-none shadow-sm">
          <Image
            src="/images/huobi.svg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-[70%] cursor-pointer"
          />
        </div>
        <div className="h-[70px] p-3 md:h-[250px] lg:h-[200px] relative bg-white flex items-center justify-center rounded-tr-none rounded-br-xl 
  rounded-tl-xl rounded-bl-none shadow-sm">
          <Image
            src="/images/coinone.svg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-full cursor-pointer"
          />
        </div>
        <div className="h-[70px] p-3 md:h-[250px] lg:h-[200px] relative bg-white flex items-center justify-center rounded-tr-none rounded-br-xl 
  rounded-tl-xl rounded-bl-none shadow-sm">
          <Image
            src="/images/montex.svg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-full cursor-pointer"
          />
        </div>
        <div className="h-[70px] p-3 md:h-[250px] lg:h-[200px] relative bg-white flex items-center justify-center rounded-tr-none rounded-br-xl 
  rounded-tl-xl rounded-bl-none shadow-sm">
          <Image
            src="/images/the-blockchain-group.svg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
