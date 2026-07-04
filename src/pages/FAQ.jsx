import React, { useState } from "react";

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
      {/* Hero */}
      <section className="bg-primary-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-primary font-semibold mb-4">
            Frequently Asked Questions
          </p>

          <h1 className="text-5xl font-bold mb-6">
            We're Here To Help
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 leading-8">
            Find answers to the most commonly asked questions about our
            wholesale grocery products, delivery, payments and services.
          </p>

          {/* Search */}

          <div className="max-w-xl mx-auto mt-10 relative">

            <input
              type="text"
              placeholder="Search your question..."
              className="w-full rounded-full py-4 px-6 text-black outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <i className="fa-solid fa-magnifying-glass absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"></i>

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* FAQ */}

          <div className="lg:col-span-2 space-y-5">

            {filteredFaq.length > 0 ? (
              filteredFaq.map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg duration-300"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">

                    {item.question}

                    <span className="text-primary text-3xl group-open:rotate-45 duration-300">
                      +
                    </span>

                  </summary>

                  <p className="mt-5 text-gray-600 leading-8">
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

                <p className="text-gray-600">
                  Try searching with another keyword.
                </p>

              </div>
            )}
          </div>

          {/* Sidebar */}

          <div className="bg-white rounded-3xl shadow-lg p-8 h-fit sticky top-24">

            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl mb-6">

              <i className="fa-solid fa-headset"></i>

            </div>

            <h2 className="text-3xl font-bold mb-4">
              Need More Help?
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Our support team is always ready to assist you regarding orders,
              pricing, delivery and wholesale enquiries.
            </p>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="text-primary text-2xl">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div>

                  <h4 className="font-semibold">Call Us</h4>

                  <p className="text-gray-600">
                    +91 63784 94265
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-primary text-2xl">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>

                <div>

                  <h4 className="font-semibold">WhatsApp</h4>

                  <a
                    href="https://wa.me/916378494265"
                    className="text-green-600 hover:underline"
                  >
                    Chat Now
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-primary text-2xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>

                  <h4 className="font-semibold">Email</h4>

                  <p className="text-gray-600">
                    info@omkiranastore.com
                  </p>

                </div>

              </div>

            </div>

            <a
              href="/contact"
              className="block text-center bg-primary hover:bg-primary-dark text-white rounded-full py-4 mt-10 duration-300 font-semibold"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-primary-dark py-20">

        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-8 mb-10">
            Contact our team today and get the best wholesale prices for
            grocery items and agarbatti products.
          </p>

          <a
            href="https://wa.me/916378494265"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold duration-300"
          >
            <i className="fa-brands fa-whatsapp"></i>

            Chat on WhatsApp

          </a>

        </div>

      </section>
    </>
  );
}