import { Link } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

import { GrSecure } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEco } from "react-icons/md";

import { assets } from "../../assets/assets";
import { useCart } from "../../Context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 60;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
        <FiShoppingBag className="text-4xl text-[#C9828F] mb-5" />

        <h1 className="text-3xl font-semibold text-[#493139] font-[Allura] cursive">
          Your basket is waiting for a little love ♡
        </h1>

        <p className="text-[#746966] mt-3">
          You haven't added any handmade treasures yet.
        </p>

        <Link
          to="/collections"
          className="mt-7 rounded-full bg-[#B0886A] px-5 py-2 font-semibold text-white transition hover:bg-[#8F654F]"
        >
          Explore Collections →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen  px-5 py-10 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#9F5B69]">
            Made with love ♡
          </p>

          <h1 className="mt-3  text-4xl font-semibold text-[#493139] md:text-5xl font-[Allura] cursive">
            Your Shopping Basket
          </h1>

          <p className="mt-3 text-[#746966]">
            Every little stitch is one step closer to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-[#E7D8CE] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:p-6"
              >
                <img
                  src={assets[item.image]}
                  alt={item.name}
                  className="h-32 w-full rounded-xl bg-[#F8F5F0] object-contain sm:w-32"
                />

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9F5B69]">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-[#493139]">
                    {item.name}
                  </h2>

                  <p className="mt-1 text-sm text-[#746966]">
                    Material: {item.material}
                  </p>

                  <p className="mt-3 text-xl font-semibold text-[#9F5B69]">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center overflow-hidden rounded-full border border-[#E7D8CE]">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-3 py-2 text-[#9F5B69] transition hover:bg-[#F5E3E6] disabled:opacity-40"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      -
                    </button>

                    <span className="min-w-9 text-center text-[#493139]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.stock}
                      className="px-3 py-2 text-[#9F5B69] transition hover:bg-[#F5E3E6] disabled:opacity-40"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold text-[#493139]">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 text-sm text-[#9F5B69] transition hover:text-[#493139]"
                  >
                    <FaTrashAlt />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <Link
              to="/collections"
              className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-[#9F5B69] transition hover:text-[#493139]"
            >
              <FaArrowLeft />
              Continue Shopping
            </Link>
          </div>

          <div className="rounded-3xl border border-[#E7D8CE] bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-serif text-2xl font-semibold text-[#493139]">
              Order Summary
            </h2>

            <div className="mt-7 space-y-5 text-sm">
              <div className="flex justify-between gap-3 text-[#746966]">
                <span>Subtotal</span>
                <span className="font-medium text-[#493139]">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between gap-3 text-[#746966]">
                <span>Shipping</span>
                <span className="font-medium text-[#493139]">
                  {shipping === 0 ? "Free" : `₹${shipping}`}
                </span>
              </div>

              {subtotal > 0 && subtotal < 999 && (
                <p className="rounded-lg bg-[#F8F0E8] p-3 text-xs leading-5 text-[#8F654F]">
                  Add ₹{(999 - subtotal).toLocaleString("en-IN")} more to get
                  free shipping!
                </p>
              )}

              <div className="border-t border-dashed border-[#D8C9BE] pt-5">
                <div className="flex justify-between gap-3">
                  <span className="font-semibold text-[#493139]">Total</span>

                  <span className="text-2xl font-semibold text-[#9F5B69]">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-8 block w-full rounded-full bg-[#B0886A] px-5 py-4 text-center font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#8F654F]"
            >
              Proceed to Checkout →
            </Link>

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

export default Cart;
