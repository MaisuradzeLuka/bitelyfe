import { Models } from "node-appwrite";

type GeneralTableType = {
  title: string;
  summary: string;
  content: string;
  readtime: number;
  coverimage: string;
  tags?: string[];
  likescount: number;
};

type Temperature = "hot" | "cold" | "roomtemperature";

export type DishRegion =
  | "asian"
  | "europien"
  | "african"
  | "american"
  | "french"
  | "japanese"
  | "georgian"
  | "mexican"
  | "chinese"
  | "indian"
  | "italian";

type Type = "breakfast" | "lunch" | "dinner";

type DishCategory =
  | "snack"
  | "smoked"
  | "baked"
  | "fried"
  | "boiled"
  | "dessert"
  | "salad"
  | "soup";

type MainIngredient =
  | "meat"
  | "fish"
  | "chicken"
  | "vegetables"
  | "fruits"
  | "grains"
  | "dairy"
  | "eggs"
  | "legumes";

export type DishesType = GeneralTableType & {
  vegan: boolean;
  streetfood: boolean;
  glutenfree: boolean;
  sugarfree: boolean;
  temperature: Temperature;
  region: DishRegion;
  type: Type;
  category: DishCategory;
  mainingredient: MainIngredient;
};

export type GeneralHeroSectionTypes = Omit<Models.Document, "data"> & {
  title: string;
  coverimage: string;
  summary: string;
  category: string;
  likescount: number;
};

type DrinksType = GeneralTableType & {
  type: "alcoholic" | "non-alcoholic";
  category:
    | "water"
    | "juice"
    | "mineral"
    | "cocktail"
    | "tea"
    | "coffee"
    | "wine"
    | "vodka"
    | "viski"
    | "champagne";
};

type ProductsType = GeneralTableType & {
  glutenfree: boolean;
  sugarfree: boolean;
  vegan: boolean;
  category:
    | "vegetable"
    | "fruit"
    | "meat"
    | "fish"
    | "spice"
    | "dairy"
    | "grain"
    | "oil"
    | "other";
};

export type DrinksTable = Omit<Models.Document, "data"> & DrinksType;
export type DishesTable = Omit<Models.Document, "data"> & DishesType;
export type ProductsTable = Omit<Models.Document, "data"> & ProductsType;
