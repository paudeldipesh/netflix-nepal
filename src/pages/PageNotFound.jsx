import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-2 md:gap-y-6">
        <p className="text-white text-2xl md:text-5xl">Page Not Found</p>

        <Link
          to="/"
          className="text-lg md:text-2xl text-red-500 hover:underline"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};
