interface props {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: props) {
  return (
    <div
      className={`px-4 sm:max-w-[510px] sm:px-0 md:max-w-[690px] lg:max-w-[930px] xl:max-w-[1110px] 2xl:max-w-[1250px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
