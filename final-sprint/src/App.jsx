import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create function to fetch product list from the server
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");

      if (!response.ok) {
        throw new Error("Error loading product data.");
      }

      const productData = await response.json();
      setProducts(productData);

      console.log(productData); // GET RID OF THIS AFTER TESTING!!!!!!!!
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Create function to fetch cart data
  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:3000/cart");

      if (!response.ok) {
        throw new Error("Error loading cart data.");
      }

      const cartData = await response.json();
      setCart(cartData);

      console.log(cartData); // GET RID OF THIS AFTER TESTING!!!!!!!!
    } catch (error) {
      console.error(`Error loading cart: ${error.message}`);
    }
  };

  // Fetch data from the server.
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Based on loading state, display a message.
  if (loading) {
    return <p>Loading products ...</p>;
  }

  if (error) {
    return <p>Error loading products.</p>;
  }

  console.log(products[0]); // GET RID OF THIS AFTER TESTING!!!!!!!!

  return (
    <>
      <Navbar cart={cart} />

      {/* Set up routes for all website pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
