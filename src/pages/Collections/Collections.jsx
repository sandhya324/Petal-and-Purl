import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    name: "Crochet Flower Bouquet",
    category: "Bouquets",
    price: 1299,
    material: "Cotton Yarn",
    stock: 12,
    size: "24cm X 20cm",
    image: "img_2",
    description:
      "A charming handmade crochet flower bouquet crafted with soft cotton yarn. These everlasting blooms add a cozy, thoughtful touch to your home or make a beautiful gift for someone special.",
  },
  {
    id: 2,
    name: "Pink Rose Bouquet",
    category: "Bouquets",
    price: 1599,
    material: "Cotton Yarn",
    stock: 8,
    size: "20cm X 18cm",
    image: "img_3",
    description:
      "A delicate bouquet of handmade crochet roses in soft pink tones. Carefully stitched with love, these forever flowers are perfect for gifting, decorating, or keeping a little floral sweetness around.",
  },
  {
    id: 3,
    name: "Crochet Heart Coasters",
    category: "Home Decor",
    price: 499,
    material: "Acrylic Yarn",
    stock: 20,
    size: "16cm",
    image: "img_5",
    description:
      "Cute heart-shaped crochet coasters designed to bring a little warmth to your table. Made with durable acrylic yarn, they are perfect for everyday use or as a sweet handmade gift.",
  },
  {
    id: 4,
    name: "Cute Crochet Fox Plushie",
    category: "Toys",
    price: 899,
    color: "Brown",
    material: "Soft Yarn",
    stock: 10,
    size: "20cm",
    image: "img_16",
    description:
      "A cuddly little crochet fox made with soft yarn and careful stitching. With its adorable details and cozy feel, this handmade plushie makes a lovely companion or thoughtful gift.",
  },
  {
    id: 5,
    name: "Pink Bow Keychain",
    category: "Keychains",
    price: 499,
    material: "Wool Blend",
    stock: 5,
    size: "6cm X 8cm",
    image: "img_4",
    description:
      "A sweet handmade keychain finished with a charming pink bow. Lightweight and cute, it adds a playful touch to your keys, bags, pouches, or backpacks.",
  },
  {
    id: 6,
    name: "Crochet Bow Strawberry Keychain",
    category: "Keychains",
    price: 399,
    material: "Cotton Yarn",
    stock: 30,
    size: "6cm X 8cm",
    image: "img_7",
    description:
      "A tiny crochet strawberry paired with a cute bow, handmade with soft cotton yarn. Perfect for adding a fun little pop of handmade charm to your everyday essentials.",
  },
  {
    id: 7,
    name: "Crochet Strawberry Plant Decor",
    category: "Home Decor",
    price: 549,
    material: "Cotton Yarn",
    stock: 18,
    size: "14cm X 10cm",
    image: "img_9",
    description:
      "A playful crochet strawberry plant decoration that brings a cheerful handmade touch to your space. A lovely little piece for desks, shelves, bedside tables, or gifting.",
  },
  {
    id: 8,
    name: "Crochet White Bunny",
    category: "Toys",
    price: 699,
    material: "Soft Yarn",
    stock: 14,
    size: "14cm X 12cm",
    image: "img_12",
    description:
      "A soft white crochet bunny with an adorable, cozy design. Handmade with gentle yarn and lots of care, this little bunny makes a sweet companion for children and bunny lovers alike.",
  },
  {
    id: 9,
    name: "Crochet Lavender Heart",
    category: "Home Decor",
    price: 299,
    material: "Cotton Yarn",
    stock: 9,
    size: "20cm",
    image: "img_10",
    description:
      "A beautiful crochet heart decoration inspired by soft lavender tones. Carefully handmade with cotton yarn, it makes a lovely decorative piece or a heartfelt gift for someone special.",
  },
  {
    id: 10,
    name: "Crochet Baby Blanket",
    category: "Home Decor",
    price: 1999,
    material: "Baby Soft Yarn",
    stock: 7,
    size: "30cm X 36cm",
    image: "img_6",
    description:
      "A cozy handmade crochet baby blanket made with soft, gentle yarn. Designed to keep little ones warm and comfortable while adding a lovely handcrafted touch to their nursery.",
  },
];

function Product(product) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="no-underline w-64 max-[600px]:w-full max-[600px]:max-w-sm"
      key={product.id}
    >
      <div className="card group bg-[#F8F5F0] border border-[#EAD9D5]
                      shadow-md rounded-2xl p-4 h-full
                      transition-all duration-300
                      hover:-translate-y-2 hover:shadow-xl
                      hover:border-[#C9828F]">

        <div className="overflow-hidden rounded-xl">   
          <img   
            src={assets[product.image]}
            className="card-image w-64 h-54 object-cover
                       transition-transform duration-300
                       group-hover:scale-105 max-[600px]:w-full max-[600px]:h-80"
          />
        </div>

        <p className="text-xs text-[#9F5B69] font-medium mt-4">
          {product.category}
        </p>

        <h2 className="text-lg font-bold text-[#4A3835] mt-1">
          {product.name}
        </h2>

        <p className="text-sm text-[#746966] mt-2">
          <strong>Material:</strong> {product.material}
        </p>

        <p className="text-lg font-semibold text-[#9F5B69] mt-2">
          ₹{product.price}
        </p>

        <p className="text-xs text-[#746966] mt-1">
          {product.stock > 0 ? `${product.stock} pieces available` : "Out of stock"}
        </p>

        <div className="border-t border-[#EAD9D5] mt-4 pt-3
                        text-center text-sm font-medium text-[#9F5B69]
                        group-hover:text-[#A66B7A]">
          View Details ♡
        </div>
      </div>
    </Link>
  );
}

const Collections = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All Products");

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

  const categories = [
    "All Products",
    "Home Decor",
    "Bouquets",
    "Toys",
    "Keychains",
  ];

  return (
    <div className="w-full">

      {/* Heading */}
      <div className="heading p-10 max-[600px]:p-5 text-center">

        <h1 className="text-2xl text-[#C9828F] font-semibold">
          Our Collections
        </h1>

        <p className="text-[#4A3835] font-semibold text-5xl
                      max-[600px]:text-3xl py-5 font-[Allura]">
          Lovingly Crafted, Just For You ♡
        </p>

        <p className="text-sm leading-7 text-[#746966] max-w-2xl mx-auto">
          Every piece is handmade with premium yarn and overflowing love.
          Browse our cozy collection of crochet treasures.
        </p>

      </div>

      {/* Products Section */}
      <div className="product-container flex flex-row justify-center
                      items-start gap-8 px-8 pb-10
                      max-[900px]:flex-col
                      max-[900px]:items-center
                      max-[600px]:px-4">

        {/* Categories */}
        <div className="bg-[#F8F5F0] mt-4 flex flex-col w-fit h-fit
                        min-w-44 p-5 rounded-2xl shadow-md
                        border border-[#EAD9D5]
                        max-[900px]:w-full">

          <p className="text-[#4A3835] font-semibold text-2xl py-3
                        max-[900px]:text-center">
            Categories
          </p>

          <div className="flex flex-col gap-3 max-[900px]:flex-row
                          max-[900px]:flex-wrap max-[900px]:justify-center">

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
        <div className="product-list flex flex-wrap justify-center
                        gap-4 flex-1 mt-4">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))
          ) : (
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
