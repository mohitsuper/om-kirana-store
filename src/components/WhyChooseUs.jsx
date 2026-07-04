function WhyChooseUs() {
  const features = [
    {
      icon: "fa-solid fa-handshake",
      title: "Wholesale Prices",
      desc: "Best prices for bulk orders every day.",
    },
    {
      icon: "fa-solid fa-award",
      title: "Quality Assured",
      desc: "100% quality products from trusted brands.",
    },
    {
      icon: "fa-solid fa-truck-fast",
      title: "Fast Delivery",
      desc: "Timely delivery across your city.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Trusted by Businesses",
      desc: "Serving thousands of happy customers.",
    },
  ];

  const stats = [
    {
      icon: "fa-solid fa-users",
      number: "5000+",
      text: "Retail Customers",
    },
    {
      icon: "fa-solid fa-tags",
      number: "250+",
      text: "Brands Available",
    },
    {
      icon: "fa-solid fa-box",
      number: "10000+",
      text: "Orders Delivered",
    },
    {
      icon: "fa-solid fa-location-dot",
      number: "50+",
      text: "Cities Covered",
    },
  ];

  return (
    <section className=" bg-gradient-to-r from-gray via-[#FCFCFC] to-[#FFF3E8] px-4  py-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-center">

          {/* Left */}

          <div className="lg:col-span-6 bg-white rounded-3xl shadow-md p-4 sm:p-8">

            <div className="flex items-center gap-3 mb-8">

              <h2 className="text-xl text-nowrap sm:text-3xl font-bold text-primarydark">
                Why Choose Us?
              </h2>

              <span className="w-12 h-1 bg-secondary rounded-full"></span>

            </div>

            <div className="grid grid-cols-2 gap-6">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 flex-col sm:flex-row"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primarydark text-lg">
                    <i className={item.icon}></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primarydark text-sm">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-500 leading-5 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-6 bg-primary-dark rounded-3xl shadow-xl overflow-hidden">

            <div className="grid grid-cols-2 md:grid-cols-4">

              {stats.map((item, index) => (

                <div
                  key={index}
                  className={`py-4 sm:py-10 text-center ${
                    index !== stats.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >

                  <div className="text-secondary text-2xl sm:text-4xl sm:mb-5">

                    <i className={item.icon}></i>

                  </div>

                  <h3 className="text-xl sm:text-4xl font-bold text-white">
                    {item.number}
                  </h3>

                  <p className="text-gray-300 mt-2 text-sm">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;