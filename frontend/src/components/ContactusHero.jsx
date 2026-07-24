import React from "react";

const ContactusHero = () => {
  return (
    <section className="relative h-[280px] md:h-[300px] lg:h-[360px] overflow-hidden bg-gradient-to-r from-white via-orange-50 to-orange-100 flex items-center">
      {/* Background Blur */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-orange-200/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="relative z-10">

            <div className="flex items-center gap-3 mb-2 sm:mb-4">
              <span className="w-10 h-[2px] bg-orange-500"></span>

              <span className="uppercase tracking-[3px] text-sm font-semibold text-orange-500">
                Get In Touch
              </span>

              <span className="w-10 h-[2px] bg-orange-500"></span>
            </div>

            <h1 className="text-2xl xl:text-4xl font-extrabold leading-tight text-primary-darktext-4xl md:text-5xl font-bold text-[#1E3A5F] leading-tight">
              Contact Us
            </h1>

            <p className="mt-3 sm:mt-6 text-sm text-gray-600 sm:text-lg leading-7 sm:leading-8 max-w-xl">
              We'd love to hear from you. Whether you have questions about our
              wholesale grocery products, pricing, bulk orders, or delivery,
              our team is here to help. Get in touch with us today and we'll
              respond as soon as possible.
            </p>

            

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mt-3  sm:mt-8 text-sm">

              <span className="text-gray-500 hover:text-orange-500 cursor-pointer transition">
                Home
              </span>

              <i className="fa-solid fa-angle-right text-xs text-gray-400"></i>

              <span className="font-semibold text-orange-500">
                Contact Us
              </span>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative hidden lg:flex justify-end items-center">

            {/* <div className="absolute w-[340px] h-[340px] rounded-full bg-orange-200/50"></div> */}

            <div className="relative z-10 w-[300px] h-[300px] rounded-full bg-white shadow-2xl flex items-center justify-center">

              <i className="fa-solid fa-headset text-[120px] text-orange-500"></i>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactusHero;