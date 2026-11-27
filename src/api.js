const API_URL = "http://localhost:5000";

//---------- Login API -----------------

export async function loginUser(email, password) {

    const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })
        }
    );

    
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
}

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


//Customer Registration
export async function registerUser(name, email, password){

    const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name, 
                email: email,
                password: password
            })
        });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Registration failed");
    }

    return data;
}