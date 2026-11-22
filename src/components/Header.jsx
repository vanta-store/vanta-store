import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { count } = useCart();

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/shop?q=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  const navItems = [
    { to: '/shop?sort=newest', label: 'تازه‌ها' },
    { to: '/shop?category=pants', label: 'شلوار' },
    { to: '/shop?category=henley', label: 'هنلی' },
    { to: '/shop?category=outerwear', label: 'لایه‌ها' },
  ];

  return <>
    <div className="announcement-bar">
      <span>ارسال رایگان برای سفارش‌های بالای ۵ میلیون تومان</span>
      <span className="announcement-en">VANTA — EVERYDAY FORM / 2026</span>
    </div>
    <header className="site-header">
      <div className="header-inner container">
        <button className="icon-button mobile-menu-trigger" type="button" aria-label="باز کردن منو" onClick={() => setMenuOpen(true)}><Menu size={20} strokeWidth={1.6} /></button>
        <nav className="desktop-nav" aria-label="منوی اصلی">
          {navItems.map((item) => <NavLink key={item.label} to={item.to}>{item.label}</NavLink>)}
        </nav>
        <Link to="/" className="brand-mark" aria-label="VANTA صفحه اصلی">
          <span className="brand-word">VANTA<span className="brand-period">.</span></span>
          <small>FORM / FUNCTION / FEELING</small>
        </Link>
        <div className="header-actions">
          <button className={`icon-button ${searchOpen ? 'is-active' : ''}`} type="button" aria-label="جستجو" onClick={() => setSearchOpen((value) => !value)}><Search size={19} strokeWidth={1.6} /></button>
          <Link className="cart-link" to="/cart" aria-label={`سبد خرید، ${count} کالا`}><ShoppingBag size={19} strokeWidth={1.6} /><span>سبد</span><b key={count}>{count.toLocaleString('fa-IR')}</b></Link>
        </div>
      </div>
      {searchOpen && <form className="header-search container" onSubmit={submitSearch}>
        <Search size={18} /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جستجو در کالکشن" aria-label="جستجوی محصولات" />
        <button type="submit">جستجو <ArrowLeft size={16} /></button>
        <button className="icon-button" type="button" onClick={() => setSearchOpen(false)} aria-label="بستن جستجو"><X size={18} /></button>
      </form>}
    </header>
    {menuOpen && <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}>
      <aside className="mobile-menu" onClick={(event) => event.stopPropagation()}>
        <div className="mobile-menu-head"><Link to="/" className="brand-word" onClick={() => setMenuOpen(false)}>VANTA<span className="brand-period">.</span></Link><button className="icon-button" type="button" aria-label="بستن منو" onClick={() => setMenuOpen(false)}><X /></button></div>
        <form className="mobile-search" onSubmit={submitSearch}><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جستجوی محصولات" aria-label="جستجو" /><button type="submit" aria-label="جستجو"><Search size={18} /></button></form>
        <nav>{navItems.map((item, index) => <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowLeft size={18} /></Link>)}<Link to="/shop" onClick={() => setMenuOpen(false)}><span>05</span>همه محصولات<ArrowLeft size={18} /></Link><a href="/#story" onClick={() => setMenuOpen(false)}><span>06</span>درباره VANTA<ArrowLeft size={18} /></a></nav>
        <p className="mobile-menu-note">LESS, BUT BETTER. — VANTA</p>
      </aside>
    </div>}
  </>;
}
