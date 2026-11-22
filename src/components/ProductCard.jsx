import { ArrowUpLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, index = 0 }) {
  return <article className="product-card" style={{ '--card-index': index }}>
    <Link className="product-card-image" to={`/product/${product.slug}`} aria-label={`مشاهده ${product.name}`}>
      <img src={product.images[0]} alt={product.name} loading="lazy" />
      <span className="product-card-code">{product.id.toUpperCase()}</span>
      {product.isNew && <span className="product-badge">NEW DROP</span>}
      <span className="product-card-arrow"><ArrowUpLeft size={19} strokeWidth={1.5} /></span>
    </Link>
    <div className="product-card-info">
      <div className="product-card-title">
        <span className="product-category">{product.categoryLabel}</span>
        <Link to={`/product/${product.slug}`}><h3>{product.name}</h3></Link>
        <span className="product-english">{product.englishName}</span>
      </div>
      <div className="product-card-price"><strong>{formatPrice(product.price)}</strong>{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div>
    </div>
    <div className="product-card-bottom">
      <div className="swatch-row" aria-label={`رنگ ${product.colors[0].name}`}><span title={product.colors[0].name} style={{ '--swatch': product.colors[0].hex }} /></div>
      <span className={product.stock > 0 ? 'catalog-stock' : 'catalog-stock out'}>{product.stock > 0 ? 'موجود' : 'ناموجود'}</span>
      <Link to={`/product/${product.slug}`} className="quick-view">جزئیات <ArrowUpLeft size={14} /></Link>
    </div>
  </article>;
}
