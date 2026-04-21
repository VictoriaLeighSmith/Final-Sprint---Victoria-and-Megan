import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // State for storing user location on website. This allows us to reset scroll position, otherwise react carries it over.
  const { pathname } = useLocation();

  // State for storing product list from the API
  const [products, setProducts] = useState([]);

  // State for storing items currently in the cart
  const [cart, setCart] = useState([]);

  // Loading and error states for informing the user about data fetching states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate total number of items in cart for navbar cart icon
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Fetch product list from the server
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
      // Set loading state to false once fetch request completes
      setLoading(false);
    }
  };

  // Fetch cart data from the server
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

  // Fetch data and cart information once on component mount to load the initial data
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Set scroll to the top of the page each time the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Function to add item to cart or update quantity of item if it already exists in cart
  const addToCart = async (product) => {
    const existingItem = cart.find(
      (item) => String(item.productId) === String(product.id),
    );

    if (existingItem) {
      // If the item is in cart, update quantity
      await fetch(`http://localhost:3000/cart/${existingItem.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: existingItem.quantity + 1,
        }),
      });
    } else {
      // Otherwise, create a new cart item
      const cartItem = {
        productId: String(product.id),
        name: product.name,
        category: product.category,
        price: product.price,
        description: product.description,
        image: product.image,
        quantity: 1,
      };

      await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });
    }

    // Refresh cart state after items added
    await fetchCart();
  };

  // Remove item from cart
  const removeFromCart = async (product) => {
    await fetch(`http://localhost:3000/cart/${product.id}`, {
      method: "DELETE",
    });

    // Refresh cart state after items removed
    await fetchCart();
  };

  // Increase quantity of cart item
  const increaseQty = async (product) => {
    await fetch(`http://localhost:3000/cart/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: product.quantity + 1,
      }),
    });

    // Refresh cart state after item quantity updated
    await fetchCart();
  };

  // Decrease quantity of cart item
  const decreaseQty = async (product) => {
    if (product.quantity > 1) {
      await fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: product.quantity - 1,
        }),
      });

      // Refresh cart state after item quantity updated
      await fetchCart();
    }
  };

  // Clear cart after successfully placing order
  const clearCart = async () => {
    for (const item of cart) {
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: "DELETE",
      });
    }

    await fetchCart();
  };

  return (
    <>
      <Navbar cartCount={cartCount} loading={loading} error={error} />
      <main className="app-main">
        {loading ? (
          <p className="app-message">
            <em>Loading products ...</em>
          </p>
        ) : error ? (
          <p className="app-message">
            <em>Error loading products</em>
          </p>
        ) : (
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/shop" element={<Shop products={products} />} />
            <Route
              path="/products/:id"
              element={
                <ProductDetails addToCart={addToCart} products={products} />
              }
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
            <Route
              path="/checkout"
              element={<Checkout cart={cart} clearCart={clearCart} />}
            />
          </Routes>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
