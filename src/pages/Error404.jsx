<<<<<<< HEAD
import { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "animate.css";

const Error404 = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="text-center lg:text-left">

          <h1
            className="wow animate__animated animate__fadeInDown text-8xl md:text-9xl font-black text-orange-500"
            data-wow-duration="1s"
          >
            404
          </h1>

          <h2
            className="wow animate__animated animate__fadeInUp text-4xl font-bold text-gray-800 mt-4"
            data-wow-delay="0.3s"
          >
            Oops! Page Not Found
          </h2>

          <p
            className="wow animate__animated animate__fadeInUp text-gray-600 mt-5 leading-8"
            data-wow-delay="0.5s"
          >
            The page you are looking for might have been removed,
            renamed or is temporarily unavailable.
          </p>

          <div
            className="wow animate__animated animate__fadeInUp mt-8"
            data-wow-delay="0.7s"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              <i className="fa-solid fa-house"></i>
              Back To Home
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div
            className="wow animate__animated animate__zoomIn relative"
            data-wow-duration="1.2s"
          >
            <div className="w-80 h-80 rounded-full bg-orange-100 flex items-center justify-center shadow-2xl">

              <i className="fa-solid fa-triangle-exclamation text-orange-500 text-[130px] animate-bounce"></i>

            </div>

            <div className="absolute -top-5 -left-5 bg-white shadow-xl rounded-full p-5 animate-pulse">
              <i className="fa-solid fa-magnifying-glass text-3xl text-orange-500"></i>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white shadow-xl rounded-full p-5 animate-pulse">
              <i className="fa-solid fa-circle-question text-3xl text-orange-500"></i>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

=======
import { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import "animate.css";

const Error404 = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="text-center lg:text-left">

          <h1
            className="wow animate__animated animate__fadeInDown text-8xl md:text-9xl font-black text-orange-500"
            data-wow-duration="1s"
          >
            404
          </h1>

          <h2
            className="wow animate__animated animate__fadeInUp text-4xl font-bold text-gray-800 mt-4"
            data-wow-delay="0.3s"
          >
            Oops! Page Not Found
          </h2>

          <p
            className="wow animate__animated animate__fadeInUp text-gray-600 mt-5 leading-8"
            data-wow-delay="0.5s"
          >
            The page you are looking for might have been removed,
            renamed or is temporarily unavailable.
          </p>

          <div
            className="wow animate__animated animate__fadeInUp mt-8"
            data-wow-delay="0.7s"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              <i className="fa-solid fa-house"></i>
              Back To Home
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div
            className="wow animate__animated animate__zoomIn relative"
            data-wow-duration="1.2s"
          >
            <div className="w-80 h-80 rounded-full bg-orange-100 flex items-center justify-center shadow-2xl">

              <i className="fa-solid fa-triangle-exclamation text-orange-500 text-[130px] animate-bounce"></i>

            </div>

            <div className="absolute -top-5 -left-5 bg-white shadow-xl rounded-full p-5 animate-pulse">
              <i className="fa-solid fa-magnifying-glass text-3xl text-orange-500"></i>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white shadow-xl rounded-full p-5 animate-pulse">
              <i className="fa-solid fa-circle-question text-3xl text-orange-500"></i>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

>>>>>>> 8bb1ce80fe79c61fd926da9267d632ab125e0cda
export default Error404;