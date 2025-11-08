const SectionTitle = ({
  title,
  styles,
}: {
  title: string;
  styles?: string;
}) => {
  return (
    <div className={`flex items-end justify-start mb-4 ${styles}`}>
      <h3 className="text-[22px] sm:text-2xl font-bold">{title}</h3>
      <div className="ml-2 mb-[6px] h-[3px] w-4 -skew-x-[45deg] bg-[#6D62FF]" />
    </div>
  );
};

export default SectionTitle;
