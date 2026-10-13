import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { assets } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({ setShowLogin, setLoginState }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <nav
        style={{
          backgroundImage: `url(${assets.wallpaper_3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex justify-between items-center my-4 mx-[70px] p-2 rounded-full max-[530px]:mx-[40px] max-[400px]:mx-[20px]"
      >
        <div className="flex items-center gap-3">
          <div className="size-14 rounded-full overflow-hidden shrink-0">
            <img
              src={assets.logo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="logo-text">
            <h5 className="text-xl max-[1276px]:text-lg font-semibold text-[#4A3835] leading-tight max-[355px]:text-sm">
              Petal & Purl
            </h5>
            <p className="text-[11px] max-[1276px]:text-[9px] tracking-[2px] text-[#9F5B69] font-medium mt-1 max-[355px]:text-[7px]">
              LITTLE THINGS, LOVINGLY LOOPED.
            </p>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${assets.wallpaper_3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}

          className={` flex gap-20 justify-between items-center 
           max-[1116px]:flex-col 
           max-[1116px]:gap-4
           max-[1116px]:absolute
           max-[1116px]:top-22
           max-[1116px]:left-0
           max-[1116px]:right-0
           max-[1116px]:py-6
           max-[1116px]:rounded-3xl
           max-[1116px]:shadow-lg
           max-[1116px]:z-50

            ${showNav ? "max-[1116px]:flex" : "max-[1116px]:hidden"}
        `}
        >
          <div className=" flex justify-center items-center gap-8 max-[1276px]:gap-4 text-xl max-[1276px]:text-base  text-[#FFFFFF] max-[1116px]:flex-col ">
            <NavLink to="/" className="hover:text-[#B84F70]">
              Home
            </NavLink>
            <NavLink to="/collections" className="hover:text-[#B84F70]">
              Collections
            </NavLink>
            <NavLink to="/ourstory" className="hover:text-[#B84F70]">
              Our Story
            </NavLink>
            <NavLink to="/reviews" className="hover:text-[#B84F70]">
              Reviews
            </NavLink>
            <NavLink to="/contact" className="hover:text-[#B84F70]">
              Contact
            </NavLink>
          </div>

          <div className=" text-[#B84F70] font-semibold max-[1116px]:flex max-[1116px]:justify-center max-[1116px]:pt-6">
            <button
              onClick={() => {
                setShowLogin(true);
                setLoginState("login");
              }}
              style={{ backgroundImage: `url(${assets.wallpaper_2})` }}
              className="bg-cover bg-no-repeat bg-center mx-2 rounded-full px-6 py-1.5 hover:text-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]"
            >
              Login
            </button>

            <button
              onClick={() => {
                setShowLogin(true);
                setLoginState("register");
              }}
              style={{ backgroundImage: `url(${assets.wallpaper_2})` }}
              className="bg-cover bg-no-repeat bg-center mx-2 rounded-full px-6 py-1.5 hover:text-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]"
            >
              Register
            </button>
          </div>
        </div>

        {/* ---------------------------Hamburger / close------------------------- */}

        <button
          onClick={() => setShowNav(!showNav)}
          className=" hidden max-[1116px]:block text-2xl text-[#B84F70] px-10"
        >
          {showNav ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
