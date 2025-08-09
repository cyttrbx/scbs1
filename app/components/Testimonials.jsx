import Image from "next/image";
import Wrapper from "./Wrapper";
//#0b163f
import { FaStar } from "react-icons/fa6";


export default function Testimonials() {
  return (
    <div className="py-8 lg:pt-4 lg:pb-12 bg-neutral-50 px-5 md:px-8 lg:px-32">
      <h2 className="text-center text-[25px] font-bold text-[#0b163f]">
        What our clients say
      </h2>
      <p className=" text-neutral-500 text-center lg:text-xl text-lg   leading-[30px]">
        Taking the spotlight away from us for a moment and shining it on our
        excited clients
      </p>

      <div className="mt-4">
        <div className="shadow-sm bg-white h-[160px] rounded-xl p-6">
          <div className="flex gap-4 items-center">
            <div className="h-[60px] w-[60px] md:h-[250px] lg:h-[200px] relative bg-white flex items-center justify-center shadow-sm rounded-full">
              <Image
                src="/images/woman1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover w-full h-full rounded-full cursor-pointer"
              />
            </div>
            <div>
              <p className="text-[#0b163f] font-semibold">Melissa Hopkins</p>
              <p className="text-neutral-500 text-sm">Sales associate</p>
            </div>
          </div>
          <p className="text-[17px] mt-2 text-neutral-700">I made enough money to pay off my debts!</p>
          <div className="flex items-center gap-2 mt-1">
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
            <FaStar className="text-yellow-400"/>
          </div>
        </div>
      </div>
    </div>
  );
}
