import React from "react";

const ContactMap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-[3px]">
            Visit Us
          </span>

          <h2 className="text-4xl font-bold text-[#16325B] mt-3">
            Get In Touch With Us
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Have any questions about our products or wholesale orders?
            Visit our office or contact us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <div className="space-y-6">

            {/* Address */}

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-5 hover:shadow-xl duration-300">

              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#16325B]">
                  Office Address
                </h3>

                <p className="text-gray-500 mt-2 leading-7">
                  123 Wholesale Market,
                  <br />
                  Jaipur, Rajasthan - 302001
                </p>
              </div>

            </div>

            {/* Phone */}

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-5 hover:shadow-xl duration-300">

              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#16325B]">
                  Phone Number
                </h3>

                <p className="text-gray-500 mt-2">
                  +91 98765 43210
                </p>

                <p className="text-gray-500">
                  +91 98765 43211
                </p>
              </div>

            </div>

            {/* Email */}

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-5 hover:shadow-xl duration-300">

              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-2xl">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#16325B]">
                  Email Address
                </h3>

                <p className="text-gray-500 mt-2">
                  info@grocerymart.com
                </p>

                <p className="text-gray-500">
                  support@grocerymart.com
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl overflow-hidden shadow-xl h-[550px]">

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.168745217146!2d76.33113159999999!3d26.8981392!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d8dc25240216d%3A0xa433fb117d679385!2sOm%20Kirana%20Store!5e0!3m2!1sen!2sin!4v1783143663599!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Om Kirana Store Location"
></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;