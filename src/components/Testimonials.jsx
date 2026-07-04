function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Retailer, Lucknow",
      image: "fa-solid fa-user",
      review:
        "Great quality products and very competitive prices. Timely delivery every time.",
    },
    {
      name: "Neha Patel",
      role: "Hotel Owner, Ahmedabad",
      image: "fa-solid fa-user",
      review:
        "We get all our grocery in bulk from OM Kirana Store. Highly recommended!",
    },
    {
      name: "Sandeep Singh",
      role: "Distributor, Kanpur",
      image: "fa-solid fa-user",
      review:
        "Best wholesale supplier in our city. Good service and genuine products.",
    },
  ];

  return (
    <section className="py-4 sm:py-16 bg-light">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-12">

          <span className="w-16 h-[2px] bg-secondary"></span>

          <h2 className="text-xl text-nowrap sm:text-3xl font-bold text-primary-dark">
            What Our Customers Say
          </h2>

          <span className="w-16 h-[2px] bg-secondary"></span>

        </div>

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Testimonials */}

          <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">

            {reviews.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition duration-300 relative"
              >

                <i className="fa-solid fa-quote-left absolute top-5 left-5 text-secondary text-xl opacity-40"></i>

                <p className="text-gray-600 text-sm leading-7 mt-6">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">

                    <i className={`${item.image}  rounded-full bg-gray-200 flex items-center justify-center text-white text-xl`}></i>
                  </div>
                    
                  <div>

                    <h4 className="font-bold text-primarydark">
                      {item.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="lg:col-span-4">

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