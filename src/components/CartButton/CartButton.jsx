import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CardButton = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Hide until a product is added
  if (cartCount === 0) return null;

  return (
    <button
      onClick={() => navigate("/cart")}
      aria-label={`Open basket with ${cartCount} items`}
      className="fixed bottom-22 right-5 z-50 rounded-full
                 border border-[#9A7257] bg-[#B0886A] p-4
                 shadow-lg transition hover:bg-[#8F654F]"
    >
      <SlBasket className="text-2xl text-white" />

  
      {/* Cart item count */}
      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#493139] text-xs font-bold text-white">
        {cartCount}
      </span>
    </button>
  );
};

export default CardButton;