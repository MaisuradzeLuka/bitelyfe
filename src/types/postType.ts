export type PostType = {
  $id: string;
  $createdDate: string;
  likes?: string[];
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
  tableId: string;
};
