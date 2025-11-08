"use client";

import { useGetTableContent } from "../../api";
import { DrinkType } from "@/types/drinkType";
import ErrorComponent from "@/components/shared/errorComponent";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Items = ({ title }: { title: string }) => {
  const { data, isLoading, isError } = useGetTableContent<DrinkType>(title);

  if (isLoading) return <div>Loading...</div>;
  if (!data || isError) return <ErrorComponent />;

  return (
    <div className="grid gap-y-[20px] mt-6 text-gray-300">
      {data.map((post) => (
        <div key={post.$id} className="grid grid-cols-4 gap-x-10 items-center">
          <p className="overflow-ellipsis">{post.title}</p>

          <Image
            src={post.coverimage}
            width={200}
            height={50}
            alt="post image"
            className="w-[120px] h-20 object-cover"
          />
          <p>{formatDate(post.$createdAt)}</p>

          <div className="flex items-center justify-end gap-2">
            <Link href="#" className="w-[16px] h-[16px]">
              <FaEdit className="text-yellow-500 text-lg w-4 h-4" />
            </Link>

            <Link href="#">
              <MdDeleteForever className="text-red-500 text-lg w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
