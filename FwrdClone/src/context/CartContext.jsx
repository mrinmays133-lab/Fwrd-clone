import { createContext, useState } from "react";

// create context
export const CartContext = createContext();

// provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Helper: Create unique cart item ID based on product + size + color
  const getCartItemId = (product) => {
    return `${product.id}-${product.selectedSize}-${product.selectedColor}`;
  };

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      // Treat products with different sizes/colors as different cart items
      const cartItemId = getCartItemId(product);
      const exists = prev.find((item) => getCartItemId(item) === cartItemId);

      if (exists) {
        return prev.map((item) =>
          getCartItemId(item) === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1, cartItemId }];
    });
  };

  // REMOVE ITEM
  const removeItem = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  // UPDATE QUANTITY
  const updateQty = (cartItemId, qty) => {
    if (qty <= 0) {
      removeItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: qty } : item
      )
    );
  };

  // TOTAL PRICE
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, updateQty, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;