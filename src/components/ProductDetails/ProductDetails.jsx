import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useCart } from "../../Context/CartContext";
import { assets } from "../../assets/assets";
import { getProductById } from "../../api";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { MdOutlineEco } from "react-icons/md";



const ProductDetails = () => {

    // Get product ID from URL
    const { id } = useParams();

    // Product state
    const [product, setProduct] = useState(null);

    // Loading state
    const [loading, setLoading] = useState(true);

    // Error state
    const [error, setError] = useState("");

    // Quantity state
    const [quantity, setQuantity] = useState(1);

    // Cart context
    const { addToCart } = useCart();

    // Description tabs
    const [showData, setShowData] = useState(true);
    const [showData1, setShowData1] = useState(false);
    const [showData2, setShowData2] = useState(false);


    // Fetch single product from MongoDB
    useEffect(() => {

        const fetchProduct = async () => {

            try {

                setLoading(true);
                setError("");

                const data = await getProductById(id);

                setProduct(data);
                setQuantity(1);

            } catch (error) {

                console.error("Error fetching product:", error);

                setError(error.message);

            } finally {

                setLoading(false);

            }

        };

        fetchProduct();

    }, [id]);


    // Increase quantity
    const increaseQuantity = () => {

        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }

    };


    // Decrease quantity
    const decreaseQuantity = () => {

        if (quantity > 1) {
            setQuantity(quantity - 1);
        }

    };


    // Loading UI
    if (loading) {
        return (
            <p className="text-center py-20 text-[#746966]">
                Loading product details...
            </p>
        );
    }


    // Error UI
    if (error || !product) {
        return (
            <div className="text-center py-20">
                <p className="text-red-500">
                    {error || "Product not found"}
                </p>

                <Link
                    to="/collections"
                    className="text-[#9F5B69] underline mt-4 inline-block"
                >
                    Back to Collections
                </Link>
            </div>
        );
    }


    return (

        <div className="px-10 py-8 max-[600px]:px-4">

            {/* Breadcrumb */}

            <div className="text-sm text-[#746966] mb-8">

                <Link to="/" className="hover:text-[#9F5B69]">
                    Home
                </Link>

                <span className="mx-2">›</span>

                <Link to="/collections" className="hover:text-[#9F5B69]">
                    Collections
                </Link>

                <span className="mx-2">›</span>

                <span className="text-[#9F5B69]">
                    {product.name}
                </span>

            </div>


            <div className="mx-auto grid grid-cols-3 gap-10 max-[900px]:grid-cols-1">

                {/* Product Image */}

                <div className="bg-[#EDE3DA] rounded-3xl p-5">

                    <img
                        src={assets[product.image]}
                        alt={product.name}
                        className="rounded-2xl w-full object-cover"
                    />

                </div>


                {/* Product Information */}

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


                    <p className="text-sm text-[#746966] mt-2">
                        Inclusive of all taxes
                    </p>


                    <div className="flex items-center gap-2 mt-6">

                        <span className={`w-2 h-2 rounded-full ${
                            product.stock > 0 ? "bg-[#8A9A7B]" : "bg-red-500"
                        }`}></span>

                        <span className="text-[#4A3835]">
                            {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>

                    </div>


                    {/* Description Tabs */}

                    <div className="mt-10">

                        <div className="flex gap-8 border-b border-[#D8C9BE]">

                            <button
                                onClick={() => {
                                    setShowData(true);
                                    setShowData1(false);
                                    setShowData2(false);
                                }}
                                className="pb-3 text-[#746966] hover:text-[#C9828F]"
                            >
                                Description
                            </button>


                            <button
                                onClick={() => {
                                    setShowData(false);
                                    setShowData1(true);
                                    setShowData2(false);
                                }}
                                className="pb-3 text-[#746966] hover:text-[#C9828F]"
                            >
                                Size & Notes
                            </button>


                            <button
                                onClick={() => {
                                    setShowData(false);
                                    setShowData1(false);
                                    setShowData2(true);
                                }}
                                className="pb-3 text-[#746966] hover:text-[#C9828F]"
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
                                    </span>

                                    <br />

                                    {product.size}

                                </p>


                                <div className="bg-[#EDE3DA] rounded-3xl p-5 shadow-xl">

                                    <h1 className="text-xl text-[#C9828F]">
                                        📝 Special Notes
                                    </h1>

                                    <p className="text-[#746966] leading-7 mt-5">
                                        1. Every piece is individually handcrafted, so no two pieces are exactly alike.
                                    </p>

                                    <p className="text-[#746966] leading-7 mt-5">
                                        2. Minor variations in shape and color are natural.
                                    </p>

                                    <p className="text-[#746966] leading-7 mt-5">
                                        3. Avoid exposure to water and direct sunlight for extended periods.
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

                                ⚠️ <span className="text-[#C95C5C]">
                                    No Return Policy
                                </span>

                            </p>

                        )}

                    </div>

                </div>


                {/* Purchase Section */}

                <div>

                    <div className="bg-[#FFFDFC] rounded-3xl p-7 shadow-sm">

                        <p className="text-3xl font-semibold text-[#C9828F]">
                            ₹{product.price}
                        </p>


                        <p className="text-sm text-[#746966] mt-2">
                            Inclusive of all taxes
                        </p>


                        {/* Quantity */}

                        <div className="flex items-center justify-between mt-8">

                            <span className="font-medium text-[#4A3835]">
                                QUANTITY
                            </span>


                            <div className="flex items-center border border-[#E3D8D0] rounded-full overflow-hidden">

                                <button
                                    onClick={decreaseQuantity}
                                    className="px-4 py-2 text-[#9F5B69]"
                                >
                                    -
                                </button>


                                <span className="px-4 text-[#4A3835]">
                                    {quantity}
                                </span>


                                <button
                                    onClick={increaseQuantity}
                                    disabled={quantity >= product.stock}
                                    className="px-4 py-2 text-[#9F5B69] disabled:opacity-40"
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        {/* Add to Cart */}

                        <div className="flex gap-3 mt-7">

                            <button
                                onClick={() => addToCart(product, quantity)}
                                disabled={product.stock === 0}
                                className="flex-1 py-3 rounded-full border border-[#C9B0A8] text-[#4A3835] font-medium hover:border-[#9F5B69] disabled:opacity-50"
                            >
                                🛒 Add to Basket
                            </button>


                            <button className="w-12 rounded-full border border-[#E3D8D0] flex items-center justify-center text-[#9F5B69] hover:bg-[#F5E3E6]">
                                <FaHeart />
                            </button>

                        </div>


                        {/* Buy Now */}

                        <button
                            disabled={product.stock === 0}
                            className="w-full mt-5 py-3 rounded-full bg-[#B0886A] text-white font-semibold hover:bg-[#9F5B69] disabled:opacity-50"
                        >
                            Buy Now
                        </button>


                        {/* Features */}

                        <div className="mt-8 space-y-5 text-sm text-[#746966]">

                            <div className="flex gap-2 items-center">
                                <GrSecure />
                                <p>Secure Checkout</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <FaRegHeart />
                                <p>Made with Love</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <MdOutlineEco />
                                <p>Eco-Friendly Yarn</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ProductDetails;