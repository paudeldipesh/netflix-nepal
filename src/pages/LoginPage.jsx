import { Link } from "react-router-dom";
import hero from "/assets/images/hero.jpg";
import logo from "../assets/images/logo.svg";
import { useTitle } from "../hooks/useTitle";

export const LoginPage = () => {
  useTitle("Login");

  return (
    <div>
      <div
        className="h-screen relative bg-center bg-cover"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <nav className="max-w-[80vw] m-auto h-20 flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <img
              className="h-8 md:h-10 z-10 relative"
              src={logo}
              alt="netflix logo"
            />
          </Link>
        </nav>

        <div className="h-screen w-full bg-black opacity-60 absolute top-0"></div>

        <div
          className="text-white flex flex-col justify-center px-4 md:px-7 gap-y-1 md:gap-y-2"
          style={{ height: "calc(100vh - 5rem)" }}
        >
          <div className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] h-[70vh] rounded-md bg-black mx-auto">
            <div className="z-20 px-8 md:px-24 py-12 relative flex flex-col gap-y-6">
              <h2 className="text-xl md:text-3xl font-bold">Sign In</h2>

              <input
                type="text"
                className="text-white bg-transparent border py-3 px-2 rounded-md"
                placeholder="Email or phone number"
                readOnly
              />

              <input
                type="password"
                className="text-white bg-transparent border py-3 px-2 rounded-md"
                placeholder="Password"
                readOnly
              />

              <button className="btn h-12 bg-red-600">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
