import { ArrowLeft, ArrowUpLeft, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products, heroImage, editorialImage } from '../data/products';

export default function Home() {
  const newArrivals = products.filter((product) => product.isNew).slice(0, 4);
  const bestSellers = products.filter((product) => product.isBest).slice(0, 3);
  const heroProduct = products.find((product) => product.slug === 'black-leather-bomber-jacket-01');
  const pantsFeature = products.find((product) => product.slug === 'dark-blue-bootcut-jeans-01');
  const henleyFeature = products.find((product) => product.slug === 'olive-ribbed-long-sleeve-henley-01');
  const editorialProduct = products.find((product) => product.slug === 'dark-brown-suede-toggle-jacket-01');

  return <main className="home-page">
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-kicker"><span /> COLLECTION 01 / 2026</div>
        <h1>فرمِ<br /><em>ماندگار.</em></h1>
        <div className="hero-meta"><span>پوشاک مردانه / ۰۱</span><span>DESIGNED TO BE WORN</span></div>
        <Link to="/shop" className="button button-dark hero-cta">کشف کالکشن <ArrowLeft size={17} /></Link>
      </div>
      <div className="hero-visual">
        <div className="hero-visual-frame"><img src={heroImage} alt="بامبر چرم مشکی VANTA" fetchPriority="high" /></div>
        <div className="hero-visual-index"><span>01</span><i /> <span>39</span></div>
        <div className="hero-product-tag"><span>THE NEW FORM</span><strong>{heroProduct?.englishName}</strong><Link to={`/product/${heroProduct?.slug}`} aria-label="مشاهده بامبر چرم"><ArrowUpLeft size={17} /></Link></div>
        <div className="hero-floating-card"><img src={pantsFeature?.images[0]} alt="شلوار بوت‌کات" /><span>01 / BOTTOMS</span></div>
      </div>
      <span className="hero-vertical-note">VANTA STUDIO — EST. 2026</span>
      <div className="hero-scroll-cue"><span /> SCROLL TO EXPLORE</div>
    </section>

    <div className="manifesto-strip"><span>FORM</span><i /> <span>FUNCTION</span><i /> <span>FEELING</span><b>V.</b></div>

    <section className="section-block container arrivals-section">
      <div className="section-heading"><div><span className="eyebrow">01 / LATEST ARRIVALS</span><h2>تازه‌واردها</h2></div><Link className="text-link" to="/shop?sort=newest">همه محصولات <ArrowLeft size={16} /></Link></div>
      <div className="product-grid">{newArrivals.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}</div>
    </section>

    <section className="category-section">
      <div className="container">
        <div className="section-heading section-heading-light"><div><span className="eyebrow">02 / SHOP BY FORM</span><h2>بر اساس فرم انتخاب کن.</h2></div><span className="category-count">05 CATEGORIES</span></div>
        <div className="category-grid">{categories.map((category, i) => <Link to={`/shop?category=${category.id}`} className="category-card" key={category.id}>
          <div className="category-image"><img src={category.image} alt={category.label} loading="lazy" /></div>
          <div className="category-overlay"><span className="category-number">0{i + 1}</span><div><small>{category.english}</small><h3>{category.label}</h3></div><span className="category-arrow"><ArrowUpLeft size={18} /></span></div>
        </Link>)}</div>
      </div>
    </section>

    <section className="section-block container edit-section">
      <div className="section-heading"><div><span className="eyebrow">03 / THE VANTA EDIT</span><h2>انتخاب‌های دقیق.</h2></div><span className="section-side-label">A STUDY IN SILHOUETTE</span></div>
      <div className="edit-layout">
        <Link to={`/product/${editorialProduct?.slug}`} className="edit-main-visual"><img src={editorialImage} alt="کت جیر قهوه‌ای VANTA" loading="lazy" /><span className="edit-image-label">OUTERWEAR / 01</span><span className="edit-main-arrow"><ArrowUpLeft /></span></Link>
        <div className="edit-side">
          <div className="edit-copy"><span className="eyebrow">VANTA / OBJECTS</span><h3>کمتر،<br /><em>دقیق‌تر.</em></h3><Link to="/shop" className="underlined-link">مشاهده انتخاب‌ها <MoveUpRight size={15} /></Link></div>
          <Link to={`/product/${henleyFeature?.slug}`} className="edit-small-visual"><img src={henleyFeature?.images[0]} alt="هنلی زیتونی" loading="lazy" /><span>THE EVERYDAY LAYER <ArrowUpLeft size={15} /></span></Link>
        </div>
      </div>
    </section>

    <section className="best-section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">04 / SIGNATURE PIECES</span><h2>امضای VANTA.</h2></div><Link className="text-link" to="/shop">کالکشن کامل <ArrowLeft size={16} /></Link></div>
        <div className="best-grid">{bestSellers.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}</div>
      </div>
    </section>

    <section className="story-panel container" id="story">
      <div className="story-mark">V.</div>
      <div className="story-content"><span className="eyebrow">05 / THE VANTA POINT OF VIEW</span><h2>لباس،<br /><em>بدون اضافه‌گویی.</em></h2><Link to="/shop" className="button button-light">ورود به فروشگاه <ArrowLeft size={17} /></Link></div>
      <div className="story-image"><img src={pantsFeature?.images[0]} alt="جین بوت‌کات دارک بلو" loading="lazy" /><span>BUILT AROUND THE EVERYDAY</span></div>
    </section>
  </main>;
}
