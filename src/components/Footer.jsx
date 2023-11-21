import { Address } from "./Address";

export const Footer = () => {
  return (
    <footer className="text-white my-16 max-w-[80vw] md:max-w-[60vw] mx-auto">
      <p className="py-4 underline text-gray-400">
        <a href="#">Questions? Contact us.</a>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 md:gap-x-8 mb-6 underline">
        <Address
          first="FAQ"
          second="Investor Relations"
          third="Privacy"
          fourth="Speed Test"
        />
        <Address
          first="Help Center"
          second="Jobs"
          third="Cookie Preferences"
          fourth="Legal Notices"
        />
        <Address
          first="Account"
          second="Ways to Watch"
          third="Corporate Information"
          fourth="Only on Netflix"
        />
        <Address
          first="Media Center"
          second="Terms of Use"
          third="Contact Us"
        />
      </div>

      <button className="btn bg-transparent border pt-4 inline-block">
        # English
      </button>

      <p className="py-4">
        <a
          className="hover:text-red-500 hover:underline"
          href="https://www.facebook.com/dipeshpaudelofficial"
          target="_blank"
        >
          Dipesh Paudel Facebook
        </a>
      </p>
    </footer>
  );
};
