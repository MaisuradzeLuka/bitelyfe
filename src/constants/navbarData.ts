import { NavItemsType } from "@/types/navbarTypes";

export const navItems: NavItemsType[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "zita",
    title: "Zita & Gita",
    href: "/",
  },

  {
    id: "dishes",
    title: "Dishes",
    href: "/blog/category/dish",
  },
  {
    id: "products",
    title: "Products",
    href: "/blog/category/product",
  },
  {
    id: "drinks",
    title: "Drinks",
    href: "/blog/category/drinks",
  },
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
  },
  // {
  //   id: "posts",
  //   title: "Posts",
  //   children: [
  //     {
  //       id: "default",
  //       title: "Default",
  //       href: "/blog/68e6ed1600343df0cfdf",
  //     },
  //     {
  //       id: "heroImage",
  //       title: "Hero Image",
  //       href: "/heroPage/68e7934a0009be12b61c",
  //     },
  //   ],
  // },

  // {
  //   id: "pages",
  //   title: "Pages",
  //   children: [
  //     { id: "about", title: "About us", href: "/about" },
  //     { id: "team", title: "Meet our team", href: "/team" },
  //     { id: "faq", title: "FAQs", href: "/faqs" },
  //     { id: "404", title: "404", href: "/404" },
  //   ],
  // },
];
