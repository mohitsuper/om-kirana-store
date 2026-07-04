function AboutHero() {
  
  const features = [
    "Best Wholesale Prices",
    "Bulk Availability",
    "Genuine Products",
    "Trusted Brands",
    "On-Time Delivery",
    "100% Customer Satisfaction",
  ];

  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Breadcrumb */}

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-5 sm:mb-10">
          <a href="/" className="hover:text-secondary duration-300">
            Home
          </a>

          <i className="fa-solid fa-angle-right text-xs"></i>

          <span className="text-secondary font-semibold">
            About Us
          </span>
        </div>

        {/* Hero */}

        <div className="grid lg:grid-cols-2 gap-7 sm:gap-14 items-center">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3 mb-3 sm:mb-6">

              <span className="w-12 h-[2px] bg-secondary"></span>

              <span className="uppercase tracking-[3px] text-secondary font-semibold text-sm">
                About Us
              </span>

            </div>

            <h1 className="text-2xl xl:text-4xl font-extrabold leading-tight text-primary-dark">

              <span className="text-secondary">
                OM
              </span>{" "}

              KIRANA STORE

            </h1>

            <h3 className="mt-3 sm:mt-6 text-lg sm:text-xl  font-bold text-dark">

              Trusted Wholesale Grocery Supplier

            </h3>

            <p className="mt-3 sm:mt-6 text-sm text-gray-600 sm:text-lg leading-7 sm:leading-8 max-w-xl">
              We supply premium quality grocery products in bulk to
              retailers, hotels, restaurants, caterers and distributors
              across India with competitive pricing and reliable delivery.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-8 mt-5 sm:mt-10">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="w-7 h-7 rounded-full bg-orange-100 text-secondary flex items-center justify-center flex-shrink-0">

                    <i className="fa-solid fa-check text-xs"></i>

                  </div>

                  <span className="text-xs sm:text-sm font-medium text-primary-dark">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            {/* Button */}

            <div className="mt-6 sm:mt-12">

              <a
                href="/products"
                className="text-sm inline-flex items-center gap-3 bg-primary-dark hover:bg-secondary duration-300 text-white py-3 px-8 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg"
              >
                Explore Products

                <i className="fa-solid fa-arrow-right"></i>

              </a>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            {/* Background Circle */}

            <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full bg-secondary/10 blur-2xl hidden sm:block"></div>

            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-primarydark/5 blur-3xl"></div>

            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

              <img
                src="/images/about/om-kirana-store.png"
                alt="OM Kirana Store"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;