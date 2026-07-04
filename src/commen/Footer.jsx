import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#071B3B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="/images/logo/logo-white.svg"
                alt="OM Kirana Store"
                className="h-25 bg-white w-40 mb-4"
              />
            </Link>

            <p className="text-sm text-gray-300 leading-7">
              Your trusted partner for wholesale grocery supply.
              Quality products, best prices and timely delivery.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61589803149214"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/omkiranastore063/"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/@omkiranastore063"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-orange-500 transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-500 transition">
                  Contact Us
                </Link>
              </li>



            </ul>
          </div>

          {/* Categories */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  Dry Fruits
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  Garam Masala
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  Namak
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  Edible Oil
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  Atta & Flour
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition">
                  View All
                </Link>
              </li>

            </ul>
          </div>

         

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-5 text-gray-300">

              <li className="flex gap-3">

                <i className="fa-solid fa-phone text-orange-500 mt-1"></i>

                <span>+91 98765 43210</span>

              </li>

              <li className="flex gap-3">

                <i className="fa-solid fa-envelope text-orange-500 mt-1"></i>

                <span>info@omkiranastore.com</span>

              </li>

              <li className="flex gap-3">

                <i className="fa-solid fa-location-dot text-orange-500 mt-1"></i>

                <span>
                  Om kirana store
                  <br />
                  Manganj dausa - 303303, Rajasthan, India
                </span>

              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} OM Kirana Store. All Rights Reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Designed with{" "}
            <i className="fa-solid fa-heart text-red-500"></i>{" "}
            for our customers.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;