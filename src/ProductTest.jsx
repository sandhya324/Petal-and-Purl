
import { useEffect, useState } from "react";
import { getProducts } from "./api";

function ProductTest() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();

        console.log("API Response:", data);

        // Extract the products array
        setProducts(data.data);

      } catch (err) {
        console.error(err);
        setError(err.message);

      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <h2>Petal & Purl Products</h2>

      <p>Total Products: {products.length}</p>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductTest;
