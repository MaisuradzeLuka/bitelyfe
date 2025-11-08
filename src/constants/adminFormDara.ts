export type FormFieldDef = {
  name: string;
  type: string;
  id: string;
  options?: { id: string; name: string }[];
  required: boolean;
};

export const formData: Record<string, FormFieldDef[]> = {
  drinsktable: [
    { name: "Title", type: "text", id: "title", required: true },
    { name: "Summary", type: "textarea", id: "summary", required: true },
    { name: "Content", type: "textarea", id: "content", required: true },
    { name: "Tags", type: "text", id: "tags", required: false },
    { name: "Cover Image", type: "file", id: "coverimage", required: true },
    { name: "Read Time", type: "text", id: "readtime", required: true },
    {
      name: "Temperature",
      type: "select",
      id: "temperature",
      options: [
        { id: "cold", name: "Cold" },
        { id: "roomtemperature", name: "Room Temperature" },
        { id: "hot", name: "Hot" },
      ],
      required: true,
    },
    {
      name: "Type",
      type: "select",
      id: "type",
      required: true,
      options: [
        { id: "alcohlic", name: "Alcoholic" },
        { id: "nonalcoholic", name: "Non-alcoholic" },
      ],
    },
    {
      name: "Category",
      type: "select",
      id: "category",
      required: true,
      options: [
        { id: "coffee", name: "Coffee" },
        { id: "wine", name: "Wine" },
        { id: "beer", name: "Beer" },
        { id: "juice", name: "Juice" },
        { id: "mineral", name: "Mineral" },
        { id: "cocktail", name: "Cocktail" },
        { id: "vodka", name: "Vodka" },
        { id: "viski", name: "Viski" },
        { id: "champagne", name: "Champagne" },
        { id: "tea", name: "Tea" },
      ],
    },
    {
      name: "Sugar Free",
      type: "boolean",
      id: "sugarfree",
      required: true,
    },
  ],
};
