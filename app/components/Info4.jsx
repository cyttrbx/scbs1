import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Info4() {
  return (
    <div className=" pb-10 mt-6 py-4 lg:pt-4 lg:pb-12 bg-neutral-50 px-5 md:px-8 lg:px-32 ">
      <h2 className="text-[25px] font-semibold text-[#0b163f]">
        Learn about Bitcoin
      </h2>
      <p className=" text-slate-900 lg:text-xl text-lg   leading-[30px]">
        From basics to advanced Bitcoin concepts — get investment-ready in under 21 minutes.


      </p>

      <Link
        href="/"
        className="text-blue-600 flex items-center mt-2 gap-2 font-semibold w-fit"
      >
        Start learning
        <FaLongArrowAltRight className=" text-blue-600" />
      </Link>

      <div className=" relative mt-3 rounded overflow-x-hidden">
              <Image
                src="/images/learn-bitcoin.jpg"
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
