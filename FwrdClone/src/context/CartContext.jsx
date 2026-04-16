import { createContext, useState } from "react";

// create context
export const CartContext = createContext();

// provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // REMOVE ITEM (fixed)
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // UPDATE QUANTITY (fixed)
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
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