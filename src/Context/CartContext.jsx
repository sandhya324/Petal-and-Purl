import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // STEP 1: Load cart data from localStorage
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cartItems");

            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error loading cart:", error);
            return [];
        }
    });

    // STEP 2: Save cart whenever cartItems changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    // STEP 3: Add product to cart
    const addToCart = (product, quantity = 1) => {

        setCartItems((prevItems) => {

            const existingProduct = prevItems.find(
                (item) => item._id === product._id
            );

            if (existingProduct) {

                return prevItems.map((item) =>
                    item._id === product._id
                        ? {
                            ...item,
                            quantity: Math.min(
                                item.quantity + quantity,
                                item.stock
                            )
                        }
                        : item
                );

            }

            return [
                ...prevItems,
                {
                    ...product,
                    quantity: Math.min(quantity, product.stock)
                }
            ];
        });
    };


    // STEP 4: Remove product from cart
    const removeFromCart = (productId) => {

        setCartItems((prevItems) =>
            prevItems.filter((item) => item._id !== productId)
        );

    };


    // STEP 5: Update product quantity
    const updateQuantity = (productId, quantity) => {

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item._id === productId
                    ? {
                        ...item,
                        quantity: Math.max(
                            1,
                            Math.min(quantity, item.stock)
                        )
                    }
                    : item
            )
        );

    };


    // STEP 6: Clear entire cart
    const clearCart = () => {
        setCartItems([]);
    };


    // STEP 7: Calculate cart count
    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );


    // STEP 8: Calculate total price
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );


    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                cartCount,
                cartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    );

};


// Custom hook
export const useCart = () => useContext(CartContext);
