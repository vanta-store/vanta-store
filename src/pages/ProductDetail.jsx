import { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Minus, Plus, Ruler, ShoppingBag, Truck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const { addItem } = useCart();

  useEffect(() => {
    setActiveImage(0);
    setSelectedColor(product?.colors[0]?.name || '');
    setSelectedSize('');
    setQuantity(1);
    setFeedback('');
  }, [slug]);

  if (!product) return <main className="container not-found"><span className="eyebrow">404 / NOT FOUND</span><h1>این محصول پیدا نشد.</h1><Link to="/shop" className="button button-dark">بازگشت به فروشگاه</Link></main>;

  const addToCart = () => {
    if (!selectedSize) { setFeedback('لطفاً سایز مورد نظرت رو انتخاب کن.'); return; }
    if (!selectedColor) { setFeedback('لطفاً رنگ محصول رو انتخاب کن.'); return; }
    addItem(product, selectedSize, selectedColor, quantity);
    setFeedback('به سبد خرید اضافه شد.');
  };
  const related = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);
  const recommendations = related.length >= 3 ? related : [...related, ...products.filter((item) => item.id !== product.id && !related.some((p) => p.id === item.id))].slice(0, 3);

  return <main className="product-detail-page container">
    <div className="page-breadcrumb"><Link to="/">خانه</Link><span>/</span><Link to="/shop">فروشگاه</Link><span>/</span><span>{product.name}</span></div>
    <div className="product-detail-layout">
      <div className="product-gallery">
        <div className="product-main-image"><img src={product.images[activeImage]} alt={`${product.name} - تصویر ${activeImage + 1}`} />{product.isNew && <span className="product-badge">تازه رسیده</span>}<span className="image-index">0{activeImage + 1} / 0{product.images.length}</span></div>
        {product.images.length > 1 && <div className="product-thumbnails">{product.images.map((image, index) => <button key={image} className={activeImage === index ? 'thumbnail active' : 'thumbnail'} onClick={() => setActiveImage(index)} aria-label={`نمایش تصویر ${index + 1}`}><img src={image} alt="" loading="lazy" /></button>)}</div>}
      </div>
      <section className="product-detail-info">
        <span className="eyebrow">VANTA / {product.englishName}</span><h1>{product.name}</h1><span className="detail-category">{product.categoryLabel} <span>—</span> کد محصول: {product.id.toUpperCase()}</span>
        <div className="detail-price">{formatPrice(product.price)}{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div>
        <p className="detail-description">{product.description}</p>
        <div className="detail-rule" />
        <div className="detail-choice-head"><strong>رنگ</strong><span>{selectedColor}</span></div>
        <div className="detail-color-options">{product.colors.map((color) => <button key={color.name} className={selectedColor === color.name ? 'detail-color selected' : 'detail-color'} onClick={() => { setSelectedColor(color.name); setFeedback(''); }} title={color.name} aria-label={`انتخاب رنگ ${color.name}`}><i style={{ '--swatch': color.hex }} />{selectedColor === color.name && <Check size={13} />}</button>)}</div>
        <div className="detail-choice-head size-choice-head"><strong>سایز</strong><button onClick={() => setSizeGuideOpen(true)}><Ruler size={15} /> راهنمای سایز</button></div>
        <div className="detail-size-options">{product.sizes.map((size) => <button key={size} className={selectedSize === size ? 'detail-size selected' : 'detail-size'} onClick={() => { setSelectedSize(size); setFeedback(''); }}>{size}</button>)}</div>
        <div className="availability-line"><span className={product.stock > 0 ? 'availability-dot' : 'availability-dot unavailable'} />{product.stock > 0 ? `موجود در انبار · ${product.stock <= 5 ? `تنها ${product.stock.toLocaleString('fa-IR')} عدد باقی مانده` : 'آماده ارسال'}` : 'ناموجود'}</div>
        <div className="purchase-row"><div className="quantity-control"><button aria-label="کم کردن تعداد" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={15} /></button><span>{quantity.toLocaleString('fa-IR')}</span><button aria-label="اضافه کردن تعداد" onClick={() => setQuantity(Math.min(10, quantity + 1))}><Plus size={15} /></button></div><button className="button button-dark add-to-cart" onClick={addToCart} disabled={product.stock === 0}><ShoppingBag size={18} /> افزودن به سبد خرید</button></div>
        {feedback && <p className={feedback.includes('اضافه') ? 'detail-feedback success' : 'detail-feedback'} aria-live="polite">{feedback}</p>}
        <div className="delivery-note"><Truck size={19} /><div><strong>ارسال به سراسر ایران</strong><span>زمان آماده‌سازی و ارسال: ۲ تا ۴ روز کاری</span></div><ChevronDown size={16} /></div>
        <div className="product-specs"><div><span>جنس پارچه</span><strong>{product.fabric}</strong></div><div><span>فرم لباس</span><strong>{product.fit}</strong></div><div><span>شناسه</span><strong>{product.id.toUpperCase()}</strong></div></div>
      </section>
    </div>
    {recommendations.length > 0 && <section className="section-block related-section"><div className="section-heading"><div><span className="eyebrow">YOU MAY ALSO LIKE</span><h2>این‌ها هم بهت میان</h2></div><Link to="/shop" className="text-link">همه محصولات <ArrowRight size={17} /></Link></div><div className="product-grid">{recommendations.map((item, i) => <ProductCard key={item.id} product={item} index={i} />)}</div></section>}
    {sizeGuideOpen && <div className="modal-backdrop" role="presentation" onClick={() => setSizeGuideOpen(false)}><section className="size-modal" role="dialog" aria-modal="true" aria-labelledby="size-modal-title" onClick={(e) => e.stopPropagation()}><div className="modal-heading"><div><span className="eyebrow">FIND YOUR FIT</span><h2 id="size-modal-title">راهنمای سایز</h2></div><button className="icon-button" onClick={() => setSizeGuideOpen(false)} aria-label="بستن"><ArrowRight /></button></div><p>برای انتخاب دقیق‌تر، اندازه‌های خودت رو با جدول زیر مقایسه کن. این جدول راهنمای تقریبی سایزبندی VANTA است.</p>{product.category === 'pants' ? <table className="size-table"><thead><tr><th>سایز شلوار</th><th>دور کمر (cm)</th><th>دور باسن (cm)</th><th>قد داخل پا (cm)</th></tr></thead><tbody><tr><td>29</td><td>۷۴</td><td>۹۲</td><td>۸۱</td></tr><tr><td>30</td><td>۷۶</td><td>۹۴</td><td>۸۱</td></tr><tr><td>31</td><td>۷۹</td><td>۹۷</td><td>۸۲</td></tr><tr><td>32</td><td>۸۱</td><td>۹۹</td><td>۸۲</td></tr><tr><td>33</td><td>۸۴</td><td>۱۰۲</td><td>۸۳</td></tr><tr><td>34</td><td>۸۶</td><td>۱۰۴</td><td>۸۳</td></tr></tbody></table> : <table className="size-table"><thead><tr><th>سایز</th><th>دور سینه (cm)</th><th>دور کمر (cm)</th><th>قد پیشنهادی</th></tr></thead><tbody><tr><td>S</td><td>۹۰–۹۶</td><td>۷۴–۸۰</td><td>۱۶۵–۱۷۵</td></tr><tr><td>M</td><td>۹۶–۱۰۲</td><td>۸۰–۸۶</td><td>۱۷۰–۱۸۰</td></tr><tr><td>L</td><td>۱۰۲–۱۰۸</td><td>۸۶–۹۲</td><td>۱۷۵–۱۸۵</td></tr><tr><td>XL</td><td>۱۰۸–۱۱۴</td><td>۹۲–۹۸</td><td>۱۸۰–۱۹۰</td></tr></tbody></table>}<small>اندازه‌ها تقریبی هستند و ممکن است با توجه به مدل لباس کمی تفاوت داشته باشند.</small></section></div>}
  </main>;
}
