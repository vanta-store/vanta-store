import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'vanta-cart-v2';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product, size, color, quantity = 1) => {
    setItems((current) => {
      const key = `${product.id}-${size}-${color}`;
      const existing = current.find((item) => item.key === key);
      if (existing) return current.map((item) => item.key === key ? { ...item, quantity: Math.min(10, item.quantity + quantity) } : item);
      return [...current, {
        key, id: product.id, slug: product.slug, name: product.name, englishName: product.englishName,
        price: product.price, image: product.images[0], size, color, quantity
      }];
    });
  };

  const updateQuantity = (key, quantity) => setItems((current) => quantity < 1
    ? current.filter((item) => item.key !== key)
    : current.map((item) => item.key === key ? { ...item, quantity: Math.min(quantity, 10) } : item));
  const removeItem = (key) => setItems((current) => current.filter((item) => item.key !== key));
  const clearCart = () => setItems([]);

  const value = useMemo(() => ({
    items, addItem, updateQuantity, removeItem, clearCart,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
};
