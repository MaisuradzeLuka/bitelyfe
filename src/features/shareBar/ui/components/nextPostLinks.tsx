"use client";

import Link from "next/link";
import HoverTitle from "../../../../components/shared/hoverTitle";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGetNextPostInfo } from "../../api";
import ErrorComponent from "@/components/shared/errorComponent";

export default function NextPostLinks({
  createdAt,
  tableId,
}: {
  createdAt: string;
  tableId: string;
}) {
  const { data, isLoading, isError } = useGetNextPostInfo(createdAt, tableId);

  if (isLoading) return null;
  if (isError || !data) return <ErrorComponent />;

  const older = data[0];
  const newer = data[1];

  const linkByTable = tableId.replace("table", "");

  return (
    <div className="py-8 border-b md:pb-0 border-b-[#eeeeee] flex flex-wrap w-full mb-12">
      {newer && (
        <div className="mb-8 pb-8   border-b md:pb-0  border-b-[#eeeeee] text-left w-full md:border-none md:w-1/2 shrink-0">
          <Link
            href={`/${linkByTable}/${newer.$id}`}
            className="text-black flex flex-col hover:text-[#6d62ff]"
          >
            <div className="font-[700] mb-2 ">
              <FaChevronLeft className="inline text-[16px] mr-2 ml-[-4px]" />
              Newer
            </div>
            <HoverTitle
              text={newer.title}
              titleClassname="mt-[10px] text-[18px] font-[700] "
            />
          </Link>
        </div>
      )}
      {older && (
        <div className="text-right w-full ml-auto pb-2 shrink-0 md:w-1/2">
          <Link
            href={`/${linkByTable}/${older.$id}`}
            className="text-black flex flex-col hover:text-[#6d62ff]"
          >
            <div className="font-[700] mb-[6px] ">
              Older
              <FaChevronRight className="inline text-[16px]  ml-2" />
            </div>
            <HoverTitle
              text={older.title}
              titleClassname="mt-[10px] text-[18px] font-[700] "
            />
          </Link>
        </div>
      )}
    </div>
  );
}
