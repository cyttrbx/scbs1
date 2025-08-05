import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Info1() {
  return (
    <Wrapper>
      <div>
        <div className="">
          <h1 className="font-bold text-lg lg:text-5xl lg:max-w-[500px]  lg:leading-[55px] text-blue-600 leading-[45px]">
            Why Choose Us?
          </h1>
          
        </div>
        <div className="">
            <h1 className="font-bold text-3xl lg:text-5xl lg:max-w-[500px] text-blue-950">
            Trusted by over 12 thousand cryptocurrency investors.
          </h1>
          <h2 className="text-slate-600 mt-4 lg:text-xl  leading-[30px]">
            The financial market changes each new day. We take advantage of
            these changes everyday to make profits. So, let's help you achieve
            your financial goals
          </h2>
        </div>
        <div className="h-[650px] lg:hidden md:h-[550px] lg:h-[500px] relative mt-6 lg:mt-2">
          <Image
            src="/images/single-phone.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-full cursor-pointer"
          />
        </div>
        <div className="hidden lg:flex h-[450px] md:h-[550px] lg:h-[500px] relative mt-6 lg:mt-2 ">
          <Image
            src="/images/phones.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full h-full cursor-pointer"
          />
        </div>
      </div>
    </Wrapper>
  );
}
