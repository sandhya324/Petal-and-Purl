import { assets } from "../../assets/assets";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api"

// Product Card Component
function Product(product) {
  return (
    <Link
      to={`/product/${product._id}`}
      className="no-underline w-64 max-[600px]:w-full max-[600px]:max-w-sm"
    >
      <div
        className="card group bg-[#F8F5F0] border border-[#EAD9D5]
                   shadow-md rounded-2xl p-4 h-full
                   transition-all duration-300
                   hover:-translate-y-2 hover:shadow-xl
                   hover:border-[#C9828F]"
      >

        {/* Product Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={assets[product.image]}
            alt={product.name}
            className="card-image w-64 h-54 object-cover
                       transition-transform duration-300
                       group-hover:scale-105
                       max-[600px]:w-full max-[600px]:h-80"
          />
        </div>

        {/* Product Category */}
        <p className="text-xs text-[#9F5B69] font-medium mt-4">
          {product.category}
        </p>

        {/* Product Name */}
        <h2 className="text-lg font-bold text-[#4A3835] mt-1">
          {product.name}
        </h2>

        {/* Product Material */}
        <p className="text-sm text-[#746966] mt-2">
          <strong>Material:</strong> {product.material}
        </p>

        {/* Product Price */}
        <p className="text-lg font-semibold text-[#9F5B69] mt-2">
          ₹{product.price}
        </p>

        {/* Product Stock */}
        <p className="text-xs text-[#746966] mt-1">
          {product.stock > 0
            ? `${product.stock} pieces available`
            : "Out of stock"}
        </p>

        {/* View Details */}
        <div
          className="border-t border-[#EAD9D5] mt-4 pt-3
                     text-center text-sm font-medium text-[#9F5B69]
                     group-hover:text-[#A66B7A]"
        >
          View Details ♡
        </div>

      </div>
    </Link>
  );
}


// Main Collections Component
const Collections = () => {

  // All products fetched from MongoDB
  const [products, setProducts] = useState([]);

  // Products displayed after category filtering
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Currently selected category
  const [activeCategory, setActiveCategory] = useState("All Products");

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");


  // Fetch products when component loads
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);
        setError("");

        // Calling Express API
        const data = await getProducts();

        // Store fetched products
        setProducts(data);

        // Initially display all products
        setFilteredProducts(data);

      } catch (error) {

        console.error("Error fetching products:", error);

        setError("Unable to load products. Please try again.");

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);


  // Category List
  const categories = [
    "All Products",
    "Home Decor",
    "Bouquets",
    "Toys",
    "Keychains",
  ];


  // Category Filter Function
  const handleCategoryClick = (category) => {

    setActiveCategory(category);

    if (category === "All Products") {

      setFilteredProducts(products);

    } else {

      const filtered = products.filter(
        (product) => product.category === category
      );

      setFilteredProducts(filtered);

    }

  };


  return (

    <div className="w-full">

      {/* Heading */}
      <div className="heading p-10 max-[600px]:p-5 text-center">

        <h1 className="text-2xl text-[#C9828F] font-semibold">
          Our Collections
        </h1>

        <p
          className="text-[#4A3835] font-semibold text-5xl
                     max-[600px]:text-3xl py-5 font-[Allura]"
        >
          Lovingly Crafted, Just For You ♡
        </p>

        <p className="text-sm leading-7 text-[#746966] max-w-2xl mx-auto">
          Every piece is handmade with premium yarn and overflowing love.
          Browse our cozy collection of crochet treasures.
        </p>

      </div>


      {/* Products Section */}
      <div
        className="product-container flex flex-row justify-center
                   items-start gap-8 px-8 pb-10
                   max-[900px]:flex-col
                   max-[900px]:items-center
                   max-[600px]:px-4"
      >

        {/* Categories */}
        <div
          className="bg-[#F8F5F0] mt-4 flex flex-col w-fit h-fit
                     min-w-44 p-5 rounded-2xl shadow-md
                     border border-[#EAD9D5]
                     max-[900px]:w-full"
        >

          <p
            className="text-[#4A3835] font-semibold text-2xl py-3
                       max-[900px]:text-center"
          >
            Categories
          </p>

          <div
            className="flex flex-col gap-3 max-[900px]:flex-row
                       max-[900px]:flex-wrap max-[900px]:justify-center"
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium
                            transition-all duration-300
                            ${
                              activeCategory === category
                                ? "bg-[#9F5B69] text-white shadow-md"
                                : "bg-[#C9828F] text-white hover:bg-[#A66B7A]"
                            }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>


        {/* Product List */}
        <div
          className="product-list flex flex-wrap justify-center
                     gap-4 flex-1 mt-4"
        >

          {/* Loading */}
          {loading && (
            <p className="text-[#746966] text-center py-10">
              Loading products...
            </p>
          )}


          {/* Error */}
          {!loading && error && (
            <p className="text-red-500 text-center py-10">
              {error}
            </p>
          )}


          {/* Products */}
          {!loading && !error && filteredProducts.length > 0 && (

            filteredProducts.map((product) => (

              <Product
                key={product._id}
                {...product}
              />

            ))

          )}


          {/* No Products */}
          {!loading && !error && filteredProducts.length === 0 && (

            <p className="text-[#746966] text-center py-10">
              No products found.
            </p>

          )}

        </div>

      </div>

    </div>

  );

};

export default Collections;
