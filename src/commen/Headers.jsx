import { NavLink } from "react-router-dom";
import ContactPopup from "./ContactUsPop";
import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";


function Header() {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "FAQ", link: "/faq" },
    { name: "Contact", link: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <ContactPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      {isMobile ? <MobileHeader />:
      <header className="wow animate__animated animate__fadeInDown sticky top-0 z-999 hidden md:block bg-white shadow-md !mb-0">
        <div className="max-w-7xl mx-auto px-5">

          <div className="h-24 flex items-center justify-between">

            {/* Logo */}

            <a href="/" className="wow animate__animated animate__fadeInLeft flex items-center flex-shrink-0">
              <img
                src="/images/logo/logo-lands.svg"
                alt="OM Kirana Store"
                className="h-16 w-auto"
              />
            </a>

            {/* Navigation */}

            <nav className="flex items-center gap-9">

              {navLinks.map((item) => (
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `relative font-semibold text-[15px] transition-all duration-300
      ${isActive
                      ? "text-secondary after:w-full"
                      : "text-primarydark hover:text-secondary after:w-0 hover:after:w-full"
                    }
      after:absolute
      after:left-0
      after:-bottom-2
      after:h-[2px]
      after:bg-secondary
      after:transition-all
      after:duration-300`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-6">

              {/* Search */}

              {/* <button className="text-2xl text-primarydark hover:text-secondary transition duration-300">

                <i className="fa-solid fa-magnifying-glass"></i>

              </button> */}

              {/* Cart */}

              {/* <button className="relative text-2xl text-primarydark hover:text-secondary transition duration-300">

                <i className="fa-solid fa-cart-shopping"></i>

                <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-secondary text-white text-[10px] flex items-center justify-center font-semibold">
                  0
                </span>

              </button> */}

              {/* Button */}

              <button
                onClick={() => setIsOpen(true)}
                className="bg-secondary hover:bg-accent text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-xl"
              >
                Get in Touch
              </button>

            </div>

          </div>

        </div>

      </header>}

    </div>
  );
}

export default Header;