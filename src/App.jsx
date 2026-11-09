import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import CartButton from "./components/CartButton/CartButton";

import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import OurStory from "./pages/OurStory/OurStory";
import Reviews from "./pages/Reviews/Reviews";
import Contact from "./pages/Contact/Contact";

import ProductTest from "./ProductTest";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loginState, setLoginState] = useState("login");

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar setShowLogin={setShowLogin} setLoginState={setLoginState} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />

            {/* Temporary backend connection test */}
            <Route path="/test-api" element={<ProductTest />} />
          </Routes>

          <Footer />
          <CartButton />
          <ScrollTop />

          {showLogin && (
            <Login
              setShowLogin={setShowLogin}
              currState={loginState}
              setLoginState={setLoginState}
            />
          )}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
