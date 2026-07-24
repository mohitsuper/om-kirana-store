import emailjs from "@emailjs/browser";

const ContactPopup = ({ isOpen, setIsOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ada48p",
        "template_gxh8ok8",
        e.target,
        "ogscjkJi4ReDGr4LJ"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        e.target.reset();
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong!");
      });
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-5 sm:p-8 animate-[fadeIn_.3s_ease] max-h-[95vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-3xl text-gray-400 hover:text-red-500 duration-300"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-6 text-sm sm:text-base">
          Fill out the form and we'll contact you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Hidden Time */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString("en-IN")}
          />

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm sm:text-base">
              Message
            </label>

            <textarea
              rows="4"
              name="message"
              required
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white py-3.5 rounded-lg font-semibold text-sm sm:text-base duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;