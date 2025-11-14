import { Models } from "node-appwrite";

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

type Category =
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

export type DishesType = {
  title: string;
  summary: string;
  content: string;
  readtime: number;
  coverimage: string;
  tags?: string[];
  likescount: number;
  vegan: boolean;
  streetfood: boolean;
  glutenfree: boolean;
  sugarfree: boolean;
  temperature: Temperature;
  region: DishRegion;
  type: Type;
  category: Category;
  mainingredient: MainIngredient;
};

export type GeneralHeroSectionTypes = Omit<Models.Document, "data"> & {
  title: string;
  coverimage: string;
  summary: string;
  category: string;
  likescount: number;
};

type DrinksType = {
  title: string;
  coverimage: string;
  tags: string[];
  readtime: number;
  content: string;
  summary: string;
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

export type DrinksTable = Omit<Models.Document, "data"> & DrinksType;
export type DishesTable = Omit<Models.Document, "data"> & DishesType;
