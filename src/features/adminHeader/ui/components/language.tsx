import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { selectItems } from "@/constants/adminHeaderData";
import Image from "next/image";

const Language = () => {
  return (
    <Select>
      <SelectTrigger className="border-none focus:ring-0! shadow-none">
        <Image
          src="/flags/gb.png"
          width={24}
          height={24}
          alt="flag"
          className="rounded-full w-[24px] h-[24px] object-cover"
        />
      </SelectTrigger>

      <SelectContent
        sideOffset={15}
        align="end"
        className=" bg-white dark:bg-[#19202f] border-0 rounded-md px-1 shadow-none"
      >
        {selectItems.map((flag) => (
          <SelectItem
            key={flag.id}
            value={flag.id}
            className="flex items-center gap-4 my-2 cursor-pointer group hover:bg-[#0d6dfd21]"
          >
            <Image
              src={flag.icon}
              width={24}
              height={24}
              alt="flag"
              className="rounded-full w-[24px] h-[24px] object-cover "
            />

            <p className="group-hover:text-[#0d6efd]">{flag.title}</p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Language;
