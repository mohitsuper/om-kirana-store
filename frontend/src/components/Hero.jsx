import { Link } from "react-router-dom";
function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-white via-[#FCFCFC] to-[#FFF3E8]">

            <div className="max-w-7xl mx-auto px-5 py-8 sm:py-16">

                <div className="flex sm:flex-row flex-col justify-between mb-4 items-center gap-12">

                    {/* Left Content */}

                    <div>

                        <span className="wow animate__animated animate__fadeInLeft  inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-secondary font-semibold text-sm mb-6">

                            <i className="fa-solid fa-store"></i>

                            Trusted Wholesale Supplier

                        </span>

                        <h1 className="wow animate__animated animate__fadeInDown text-2xl xl:text-4xl font-extrabold leading-tight text-primary-dark">

                            Trusted Wholesale <br />

                            <span className="text-secondary">

                                Grocery Supplier

                            </span>

                        </h1>

                        <h3 className="wow animate__animated animate__fadeInUp mt-3 sm:mt-6 text-lg sm:text-xl  font-bold text-dark">

                            Bulk Products. Best Prices. On-Time Delivery.

                        </h3>

                        <p className="wow animate__animated animate__fadeInUp mt-3 sm:mt-6 text-sm text-gray-600 sm:text-lg leading-7 sm:leading-8 max-w-xl">

                            We supply high-quality grocery products in bulk to
                            retailers, hotels, restaurants, supermarkets and
                            distributors across India.

                        </p>

                        {/* Buttons */}

                        <div className="wow animate__animated animate__fadeInUp flex flex-wrap gap-4 mt-3 sm:mt-10">

                            <Link
                                to="/products"
                                className="bg-secondary hover:bg-accent text-white py-3 px-8 sm:px-8 sm:py-4 rounded-full font-semibold duration-300 shadow-lg inline-flex items-center gap-2 sm:gap-3 text-sm"
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                                Shop Now
                            </Link>

                            <a
                                href="https://wa.me/916378494265"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 text-sm sm:px-8 sm:py-4 rounded-full font-semibold duration-300 shadow-lg inline-flex items-center gap-3"
                            >
                                <i className="fa-brands fa-whatsapp text-xl"></i>
                                WhatsApp Now
                            </a>

                        </div>



                    </div>

                    {/* Right Side */}

                    <div className="relative hidden lg:flex justify-center items-center">

                        <div className="w-full h-[550px] rounded-full bg-gradient-to-br from-orange-100 to-orange-50">
                            <img src="/images/hero.png" alt="Product Image" className="w-full h-full object-cover rounded-full" />

                        </div>

                    </div>


                </div>
                {/* Features */}
                {/* <div className="lg:col-span-4">< */}
                <div className="wow animate__animated animate__fadeInUp lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* Card 1 */}

                    <div className="group flex items-center gap-4 bg-white rounded-2xl p-5 flex-col sm:flex-row text-center sm:text-left border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 text-secondary flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">

                            <i className="fa-solid fa-tags"></i>

                        </div>

                        <div>

                            <h4 className="sm:text-lg font-bold text-primary-dark text-md">
                                Best Prices
                            </h4>

                            <p className="text-xs sm:text-sm text-gray-500">
                                Guaranteed on every bulk order.
                            </p>

                        </div>

                    </div>

                    {/* Card 2 */}

                    <div className="group flex items-center gap-4 bg-white rounded-2xl p-5 flex-col sm:flex-row text-center sm:text-left border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 text-secondary flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">

                            <i className="fa-solid fa-boxes-stacked"></i>

                        </div>

                        <div>

                            <h4 className="sm:text-lg font-bold text-primary-dark text-md">
                                Bulk Supply
                            </h4>

                            <p className="text-xs sm:text-sm text-gray-500">
                                Stock always available for wholesale.
                            </p>

                        </div>

                    </div>

                    {/* Card 3 */}

                    <div className="group flex items-center gap-4 bg-white rounded-2xl p-5 flex-col sm:flex-row text-center sm:text-left border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 text-secondary flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">

                            <i className="fa-solid fa-truck-fast"></i>

                        </div>

                        <div>

                            <h4 className="sm:text-lg font-bold text-primary-dark text-md">
                                Fast Delivery
                            </h4>

                            <p className="text-xs sm:text-sm text-gray-500">
                                Safe & on-time delivery across cities.
                            </p>

                        </div>

                    </div>

                    {/* Card 4 */}

                    <div className="group flex items-center gap-4 bg-white rounded-2xl p-5 flex-col sm:flex-row text-center sm:text-left border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-100 text-secondary flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">

                            <i className="fa-solid fa-award"></i>

                        </div>

                        <div>

                            <h4 className="sm:text-lg font-bold text-primary-dark text-md">
                                100% Quality
                            </h4>

                            <p className="text-xs sm:text-sm text-gray-500">
                                Premium quality from trusted brands.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;