import Image from "next/image";

const SecondaryPosts = ({
  images,
}: {
  images: { image: string; id: string }[];
}) => {
  return (
    <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
      <div className="h-full max-h-[600px] flex flex-col gap-4 rounded-sm bg-[#03071E] px-6 py-4 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#4a5568_#1a202c] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-500 [&::-webkit-scrollbar-thumb]:transition-colors">
        {images.slice(1).map((item) => (
          <Image
            width={300}
            height={200}
            key={item.id}
            src={item.image}
            alt="restaurant image"
            className="object-cover rounded-sm w-full aspect-3/2"
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryPosts;
