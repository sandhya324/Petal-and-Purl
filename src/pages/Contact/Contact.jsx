import { useState } from "react";
import {Link} from 'react-router-dom';

import { assets } from "../../assets/assets";
import { IoIosSend } from "react-icons/io";

import { FaInstagram } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setShowPopup(true);
  };

  return (
    <div>
      <div className="heading p-10 text-center ">
        <h1 className="text-2xl text-[#C9828F] font-semibold max-[930px]:text-xl">♡ Stay Cozy</h1>

        <p className="text-3xl pb-0 mb-0 text-[#4A3835] font-semibold  cursive text-5xl py-5 font-[Allura] max-[930px]:text-3xl">
          Drop Your Message in Our Yarn Basket
        </p>
        <p className="pt-0 mt-0 text-sm leading-7 text-[#746966] ">
          Get first peeks at new creations, exclusive discounts, and cozy
          crochet stories — delivered with love, never spam.
        </p>
      </div>

      <div className="form-container gap-10 flex flex-wrap justify-center max-[930px]:gap-5">
        <div
          style={{
            backgroundImage: `url(${assets.wallpaper_8})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="shadow-md w-96 rounded-lg p-6 mb-15 max-[930px]:w-90 max-[824px]:mb-0 max-[824px]:w-96"
        >
          <h1 className="text-3xl font-bold text-[#4A3835]">Stay in Touch ♡</h1>
          <p className="text-sm text-[#4A3835] mt-2">Little updates, handmade stories, and lovely things—straight from us to you. ♡</p>

          <div className="flex items-start gap-3 mt-5 ">
            <MdOutlineMail className="mt-1 text-xl text-[#9F5B69]" />
            <div>
              <h5 className="font-medium text-[#4A3835]">Email</h5>
              <p className="text-sm text-[#746966] mt-1">
                hello@petalandpurl.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-5">
            <FaRegHeart className="mt-1 text-xl text-[#9F5B69]" />
        
            <div>
              <h5 className="font-medium text-[#4A3835]">Handcrafted in</h5>
              <p className="text-sm text-[#746966] mt-1">Delhi, India 🇮🇳</p>
            </div>
          </div>

          <h1 className="text-[#4A3835] font-bold text-xl pt-10">Follow Us</h1>
          <div className="flex items-center gap-3 mt-6">
            <Link
              to="#"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FFFDFC] border border-[#D8C9BE] text-[#9F5B69] text-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#9F5B69] hover:text-white"
            >
              <FaInstagram />
            </Link>

            <Link
              to="#"
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FFFDFC] border border-[#D8C9BE] text-[#9F5B69] text-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#9F5B69] hover:text-white"
            >
              <MdOutlineMail />
            </Link>

            <Link
              to="#"
              aria-label="WhatsApp"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FFFDFC] border border-[#D8C9BE] text-[#9F5B69] text-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#9F5B69] hover:text-white"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="contact-card bg-[#F8F5F0] shadow-md rounded-lg p-6 mb-15  mx-auto">
            <h1 className="text-3xl font-bold text-[#4A3835] max-[930px]:text-2xl">
              Drop Your Message ♡
            </h1>
            <p className="text-sm text-[#C9828F] mb-5 mt-2">
              Have a question or special request? We’d love to hear from you!
            </p>

            <div className="user-input flex flex-col mb-4">
              <label htmlFor="email" className="text-[#4A3835]">
                Name:
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                required
                className="bg-[#F1E8DF] p-1 rounded-sm "
              />
            </div>

            <div className="user-input flex flex-col mb-4">
              <label htmlFor="email" className="text-[#4A3835]">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-[#F1E8DF] p-1 rounded-sm "
              />
            </div>

            <div className="user-input flex flex-col mb-4">
              <label htmlFor="email" className="text-[#4A3835]">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                required
                className="bg-[#F1E8DF] p-1 rounded-sm"
              />
            </div>

            <button className="flex items-center justify-center bg-[#4A3835] text-[white] bg-no-repeat bg-center mx-2 rounded-full px-6 py-1.5 hover:bg-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]">
              Send{" "}
              <span>
                <IoIosSend />
              </span>
            </button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div
          style={{ backgroundImage: `url(${assets.wallpaper_2})` }}
          className="popup fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 p-10 text-center shadow-xl/20"
        >
          <h1 className="text-[#B84F70] text-2xl">We’ve Got Your Message! ♡</h1>
          <p className="text-[#493139] cursive text-3xl py-10 font-[Allura]">
            Thank you for reaching out to Petal & Purl. We’ll get back to you
            shortly.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="bg-[#4A3835] text-[white] bg-no-repeat bg-center mx-2 rounded-full px-6 py-1.5 hover:bg-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]"
          >
            Okay
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
