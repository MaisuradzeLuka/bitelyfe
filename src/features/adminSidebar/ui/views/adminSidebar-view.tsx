"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Links from "../components/links";

const SideBar = () => {
  const { open } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className={`border-gray-300 dark:border-gray-700 ${
        open ? "w-[256px]" : "!w-[60px]"
      }`}
    >
      <SidebarHeader className="border-b border-gray-300 dark:border-gray-700 h-[65px] bg-[#FFFFFF] dark:bg-[#19202F]">
        <Link href="/admin">
          <Image
            src={open ? "/vaxshami_logo4.png" : "/vaxshami_logo4_small.png"}
            alt="home logo"
            width={160}
            height={50}
            className={`hidden md:block ${
              open ? "w-[160px] " : "w-[40px]"
            } h-[50px] mx-auto `}
          />

          <Image
            src={"/vaxshami_logo4.png"}
            alt="home logo"
            width={160}
            height={50}
            className="md:hidden w-[160px] h-[50px] mx-auto "
          />
        </Link>
      </SidebarHeader>

      <SidebarContent className="dark:bg-[#19202F] py-2">
        <Links open={open} />
      </SidebarContent>

      {/* <SidebarFooter /> */}
    </Sidebar>
  );
};

export default SideBar;
