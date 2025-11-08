interface props {
  text: string;
  classname?: string;
  titleClassname?: string;
  onClick?: () => void;
}

export default function HoverTitle({
  text,
  classname,
  titleClassname,
  onClick,
}: props) {
  return (
    <div
      onClick={onClick}
      key={text}
      className={`relative inline-block  ${classname} `}
    >
      <h3
        className={`inline bg-gradient-to-r from-current to-current bg-no-repeat
         [background-position:0%_100%] [background-size:0%_2px]
         hover:[background-size:100%_2px]
         transition-[background-size] pb-[2px] duration-500 ease-in-out ${titleClassname}`}
      >
        {text}
      </h3>
    </div>
  );
}
