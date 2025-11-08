export type SecondaryCardProps = {
  image: string;
  title: string;
  date: string;
  theme: "light" | "dark";
  flexReverse: boolean;
  width?: string;
  height?: string;
  styles?: string;
  titleClassname?: string;
  link: string;
};
