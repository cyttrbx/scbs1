import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Info5() {
  return (
    <div className=" pb-10 py-4 lg:pt-4 lg:pb-12 bg-[#0b163f] px-5 md:px-8 lg:px-32">
      <h2 className="text-[25px] font-semibold text-neutral-100">
        Increase your returns
      </h2>
      <p className=" text-neutral-300 lg:text-xl text-lg   leading-[30px]">
        Make quick returns on your investments


      </p>

      {/* <Link
        href="/"
        className="text-blue-600 flex items-center mt-2 gap-2 font-semibold w-fit"
      >
        Start learning
        <FaArrowRightLong className=" text-blue-600" />
      </Link>
 */}
      <div className=" relative mt-3 rounded overflow-x-hidden">
              <Image
                src="/images/investment-returns.jpg"
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
