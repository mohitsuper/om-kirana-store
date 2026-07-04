import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPopup = ({ isOpen, setIsOpen }) => {
  const handleSubmit = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const name = form.get("name");
  const phone = form.get("phone");
  const message = form.get("message");

  emailjs
    .sendForm(
      "service_6ada48p",
      "template_gxh8ok8",
      e.target,
      "ogscjkJi4ReDGr4LJ"
    )
    .then(() => {
      alert("Message Sent Successfully!");
      setIsOpen(false);
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
    });

  setIsOpen(false);
};

  return (
    <>

      {/* Popup */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center  px-4"
        >
          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative p-8 animate-[fadeIn_.3s_ease]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-red-500 transition"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Contact Us
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-6">
              Fill out the form and we'll contact you shortly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  name="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  name="phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <input
  type="hidden"
  name="time"
  value={new Date().toLocaleString("en-IN")}
/>
              </div>
              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  required
                  name="message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;