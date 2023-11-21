import { Link } from "react-router-dom";
import hero from "/assets/images/hero.jpg";
import logo from "../assets/images/logo.svg";
import { FormRow } from "./FormRow";

export const Header = () => {
  return (
    <header>
      <div
        className="h-[80vh] relative bg-center bg-cover"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <nav className="max-w-[80vw] m-auto h-20 flex items-center justify-between">
          <div className="cursor-pointer">
            <img
              className="h-8 md:h-10 z-10 relative"
              src={logo}
              alt="netflix logo"
            />
          </div>

          <div className="text-white h-10 z-10 relative flex justify-center items-center gap-x-2">
            <button className="btn hidden sm:block bg-transparent border">
              # English
            </button>

            <Link to="/login" className="btn bg-red-600">
              Sign In
            </Link>
          </div>
        </nav>

        <div className="h-[80vh] w-full bg-black opacity-60 absolute top-0"></div>

        <div
          className="text-white z-10 relative text-center flex flex-col justify-center px-4 md:px-7 gap-y-1 md:gap-y-2"
          style={{ height: "calc(80vh - 5rem)" }}
        >
          <div className="flex flex-col justify-center gap-y-2 md:gap-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Unlimited movies, TV shows, and more
            </h2>

            <h4 className="text-2xl md:text-3xl">
              Watch anywhere. Cancel anytime.
            </h4>
          </div>

          <FormRow />
        </div>
      </div>

      <div className="h-2 bg-gray-600"></div>
    </header>
  );
};
