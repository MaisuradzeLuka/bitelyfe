import { AdvertTypes } from "@/types/AdvertTypes";
import Image from "next/image";
import Link from "next/link";

const AdvertComponent = ({ image, link, text, classname }: AdvertTypes) => {
  return (
    <div>
      <p className="text-center text-sm mb-2 uppercase">Sponsored</p>

      <Link
        href={link}
        target="_blank"
        className={`max-w-[300px] h-[500px] flex flex-col items-center justify-center text-center gap-12 bg-[#FFE1DF] rounded-4xl border px-6 ${classname}`}
      >
        <Image src={image} width={100} height={50} alt="sponsore image" />

        <p className="text-black font-medium">{text}</p>
      </Link>
    </div>
  );
};

export default AdvertComponent;
