import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import { assets } from "../../assets/assets";
import { products } from "../../pages/Collections/Collections";

import { FaHeart } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEco } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const [showData, setShowData] = useState(true);
  const [showData1, setShowData1] = useState(false);
  const [showData2, setShowData2] = useState(false);



  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="px-10 py-8">
      <div className="text-sm text-[#746966] mb-8">
        <Link to="/" className="hover:text-[#9F5B69]">
          Home
        </Link>

        <span className="mx-2">›</span>

        <Link to="/collections" className="hover:text-[#9F5B69]">
          Collections
        </Link>

        <span className="mx-2">›</span>

        <span className="text-[#9F5B69]">{product.name}</span>
      </div>

      <div className="mx-auto grid grid-cols-3 gap-10">
        <div className="bg-[#EDE3DA]  rounded-3xl p-5">
          <img
            src={assets[product.image]}
            alt={product.name}
            className="rounded-2xl"
          />
        </div>

        <div>
          <p className="inline-block px-4 py-2 rounded-full bg-[#F5E3E6] text-[#9F5B69] text-xs font-medium tracking-wider uppercase">
            {product.category}
          </p>

          <h1 className="text-5xl font-[Allura] font-semibold text-[#4A3835] mt-5 leading-tight">
            {product.name}
          </h1>

          <p className="text-3xl font-semibold text-[#C9828F] mt-6">
            ₹{product.price}
          </p>

          <p className="text-sm text-[#746966] mt-2">Inclusive of all taxes</p>

          <div className="flex items-center gap-2 mt-6">
            <span className="w-2 h-2 rounded-full bg-[#8A9A7B]"></span>

            <span className="text-[#4A3835]">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mt-10">
            <div className="flex gap-8 border-b border-[#D8C9BE]">
              <button
                onClick={() => {
                  setShowData(true);
                  setShowData1(false);
                  setShowData2(false);
                }}
                className="pb-3 text-[#746966] hover:border-b-2 hover:border-[#C9828F] hover:text-[#C9828F] font-medium"
              >
                Description
              </button>

              <button
                onClick={() => {
                  setShowData(false);
                  setShowData1(true);
                  setShowData2(false);
                }}
                className="pb-3 text-[#746966] hover:border-b-2 hover:text-[#C9828F] hover:border-[#C9828F] hover:font-medium"
              >
                Size & Notes
              </button>

              <button
                onClick={() => {
                  setShowData(false);
                  setShowData1(false);
                  setShowData2(true);
                }}
                className="pb-3 text-[#746966] hover:border-b-2 hover:text-[#C9828F] hover:border-[#C9828F] hover:font-medium"
              >
                Shipping & Returns
              </button>
            </div>

            {showData && (
              <p className="text-[#746966] leading-7 mt-5">
                {product.description}
              </p>
            )}

            {showData1 && (
              <>
                <p className="text-[#746966] leading-7 mt-5 pl-5 pb-5">
                  <span className="text-xl text-[#C9828F]">
                    Size Information
                  </span>{" "}
                  <br /> {product.size}
                </p>

                <div className="bg-[#EDE3DA]  rounded-3xl p-5 shadow-xl">
                  <h1 className="text-xl text-[#C9828F] ">📝 Special Notes</h1>

                  <p className="text-[#746966] leading-7 mt-5">
                    1. Every piece is individually handcrafted, so no two
                    butterflies are exactly alike.
                  </p>
                  <p className="text-[#746966] leading-7 mt-5">
                    2. Minor variations in shape and color are a natural part of
                    handmade craftsmanship.
                  </p>
                  <p className="text-[#746966] leading-7 mt-5">
                    3. Avoid exposure to water and direct sunlight for extended
                    periods.
                  </p>
                  <p className="text-[#746966] leading-7 mt-5">
                    4. Gently dust with a soft, dry cloth to clean.
                  </p>
                </div>
              </>
            )}

            {showData2 && (
              <p className="text-[#746966] leading-7 mt-5">
                📦 Ships in 3-7 business days
                <br />
                💳 Cash on Delivery available
                <br />
                ⚠️ <span className="text-[#C95C5C]">No Return Policy</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="bg-[#FFFDFC] rounded-3xl p-7 shadow-sm">
            <p className="text-3xl font-semibold text-[#C9828F]">
              ₹{product.price}
            </p>

            <p className="text-sm text-[#746966] mt-2">
              Inclusive of all taxes
            </p>

            <div className="flex items-center justify-between mt-8">
              <span className="font-medium text-[#4A3835]">QUANTITY</span>

              <div className="flex items-center border border-[#E3D8D0] rounded-full overflow-hidden">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 text-[#9F5B69] hover:bg-[#F5E3E6] transition duration-300"
                >
                  -
                </button>

                <span className="px-4 text-[#4A3835]">{quantity}</span>

                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 text-[#9F5B69] hover:bg-[#F5E3E6] transition duration-300"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              

              <button
                onClick={() => {
                  addToCart(product, quantity);
                }}
                disabled={product.stock === 0}
                className="flex-1 py-3 rounded-full border border-[#C9B0A8] text-[#4A3835] font-medium hover:border-[#9F5B69] transition-all duration-300 disabled:opacity-50"
              >
                🛒 Add to Basket
              </button>

              <button className="w-12 rounded-full border border-[#E3D8D0] flex items-center justify-center text-[#9F5B69] hover:bg-[#F5E3E6] transition-all duration-300">
                <FaHeart />
              </button>
            </div>

            <button className="w-full mt-5 py-3 rounded-full bg-[#B0886A] text-white font-semibold hover:bg-[#9F5B69] transition-all duration-300">
              Buy Now
            </button>

            <div className="mt-8 space-y-5 text-sm text-[#746966]">
              <div className="flex flex-row gap-2 items-center">
                <span className="text-[#9F5B69] text-lg font-medium">
                  <GrSecure />
                </span>
                <p className="">Secure Checkout</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <span className="text-[#9F5B69] text-lg font-medium">
                  <FaRegHeart />
                </span>
                <p className="">Made with Love</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <span className="text-[#9F5B69] text-lg font-medium">
                  <MdOutlineEco />
                </span>
                <p className="">Eco-Friendly Yarn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
