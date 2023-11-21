import video from "../assets/videos/video.mp4";
import { Header, Faqs, Footer } from "../components";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  useTitle("Home");

  return (
    <>
      <Header />

      <section className="text-white py-14 flex flex-col lg:flex-row text-center items-center max-w-[70vw] m-auto">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Enjoy on your TV</h2>
          <h5 className="text-xl md:text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h5>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <div className="relative flex">
            <img
              className="relative z-10"
              src="/assets/images/display.png"
              alt="tv icon"
            />
            <video
              className="absolute w-full"
              src={video}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </section>

      <div className="h-2 bg-gray-600"></div>

      <section className="text-white py-14 flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 text-center items-center max-w-[70vw] m-auto">
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              className="relative z-10"
              src="/assets/images/girl.jpg"
              alt="tv icon"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Download your shows to watch offline
          </h2>

          <h5 className="text-xl md:text-2xl">
            Save your favorites easily and always have something to watch.
          </h5>
        </div>
      </section>

      <div className="h-2 bg-gray-600"></div>

      <section className="text-white py-14 flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 text-center items-center">
        <div className="flex max-w-[70vw] md:max-w-[50vw] m-auto flex-col gap-y-3 lg:gap-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Watch everywhere</h2>

          <h5 className="text-xl md:text-2xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h5>
        </div>
      </section>

      <div className="h-2 bg-gray-600"></div>

      <section className="text-white py-20 flex flex-col lg:flex-row gap-y-16 lg:gap-y-0 text-center items-center max-w-[70vw] m-auto">
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              className="relative z-10"
              src="/assets/images/kids.png"
              alt="tv icon"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Create profiles for kids
          </h2>

          <h5 className="text-xl md:text-2xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h5>
        </div>
      </section>

      <div className="h-2 bg-gray-600"></div>

      <Faqs />

      <div className="h-2 bg-gray-600"></div>

      <Footer />
    </>
  );
};
