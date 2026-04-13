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
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Create function to fetch product list from the server
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");

      if (!response.ok) {
        throw new Error("Error loading product data.");
      }

      const productData = await response.json();

      setProducts(productData);
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

  // Function to add item to cart / update quantity of existing item
  const addToCart = async (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    // If item already exists in cart, update quantity through patch
    if (existingItem) {
      await fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: existingItem.quantity + 1 }),
      });
      // Otherwise add the product to cart with quantity set to 1
    } else {
      await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...product, quantity: 1 }),
      });
    }
    fetchCart();
  };

  // Function to remove an item from cart
  const removeFromCart = async (product) => {
    await fetch(`http://localhost:3000/cart/${product.id}`, {
      method: "DELETE",
    });
    fetchCart();
  };

  // Function to increase quantity using + button on cart page
  const increaseQty = async (product) => {
    await fetch(`http://localhost:3000/cart/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: product.quantity + 1 }),
    });
    fetchCart();
  };

  // Function to decrease quantity using - button on cart page
  const decreaseQty = async (product) => {
    if (product.quantity > 1) {
      await fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: product.quantity - 1 }),
      });
      fetchCart();
    }
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      {/* Set up routes for all website pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetails addToCart={addToCart} products={products} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
