import { MdOutlineStarPurple500 } from "react-icons/md";

const Reviews = ({ className = "" }) => {
  return (
    <div className={className}>

      {/* Heading */}
      <div className="heading p-10 max-[600px]:p-5 text-center">
        <h1 className="text-2xl text-[#C9828F] font-semibold">
          ♡ Love Notes
        </h1>

        <p className="text-[#4A3835] text-5xl max-[600px]:text-3xl py-5 font-[Allura] font-semibold">
          Words From Our Crochet Family
        </p>

        <p className="text-sm leading-7 text-[#746966] max-w-2xl mx-auto">
          Real reviews from real people whose hearts were touched by handmade
          love.
        </p>
      </div>

      {/* Reviews Cards */}
      <div className="reviews-container flex flex-wrap justify-center gap-6 px-10 max-[600px]:px-4 pb-8">

        {/* Card 1 */}
        <div className="review-card group bg-[#F8F5F0] border border-[#EAD9D5] shadow-md rounded-2xl p-6 w-80 max-w-full min-h-64 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C9828F]">

          <div className="flex justify-between items-center mb-3">
            <span className="text-4xl text-[#E8C9CE] font-[Allura]">
              “
            </span>

            <span className="star text-[#D4AF37] flex text-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <MdOutlineStarPurple500 key={star} />
              ))}
            </span>
          </div>

          <p className="review-text text-sm leading-7 text-[#746966] flex-grow">
            "I received my crochet blanket and I am in love! The quality is
            amazing and the attention to detail is impressive. Thank you for
            creating such a beautiful piece!"
          </p>

          <div className="border-t border-[#EAD9D5] mt-5 pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EBD0D5] flex items-center justify-center text-[#9F5B69] font-semibold">
              S
            </div>

            <div>
              <p className="text-sm text-[#4A3835] font-semibold">
                Sarah M.
              </p>
              <p className="text-xs text-[#9F5B69]">
                Happy Customer ♡
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="review-card group bg-[#F8F5F0] border border-[#EAD9D5] shadow-md rounded-2xl p-6 w-80 max-w-full min-h-64 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C9828F]">

          <div className="flex justify-between items-center mb-3">
            <span className="text-4xl text-[#E8C9CE] font-[Allura]">
              “
            </span>

            <span className="star text-[#D4AF37] flex text-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <MdOutlineStarPurple500 key={star} />
              ))}
            </span>
          </div>

          <p className="review-text text-sm leading-7 text-[#746966] flex-grow">
            "I ordered a custom crochet hat and it exceeded my expectations!
            The craftsmanship is top-notch and the seller was very responsive
            to my requests. I will definitely be ordering again!"
          </p>

          <div className="border-t border-[#EAD9D5] mt-5 pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EBD0D5] flex items-center justify-center text-[#9F5B69] font-semibold">
              E
            </div>

            <div>
              <p className="text-sm text-[#4A3835] font-semibold">
                Emily R.
              </p>
              <p className="text-xs text-[#9F5B69]">
                Happy Customer ♡
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="review-card group bg-[#F8F5F0] border border-[#EAD9D5] shadow-md rounded-2xl p-6 w-80 max-w-full min-h-64 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C9828F]">

          <div className="flex justify-between items-center mb-3">
            <span className="text-4xl text-[#E8C9CE] font-[Allura]">
              “
            </span>

            <span className="star text-[#D4AF37] flex text-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <MdOutlineStarPurple500 key={star} />
              ))}
            </span>
          </div>

          <p className="review-text text-sm leading-7 text-[#746966] flex-grow">
            "I purchased a crochet scarf as a gift and it was a hit! The
            recipient loved it and I received many compliments on the unique
            design. Thank you for creating such beautiful pieces!"
          </p>

          <div className="border-t border-[#EAD9D5] mt-5 pt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EBD0D5] flex items-center justify-center text-[#9F5B69] font-semibold">
              J
            </div>

            <div>
              <p className="text-sm text-[#4A3835] font-semibold">
                Jessica L.
              </p>
              <p className="text-xs text-[#9F5B69]">
                Happy Customer ♡
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Overall Rating */}
      <div className="review-card bg-[#F8F5F0] border border-[#EAD9D5] shadow-md rounded-2xl p-6 max-[600px]:p-5 mb-10 w-96 max-w-[calc(100%-2rem)] text-center mx-auto transition-all duration-300 hover:shadow-lg">

        <p className="text-sm text-[#C9828F] font-semibold tracking-widest uppercase">
          Made with love
        </p>

        <h1 className="text-5xl font-[Allura] font-semibold text-[#4A3835] mt-2">
          5.0
        </h1>

        <span className="star text-[#D4AF37] flex text-xl py-3 justify-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <MdOutlineStarPurple500 key={star} />
          ))}
        </span>

        <p className="text-sm leading-6 text-[#746966]">
          Based on 500+ reviews across Instagram & WhatsApp
        </p>

        <div className="w-16 h-1 bg-[#C9828F] rounded-full mx-auto mt-5"></div>

      </div>

    </div>
  );
};

export default Reviews;
