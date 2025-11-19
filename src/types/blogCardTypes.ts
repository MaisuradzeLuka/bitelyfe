import { DishesTable, DrinksTable, ProductsTable } from "./tablesTypes";

export type BlogCardProps = {
  blog: DrinksTable | DishesTable | ProductsTable;
  hoverTextColor?: string;
  tagBg?: string;
  variant: "reverse" | "horizontal" | "vertical" | "blog";
  className?: string;
  titleClassName?: string;
  imageAspect?: string;
  link: string;
  categoryLink: string;
};

export type BlogCardVariantStyles = {
  wrapper: string;
  imageWrapper: string;
  image: string;
  textWrapper: string;
  categoryBg: string;
  title: string;
  description: string;
};
