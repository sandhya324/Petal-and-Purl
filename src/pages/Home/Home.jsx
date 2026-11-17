import { assets } from "../../assets/assets";

import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";

import OurStory from "../OurStory/OurStory";
import Collections from "../Collections/Collections";


const Home = () => {
  return (
    <>
      <div className="bg-[#FFF8F4] flex flex-row justify-around mx-15 max-[530px]:mx-6 rounded-xl border-2 border-dashed border-[#CFA3AA] ">
        <div className="p-10 Home-left">
          <p className="bg-[#F5E3E6] text-[#9F5B69] p-2 px-4 rounded-full inline-block max-[532px]:text-sm ">
            ♡ HANDCRAFTED WITH LOVE SINCE 2019
          </p>

          <h1 className="text-[#4A3835] cursive text-5xl py-10 font-[Allura] max-[1220px]:text-3xl">
            Timeless Handmade Creations,
            <br /> Made With
            <span className="ml-2 text-[#C9828F]">Love ♡</span>
          </h1>

          <p className="w-140 text-[#746966] max-[1220px]:w-120 max-[1120px]:w-100 max-[1120px]:text-base max-[590px]:text-sm  max-[590px]:w-80 max-[530px]:w-60">
            Every loop, every stitch carries a piece of our heart. Explore cozy
            crochet creations — from cuddly companions to thoughtful gifts, all
            crafted by mom, for you.
          </p>

          <div className="buttons text-[#4A3835] font-semibold my-10 max-[590px]:my-7 max-[554px]:flex max-[554px]:flex-col max-[554px]:gap-2">
            <button
              style={{ backgroundImage: `url(${assets.wallpaper_2})` }}
              className=" bg-cover bg-no-repeat bg-center rounded-full px-6 py-1.5 hover:text-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]"
            >
              Shop Collection →
            </button>

            <button
              style={{ backgroundImage: `url(${assets.wallpaper_2})` }}
              className=" bg-cover bg-no-repeat bg-center mx-3 rounded-full px-6 py-1.5 hover:text-[#9F5B69] transition-transform duration-300 ease-out hover:-translate-y-1 border-1 border-[#BFAEA5]"
            >
              Explore Gifts
            </button>
          </div>
        </div>

        <div className="Home-right flex items-center justify-center p-10 max-[1220px]:p-8 max-[1120px]:p-6 max-[950px]:hidden">
          <div className="bg-[#F1E8DF]  rounded-full p-8">
            <img
              src={assets.img_13}
              alt=""
              className="h-80 w-80 object-contain max-[1120px]:h-65 max-[1120px]:w-65"
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------collections-------------------------------------------- */}

      <div className="border-b-2 border-dotted border-[#CFA3AA]">
        <Collections homePage={true} />
      </div>

      <OurStory className="pb-0 mb-0" />

      <div className="relative h-0 z-10">
        <img
          src={assets.ribbon}
          alt=""
          className="absolute top-0 left-0 -translate-y-1/2 w-full h-[75px] object-cover object-center pointer-events-none"
        />
      </div>

      <Reviews className="bg-[#dbdfdf] py-10" />

      <Contact />
    </>
  );
};

export default Home;