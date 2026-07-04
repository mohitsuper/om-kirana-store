function TopBar() {
    return (
        <div className="hidden lg:block bg-primary-dark text-white text-sm">

            <div className="max-w-7xl mx-auto px-5">

                <div className="flex items-center justify-between h-10">

                    {/* Left */}

                    <div className="flex items-center gap-6">

                        <a
                            href="tel:+916378494265"
                            className="flex items-center gap-2 hover:text-secondary duration-300"
                        >
                            <i className="fa-solid fa-phone"></i>
                            +91 6378494265
                        </a>

                        <a
                            href="mailto:omkiranastore063@gmail.com"
                            className="flex items-center gap-2 hover:text-secondary duration-300"
                        >
                            <i className="fa-solid fa-envelope"></i>
                            omkiranastore063@gmail.com

                        </a>

                        <span className="flex items-center gap-2">
                            <i className="fa-solid fa-clock"></i>
                            Mon - Sat : 8:00 AM - 8:00 PM
                        </span>

                    </div>

                    {/* Right */}

                    <div className="flex items-center gap-3">

                        <span className="text-gray-300 text-xs uppercase tracking-wider">
                            Follow Us
                        </span>

                        <a
                           target="_blank"
                            href="https://www.facebook.com/profile.php?id=61589803149214"
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-secondary duration-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a
                        target="_blank"
                            href="https://www.instagram.com/omkiranastore063/"
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-secondary duration-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                        target="_blank"
                            href="https://wa.me/916378494265"
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-secondary duration-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>

                        <a
                        target="_blank"
                            href="https://www.youtube.com/@omkiranastore063"
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-secondary duration-300 flex items-center justify-center"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default TopBar;