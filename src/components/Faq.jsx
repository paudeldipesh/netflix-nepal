export const Faq = ({ question }) => {
  return (
    <div className="flex items-center transition-all duration-600 mx-auto my-2 p-4 md:my-4 md:p-7 text-lg sm:text-xl md:text-2xl  bg-gray-900 hover:bg-gray-600 justify-between max-w-[80vw] md:max-w-[70vw]">
      <span>{question}</span>
      <div className="cursor-pointer">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Plus"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};
