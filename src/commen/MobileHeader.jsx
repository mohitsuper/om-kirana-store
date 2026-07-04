import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "FAQ", link: "/faq" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="lg:hidden sticky top-0 z-50 !mb-0 bg-white shadow-md">

      {/* Top Header */}

      <div className="h-20 px-5 flex items-center justify-between">

        <NavLink to="/">
          <img
            src="/images/logo/logo-lands.svg"
            className="h-14 w-40"
            alt=""
          />
        </NavLink>
         <button className="w-fit text-sm py-2 px-3 text-nowrap bg-secondary text-white  rounded-full font-semibold">
              Get in Touch
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-lg sm:text-3xl text-primary-dark"
        >
          <i
            className={`fa-solid ${
              menuOpen ? "fa-xmark" : "fa-bars"
            }`}
          ></i>
        </button>

      </div>

      {/* Menu */}

      <div
        className={`overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="bg-white shadow-lg">

          {navLinks.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 border-b border-gray-200 font-medium text-sm ${
                  isActive
                    ? "text-secondary"
                    : "text-primary-dark hover:text-secondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}


        </nav>
      </div>
    </header>
  );
}