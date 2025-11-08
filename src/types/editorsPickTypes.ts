type PostType = {
  $id: string;
  $sequence: number;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  summary: string;
  content: string;
  createdDate: string;
  coverimage: string;
  readtime: number;
  tags: string[];
  title: string;
  category: string;
  quote: string | null;
  userstable: string | null;
  section: string;
};

export type TopCardsType = {
  status: "error" | "success" | "pending";
  cardsData:
    | {
        newestRestaurant: PostType;
        newestFood: PostType;
      }
    | undefined;
};
