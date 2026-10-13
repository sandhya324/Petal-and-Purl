import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const OurStory = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(current);

      if (current === 500) {
        clearInterval(interval);
      }
    }, 3);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount1(current);

      if (current === 2000) {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount3(current);

      if (current === 5) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row max-[1000px]:flex-col justify-around items-center gap-8 p-8 pt-12 max-[600px]:p-4">
      {/* Left Section */}
      <div className="left-section w-1/2 max-[1000px]:hidden flex justify-center">
        <img
          src={assets.story_img}
          className="w-160 max-w-full object-contain"
          alt="Our handmade crochet story"
        />
      </div>

      {/* Right Section */}
      <div className="right-section w-180 max-w-full max-[1000px]:w-full">
        <div className="border-b border-dashed border-[#CFA3AA]">
          <h1 className="text-2xl text-[#C9828F] font-semibold">Our Story</h1>

          <h1 className="text-[#4A3835] cursive text-5xl max-[600px]:text-3xl py-6 font-[Allura]">
            Made by Mom,
            <br />
            <span className="ml-2 text-[#C9828F]">Crafted With Heart ♡</span>
          </h1>

          <p className="text-[#746966] text-lg max-[600px]:text-base">
            Hi, I'm Ruchi - a mom who fell in love with crochet hooks and never
            looked back.
            <br />
            <br />
            What started as a quiet evening hobby during lockdown has grown into
            MamaLoom - a small handmade world where every creation carries
            warmth, intention, and a whole lot of love. I crochet in the early
            mornings before the house wakes up, in the quiet hours after dinner,
            and in every stolen moment in between.
            <br />
            <br />
            Each piece I make is unique. I choose every color thoughtfully, knot
            every stitch carefully, and finish every creation knowing that
            somewhere, someone will hold it and feel that warmth.
          </p>

          <p className="text-[#C9828F] cursive text-2xl max-[600px]:text-xl py-6 font-[Allura] font-semibold">
            ~ Ruchi, MamaLoom ♡
          </p>
        </div>

        {/* Statistics */}
        <div className="statistics p-10 max-[600px]:p-4 flex gap-20 max-[1200px]:gap-10 max-[600px]:gap-4 justify-around max-[600px]:flex-wrap">
          <div className="sections text-center">
            <h1 className="text-[#9F5B69] font-semibold text-3xl max-[600px]:text-2xl font-[Allura]">
              {count} +
            </h1>
            <p className="text-[#4A3835] text-sm max-[600px]:text-xs">
              Happy Customers
            </p>
          </div>

          <div className="sections text-center">
            <h1 className="text-[#9F5B69] font-semibold text-3xl max-[600px]:text-2xl font-[Allura]">
              {count1} +
            </h1>
            <p className="text-[#4A3835] text-sm max-[600px]:text-xs">
              Pieces Made
            </p>
          </div>

          <div className="sections text-center">
            <h1 className="text-[#9F5B69] font-semibold text-3xl max-[600px]:text-2xl font-[Allura]">
              {count3} ★
            </h1>
            <p className="text-[#4A3835] text-sm max-[600px]:text-xs">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
