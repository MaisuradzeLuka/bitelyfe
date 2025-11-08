import { AdvertTypes } from "@/types/AdvertTypes";
import Image from "next/image";
import Link from "next/link";

const Advert = ({ image, link, text, classname }: AdvertTypes) => {
  return (
    <div className="mx-auto mt-18 ">
      <p className="text-center text-sm mb-2 uppercase">Advertisement</p>

      <Link
        href={link}
        target="_blank"
        className={`w-full max-w-[850px] aspect-[9.5/1] bg-[#FFE1DF] flex items-center justify-center mx-auto ${classname}`}
      >
        <Image
          src={image}
          width={100}
          height={50}
          alt="sponsore image"
          className=" h-[30px] sm:h-[60px] md:h-[75px] lg:h-[90px] object-cover"
        />
        {text && <p className="text-black font-medium">{text}</p>}
      </Link>
    </div>
  );
};

export default Advert;
