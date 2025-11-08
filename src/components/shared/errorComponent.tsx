import { BiSolidError } from "react-icons/bi";

interface ErrorComponentProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorComponent = ({
  message = "Please try again later",
  onRetry,
  className = "",
}: ErrorComponentProps) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center p-8 my-8 mx-auto text-center bg-red-50 ${className}`}
    >
      <BiSolidError className="text-red-500 text-4xl mb-4" />

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Oops! Something went wrong
      </h3>

      <p className="text-gray-600 mb-6 max-w-md">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;
