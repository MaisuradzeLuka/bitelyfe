import Image from "next/image";

const AdvertisementBanner = ({
  image,
  position,
}: {
  image: string | null;
  position: "sticky" | "auto";
}) => {
  return (
    <div className={`${position} top-3 w-full max-w-[290px] mx-auto my-15 `}>
      <h4 className="w-min text-[10px] tracking-widest mb-1 mx-auto uppercase  ">
        advertisement
      </h4>
      <div className=" h-[580px] bg-[#FFE1DF] border border-gray-600 flex justify-center items-center ">
        <Image
          src={image || "/ad_placeholder.png"}
          width={290}
          height={500}
          alt="ad image"
        />
      </div>
    </div>
  );
};

export default AdvertisementBanner;
