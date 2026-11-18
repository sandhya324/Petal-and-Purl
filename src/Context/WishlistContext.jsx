import { createContext, useContext, useEffect, useState } from "react";

// Create Wishlist Context
const WishlistContext = createContext();

// Create Provider
export function WishlistProvider({ children }) {

    // Get saved wishlist from localStorage
    const [wishlistItems, setWishlistItems] = useState(() => {
        try {
            const savedWishlist = localStorage.getItem("wishlistItems");
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        } catch {
            return [];
        }
    });

    // Save wishlist whenever it changes
    useEffect(() => {
        localStorage.setItem(
            "wishlistItems",
            JSON.stringify(wishlistItems)
        );
    }, [wishlistItems]);

    // Add or remove product
    const toggleWishlist = (product) => {

        setWishlistItems((prevItems) => {

            const alreadyExists = prevItems.some(
                (item) => item._id === product._id
            );

            if (alreadyExists) {
                return prevItems.filter(
                    (item) => item._id !== product._id
                );
            }

            return [...prevItems, product];
        });
    };

    // Check whether product is in wishlist
    const isInWishlist = (productId) => {
        return wishlistItems.some(
            (item) => item._id === productId
        );
    };

    // Remove product
    const removeFromWishlist = (productId) => {
        setWishlistItems((prevItems) =>
            prevItems.filter(
                (item) => item._id !== productId
            )
        );
    };

    // Clear wishlist
    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                toggleWishlist,
                isInWishlist,
                removeFromWishlist,
                clearWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

// Custom Hook
export function useWishlist() {
    return useContext(WishlistContext);
}