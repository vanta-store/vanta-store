import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

function NotFound() {
  return <main className="container not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>این صفحه وجود ندارد.</h1><p>شاید مسیر رو اشتباه اومدی.</p><a className="button button-dark" href={import.meta.env.BASE_URL}>بازگشت به خانه</a></main>;
}

function AppShell() {
  return <CartProvider><ScrollToTop /><Header /><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:slug" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-success" element={<OrderSuccess />} />
    <Route path="*" element={<NotFound />} />
  </Routes><Footer /></CartProvider>;
}

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><AppShell /></BrowserRouter>;
}
