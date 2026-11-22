import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice, formatNumber } from '../data/products';
import { useCart } from '../context/CartContext';

const shippingFee = 120000;
export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const shipping = subtotal === 0 || subtotal >= 5000000 ? 0 : shippingFee;
  const total = subtotal + shipping;

  if (!items.length) return <main className="container cart-page"><div className="page-breadcrumb"><Link to="/">خانه</Link><span>/</span><span>سبد خرید</span></div><div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={30} strokeWidth={1.2} /></div><span className="eyebrow">YOUR BAG IS WAITING</span><h1>سبدت هنوز خالیه.</h1><p>چند انتخاب درست، شروع یک استایل خوبه.</p><Link to="/shop" className="button button-dark">رفتن به فروشگاه <ArrowLeft size={17} /></Link><span className="empty-cart-code">VANTA / 00</span></div></main>;

  return <main className="container cart-page"><div className="page-breadcrumb"><Link to="/">خانه</Link><span>/</span><span>سبد خرید</span></div><div className="cart-heading"><div><span className="eyebrow">YOUR SELECTION / 01</span><h1>سبد خرید</h1><p>{formatNumber(items.length)} مدل انتخاب‌شده · {formatNumber(items.reduce((sum, item) => sum + item.quantity, 0))} عدد</p></div><Link className="text-link" to="/shop">ادامه خرید <ArrowLeft size={17} /></Link></div>
    <div className="cart-layout"><section className="cart-items">{items.map((item) => <article className="cart-item" key={item.key}><Link to={`/product/${item.slug}`} className="cart-item-image"><img src={item.image} alt={item.name} loading="lazy" onError={(e) => e.currentTarget.classList.add('image-unavailable')} /></Link><div className="cart-item-info"><span className="product-english">{item.englishName}</span><Link to={`/product/${item.slug}`}><h2>{item.name}</h2></Link><p>رنگ: {item.color} <span>·</span> سایز: {item.size}</p><strong>{formatPrice(item.price)}</strong></div><div className="cart-item-actions"><div className="quantity-control"><button onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="کم کردن تعداد"><Minus size={14} /></button><span>{formatNumber(item.quantity)}</span><button onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="افزایش تعداد" disabled={item.quantity >= 10}><Plus size={14} /></button></div><button className="remove-item" onClick={() => removeItem(item.key)}><Trash2 size={15} /> حذف</button><strong className="line-total">{formatPrice(item.price * item.quantity)}</strong></div></article>)}</section>
      <aside className="order-summary"><span className="eyebrow">ORDER SUMMARY</span><h2>خلاصه سفارش</h2><div className="summary-line"><span>جمع محصولات</span><strong>{formatPrice(subtotal)}</strong></div><div className="summary-line"><span>هزینه ارسال</span><strong>{shipping === 0 ? 'رایگان' : formatPrice(shipping)}</strong></div>{subtotal < 5000000 && <div className="shipping-progress"><div className="shipping-progress-bar"><span style={{ width: `${Math.min(100, (subtotal / 5000000) * 100)}%` }} /></div><small>{formatPrice(5000000 - subtotal)} تا ارسال رایگان</small></div>}<div className="summary-total"><span>مبلغ قابل پرداخت</span><strong>{formatPrice(total)}</strong></div><Link to="/checkout" className="button button-dark checkout-button">ادامه و ثبت سفارش <ArrowLeft size={18} /></Link><p className="summary-disclaimer">این فروشگاه صرفاً یک نمونه نمایشی است و پرداخت واقعی انجام نمی‌شود.</p><div className="summary-secure"><ShoppingBag size={15} /> خرید ساده، انتخاب مطمئن</div></aside>
    </div>
  </main>;
}
