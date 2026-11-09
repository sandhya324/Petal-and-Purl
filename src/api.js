const API_URL = "http://localhost:5000";

// Get all products
export async function getProducts() {
    const response = await fetch(`${API_URL}/api/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const result = await response.json();

    return result.data;
}

// Get a single product by ID
export async function getProductById(id) {
    const response = await fetch(`${API_URL}/api/products/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    const result = await response.json();

    return result.data;
}