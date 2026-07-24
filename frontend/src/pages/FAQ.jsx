import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
const faqData = [
  {
    question: "How can I place a wholesale order?",
    answer:
      "Simply browse our products and contact us through WhatsApp, Phone or the Contact Form. We will provide the best wholesale pricing.",
  },
  {
    question: "Do you deliver across Rajasthan?",
    answer:
      "Yes. We provide fast and reliable delivery across Jaipur, Dausa and many other cities in Rajasthan.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Bank Transfer, Cash and other secure payment methods.",
  },
  {
    question: "Can I order products in bulk?",
    answer:
      "Yes. We specialize in bulk grocery and agarbatti wholesale supplies for retailers and distributors.",
  },
  {
    question: "How do I check product availability?",
    answer:
      "Contact us directly on WhatsApp or call us to confirm stock availability before placing a bulk order.",
  },
  {
    question: "Do you provide GST invoices?",
    answer:
      "Yes, GST invoices are available for eligible wholesale purchases.",
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>FAQ | Om Kirana Store</title>

        <meta
          name="description"
          content="Frequently Asked Questions about wholesale grocery products, delivery, payment and GST."
        />
        <meta
          property="og:title"
          content="Om Kirana Store"
        />

        <meta
          property="og:description"
          content="Wholesale Grocery Supplier in Rajasthan"
        />

        <meta
          property="og:image"
          content="https://om-kirana-store.vercel.app/images/banner.jpg"
        />

        <meta
          property="og:url"
          content="https://om-kirana-store.vercel.app"
        />

        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Om Kirana Store"
        />

        <meta
          name="twitter:description"
          content="Wholesale Grocery Supplier"
        />

        <meta
          name="twitter:image"
          content="https://om-kirana-store.vercel.app/images/banner.jpg"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <link rel="icon" href="images/icon/favicon.ico" />

      </Helmet>
      {/* Hero */}
      <section className="bg-primary-dark text-white  h-[280px] md:h-[320px] lg:h-[360px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-sm uppercase tracking-[4px] text-primary font-semibold mb-3">
            Frequently Asked Questions
          </p>

          <h1 className="mb-3 text-2xl xl:text-4xl font-extrabold leading-tight text-white">
            We're Here To Help
          </h1>

          <p className="text-sm max-w-2xl mx-auto text-gray-300 leading-8">
            Find answers to the most commonly asked questions about our
            wholesale grocery products, delivery, payments and services.
          </p>



        </div>
      </section>

      {/* FAQ */}

      <section className="py-8 sm:py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-4 sm:gap-10">

          {/* FAQ */}

          <div className="lg:col-span-2 space-y-3 sm:space-y-5">

            {filteredFaq.length > 0 ? (
              filteredFaq.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-200 p-3 sm:p-6 shadow-sm hover:shadow-lg duration-300 "
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-md sm:text-lg">

                    {item.question}

                    <span className="text-primary text-lg sm:text-3xl group-open:rotate-45 duration-300">
                      <i className="fa-solid fa-plus"></i>
                    </span>

                  </summary>

                  <p className="mt-3 sm:mt-5 text-gray-600 leading-8 text-sm sm:text-base">
                    {item.answer}
                  </p>

                </details>
              ))
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow text-center">

                <i className="fa-solid fa-circle-question text-5xl text-primary mb-5"></i>

                <h3 className="text-2xl font-semibold mb-2">
                  No Question Found
                </h3>

                <p className="text-xs sm:text-sm text-gray-600">
                  Try searching with another keyword.
                </p>

              </div>
            )}
          </div>

          {/* Sidebar */}

          <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-8 h-fit ">



            <h2 className="text-lg sm:text-xl font-bold mb-2">
              Need More Help?
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-8 mb-4">
              Our support team is always ready to assist you regarding orders,
              pricing, delivery and wholesale enquiries.
            </p>

            <div className="space-y-4 sm:space-y-6">

              <div className="flex gap-4 items-center">

                <div className="text-primary text-xl">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div>

                  <h4 className="font-semibold">Call Us</h4>

                  <p className="text-xs sm:text-sm text-gray-600">
                    +91 63784 94265
                  </p>

                </div>

              </div>

              <div className="flex gap-4 items-center">

                <div className="text-primary text-2xl">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>

                <div>

                  <h4 className="font-semibold">WhatsApp</h4>

                  <a
                    href="https://wa.me/916378494265"
                    className="text-xs sm:text-sm text-green-600 hover:underline"
                  >
                    Chat Now
                  </a>

                </div>

              </div>

              <div className="flex gap-4 items-center">

                <div className="text-primary text-2xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>

                  <h4 className="font-semibold">Email</h4>

                  <p className="text-xs sm:text-sm text-gray-600">
                    info@omkiranastore.com
                  </p>

                </div>

              </div>

            </div>


          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-primary-dark ">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="pt-5 text-xl sm:text-4xl font-bold mb-3 sm:mb-6">
            Still Have Questions?
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-6 sm:leading-8 mb-3 sm:mb-10">
            Contact our team today and get the best wholesale prices for
            grocery items and agarbatti products.
          </p>

          <a
            target="_blank"
            href="https://wa.me/916378494265"
            className="text-sm mb-4 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 py-2  px-4 sm:px-8 sm:py-4 rounded-full font-semibold duration-300"
          >
            <i className="fa-brands fa-whatsapp"></i>

            Chat on WhatsApp

          </a>

        </div>

      </section>
    </>
  );
}