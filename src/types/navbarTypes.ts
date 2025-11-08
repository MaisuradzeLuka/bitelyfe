export type NavItemsType = {
  id: string;
  title: string;
  href: string;
  children?: NavItemsType[];
};

export type SimpleSubmenuItem = {
  id: string;
  title: string;
  href: string;
};

export type SubmenuProps = {
  id: string;
  title: string;
  children?: SimpleSubmenuItem[];
};
