import { PostType } from "./postType";

export type MainCardProps = {
  category: string;
  date: string;
  title: string;
  summary: string;
  id: string;
};

export type HeroCardsType = {
  cards: PostType[];
};
