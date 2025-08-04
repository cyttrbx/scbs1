import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex justify-between">
      {/* LEFT SIDE */}
      <div></div>
      {/* IMAGE SIDE */}
      <Image
        src="/images/banner-people.png"
        alt="My image"
        width={500}
        height={500}
      />
    </div>
  );
}
