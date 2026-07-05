import { useEffect } from "react";

function Testimonials() {
  useEffect(() => {
  if (
    !document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    )
  ) {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }
}, []);
  return (
    <section className="py-4 sm:py-16 bg-light overflow-hidden">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        {/* <div className="flex items-center justify-center gap-4 mb-6 sm:mb-12">

          <span className="w-16 h-[2px] bg-secondary"></span>

          <h2 className="text-xl text-nowrap sm:text-3xl font-bold text-primary-dark">
            What Our Customers Say
          </h2>

          <span className="w-16 h-[2px] bg-secondary"></span>

        </div> */}

        <div className="flex md:flex-row flex-col gap-6">

          {/* Testimonials */}
          <div className="basis-[60%]">
            <div
              className="elfsight-app-20713515-cff9-42be-99ed-408d86c5de6e"
              data-elfsight-app-lazy
            ></div>
          </div>


          {/* CTA */}

          <div className="basis-[40%]">

            <div className="rounded-2xl bg-gradient-to-br from-secondary to-accent text-white p-4 sm:p-8 h-full flex flex-col justify-center">

              <h3 className="text-lg sm:text-3xl font-bold leading-tight">

                Need Bulk Grocery
                for Your Business?

              </h3>

              <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-orange-100">

                Get the best wholesale prices.
                <br />
                Contact us today!

              </p>

              <div className="flex gap-3 mt-4 sm:mt-8">


                <a
                  href="https://wa.me/916378494265"
                  className="text-sm w-fit sm:w-full px-8 bg-green-500 hover:bg-green-600 rounded-full py-3 flex justify-center items-center gap-2 font-semibold duration-300"
                >

                  <i className="fa-brands fa-whatsapp"></i>

                  WhatsApp

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;