import { DatabasePost } from "./blogCardTypes";

export type DefaultPostType = DatabasePost & {
  id: number;
  title: string;
  category: string;
  created_at: string;
  image: string;
  description: string;
};

export type PostFilters = {
  category?: string;
  title?: string;
  rating?: string | number;
  createdDate?: string;
  limit?: number;
  id?: string;
  [key: string]: string | number | undefined;
};

export type PostData = {
  $id: string;
  title: string;
  description: string;
  rating: number;
  createdDate: string;
  category: string;
};
