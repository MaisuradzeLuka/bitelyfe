import { BiSolidError } from "react-icons/bi";
const NewsError = () => {
  return (
    <div className="flex items-center gap-2 text-red-500">
      <BiSolidError /> <span> Oops! Something went wrong</span>
    </div>
  );
};

export default NewsError;
