export type DrinkType = {
  title: string;
  "sugar-free": boolean;
  temperature: string;
  type: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
  coverimage: string;
  readtime: number;
  likescount: number;

  $id: string;
  $sequence: number;
  $createdAt: string;
  $updatedAt: string;
  $permissions: any[];
  $databaseId: string;
  $collectionId: string;
};
