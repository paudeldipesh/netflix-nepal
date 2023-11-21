export const FormRow = () => {
  return (
    <div className="flex flex-col mx-6 md:mx-4 gap-y-4 mt-3">
      <h5 className="text-xl px-4 text-center md:text-2xl">
        Ready to watch? Enter your email to create or restart your membership.
      </h5>

      <div className="flex flex-col gap-3 my-4 sm:my-0 sm:gap-y-0 sm:flex-row justify-center h-12 gap-x-2">
        <input
          className="text-white bg-transparent border py-3 px-2 rounded-md"
          type="email"
          placeholder="Email address"
          readOnly
        />

        <button className="btn bg-red-600">Get Started &gt;</button>
      </div>
    </div>
  );
};
