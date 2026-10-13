import "./Footer.css";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${assets.wallpaper_3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full"
    >
      {/* Footer Main Section */}
      <div
        className="flex justify-between gap-10 p-8 px-15
                      max-[1000px]:flex-wrap
                      max-[1000px]:gap-12
                      max-[600px]:flex-col
                      max-[600px]:gap-8
                      max-[600px]:p-6"
      >
        {/* Left Section */}
        <div
          className="footer-left max-w-sm
                        max-[1000px]:w-[45%]
                        max-[600px]:w-full"
        >
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="Petal & Purl"
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />

            <div className="logo-text">
              <h5 className="text-xl font-semibold text-[#4A3835] leading-tight">
                Petal & Purl
              </h5>

              <p className="text-[11px] tracking-[2px] text-[#9F5B69] font-medium mt-1">
                LITTLE THINGS, LOVINGLY LOOPED.
              </p>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-lg font-medium text-[#4A3835]">
              Made slowly, stitched with love.
            </p>

            <p className="mt-2 text-sm leading-7 text-[#746966] max-w-xs">
              Every piece is handmade with care, one little stitch at a time —
              created to bring a little warmth and joy to your everyday.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-6">
            <Link
              to="#"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-full
                         bg-[#FFFDFC] border border-[#D8C9BE] text-[#9F5B69]
                         text-xl shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:bg-[#9F5B69] hover:text-white"
            >
              <FaInstagram />
            </Link>

            <Link
              to="#"
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center rounded-full
                         bg-[#FFFDFC] border border-[#D8C9BE] text-[#9F5B69]
                         text-xl shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:bg-[#9F5B69] hover:text-white"
            >
              <MdOutlineMail />
            </Link>

            <Link
              to="#"
              aria-label="WhatsApp"
              className="w-11 h-11 flex items-center justify-center rounded-full
                         bg-[#FFFDFC] border border-[#D8C9BE] text-[#9F5B69]
                         text-xl shadow-sm transition-all duration-300
                         hover:-translate-y-1 hover:bg-[#9F5B69] hover:text-white"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* Useful Links */}
        <div
          className="quick-links
                        max-[1000px]:w-[35%]
                        max-[600px]:w-full"
        >
          <h2 className="font-semibold text-lg text-[#4A3835]">Useful Links</h2>

          <div className="flex flex-col pt-5 gap-3 text-[#746966] text-sm">
            <Link
              to="/shop"
              className="transition-all duration-300 hover:translate-x-1 hover:text-[#9F5B69]"
            >
              Shop
            </Link>

            <Link
              to="/collections"
              className="transition-all duration-300 hover:translate-x-1 hover:text-[#9F5B69]"
            >
              Collections
            </Link>

            <Link
              to="/reviews"
              className="transition-all duration-300 hover:translate-x-1 hover:text-[#9F5B69]"
            >
              Reviews
            </Link>

            <Link
              to="/contact"
              className="transition-all duration-300 hover:translate-x-1 hover:text-[#9F5B69]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="footer-right
                        max-[1000px]:w-[45%]
                        max-[600px]:w-full"
        >
          <h2 className="font-semibold text-lg text-[#4A3835]">Get in Touch</h2>

          <div className="flex items-start gap-3 mt-5">
            <MdOutlineMail className="mt-1 text-xl text-[#9F5B69] shrink-0" />

            <div>
              <h5 className="font-medium text-[#4A3835]">Email</h5>

              <p className="text-sm text-[#746966] mt-1 break-words">
                hello@petalandpurl.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-5">
            <span className="mt-1 text-lg text-[#9F5B69]">♡</span>

            <div>
              <h5 className="font-medium text-[#4A3835]">Handcrafted in</h5>

              <p className="text-sm text-[#746966] mt-1">Delhi, India 🇮🇳</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom border-t border-[#D8C9BE] py-4 px-4 text-center">
        <p className="text-xs leading-6 text-[#746966]">
          Lovingly handcrafted by Mom, shared with the world by us. ♡
        </p>
      </div>
    </div>
  );
};

export default Footer;
