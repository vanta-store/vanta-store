import { useEffect, useMemo, useState } from 'react';
import { ArrowDownWideNarrow, ArrowLeft, ChevronDown, Filter, Search, X } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products, formatNumber } from '../data/products';

const sizes = ['S', 'M', 'L', 'XL', '29', '30', '31', '32', '33', '34'];
const colors = [...new Map(products.flatMap((product) => product.colors).map((color) => [color.name, color])).values()];
const highestPrice = Math.ceil(Math.max(...products.map((product) => product.price)) / 500000) * 500000;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState(params.get('category') || 'all');
  const [query, setQuery] = useState(params.get('q') || '');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState(params.get('sort') || 'newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setCategory(params.get('category') || 'all');
    setQuery(params.get('q') || '');
    setSort(params.get('sort') || 'newest');
  }, [params]);

  const filtered = useMemo(() => {
    let result = products.filter((product) => {
      const textMatch = `${product.name} ${product.englishName} ${product.categoryLabel}`.toLowerCase().includes(query.trim().toLowerCase());
      return (category === 'all' || product.category === category)
        && textMatch
        && product.price <= maxPrice
        && (!inStockOnly || product.stock > 0)
        && (!selectedSizes.length || selectedSizes.some((size) => product.sizes.includes(size)))
        && (!selectedColors.length || selectedColors.some((color) => product.colors.some((item) => item.name === color)));
    });
    if (sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'newest') result = [...result].sort((a, b) => Number(b.isNew) - Number(a.isNew));
    return result;
  }, [category, query, selectedSizes, selectedColors, maxPrice, inStockOnly, sort]);

  const setCategoryFilter = (value) => {
    setCategory(value);
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete('category'); else next.set('category', value);
    setParams(next, { replace: true });
  };
  const toggle = (values, setter, value) => setter(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
  const clearFilters = () => {
    setCategory('all'); setQuery(''); setSort('newest'); setSelectedSizes([]); setSelectedColors([]); setMaxPrice(highestPrice); setInStockOnly(false); setParams({}, { replace: true });
  };
  const activeFilterCount = selectedSizes.length + selectedColors.length + (category !== 'all' ? 1 : 0) + (inStockOnly ? 1 : 0) + (maxPrice < highestPrice ? 1 : 0);

  return <main className="shop-page container">
    <div className="page-breadcrumb"><Link to="/">خانه</Link><span>/</span><span>فروشگاه</span></div>
    <div className="shop-title-row"><div><span className="eyebrow">THE VANTA COLLECTION / 2026</span><h1>کالکشن VANTA</h1><p>۳۹ انتخاب؛ از جین تا لایه‌های بیرونی.</p></div><div className="shop-title-side"><span>COLLECTION 01</span><strong>{formatNumber(products.length)} <small>آیتم</small></strong></div></div>
    <div className="shop-toolbar"><div className="shop-toolbar-left"><button className="filter-toggle" type="button" onClick={() => setFiltersOpen(true)}><Filter size={16} /> فیلترها <span>{formatNumber(activeFilterCount)}</span></button><span className="result-count">{formatNumber(filtered.length)} نتیجه</span></div><div className="shop-toolbar-right"><label className="shop-search"><Search size={15} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جستجو" aria-label="جستجوی محصول" />{query && <button type="button" onClick={() => setQuery('')} aria-label="پاک کردن جستجو"><X size={13} /></button>}</label><label className="sort-control"><ArrowDownWideNarrow size={15} /><select value={sort} onChange={(e) => { setSort(e.target.value); const next = new URLSearchParams(params); next.set('sort', e.target.value); setParams(next, { replace: true }); }} aria-label="مرتب‌سازی"><option value="newest">تازه‌ترین</option><option value="price-low">ارزان‌ترین</option><option value="price-high">گران‌ترین</option></select><ChevronDown size={13} /></label></div></div>
    <div className="shop-layout">
      {filtersOpen && <button type="button" className="filter-backdrop" aria-label="بستن فیلترها" onClick={() => setFiltersOpen(false)} />}
      <aside className={`filter-sidebar ${filtersOpen ? 'filter-sidebar-open' : ''}`}>
        <div className="filter-mobile-head"><strong>فیلتر کالکشن</strong><button className="icon-button" type="button" onClick={() => setFiltersOpen(false)} aria-label="بستن فیلترها"><X /></button></div>
        <div className="filter-group"><h3>دسته‌بندی</h3><button className={category === 'all' ? 'filter-option selected' : 'filter-option'} onClick={() => setCategoryFilter('all')}>همه محصولات <span>{formatNumber(products.length)}</span></button>{categories.map((item) => <button key={item.id} className={category === item.id ? 'filter-option selected' : 'filter-option'} onClick={() => setCategoryFilter(item.id)}>{item.label}<span>{formatNumber(products.filter((p) => p.category === item.id).length)}</span></button>)}</div>
        <div className="filter-group"><h3>سایز</h3><div className="size-filter-grid">{sizes.map((size) => <button type="button" key={size} onClick={() => toggle(selectedSizes, setSelectedSizes, size)} className={selectedSizes.includes(size) ? 'size-filter selected' : 'size-filter'}>{size}</button>)}</div></div>
        <div className="filter-group"><h3>رنگ</h3><div className="color-filter-list">{colors.map((color) => <button type="button" key={color.name} className={selectedColors.includes(color.name) ? 'color-filter selected' : 'color-filter'} onClick={() => toggle(selectedColors, setSelectedColors, color.name)}><i style={{ '--swatch': color.hex }} />{color.name}<span>{selectedColors.includes(color.name) ? '✓' : ''}</span></button>)}</div></div>
        <div className="filter-group"><div className="filter-price-heading"><h3>حداکثر قیمت</h3><span>{formatNumber(maxPrice)}</span></div><input className="price-range" type="range" min="1000000" max={highestPrice} step="100000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} aria-label="حداکثر قیمت" /><div className="range-limits"><span>۱ میلیون</span><span>{formatNumber(highestPrice / 1000000)} میلیون</span></div></div>
        <div className="filter-stock"><label><input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} /> فقط کالاهای موجود</label></div>
        <button className="clear-filters" type="button" onClick={clearFilters}>پاک کردن فیلترها <X size={13} /></button>
        <button type="button" className="button button-dark filter-apply" onClick={() => setFiltersOpen(false)}>نمایش {formatNumber(filtered.length)} محصول <ArrowLeft size={15} /></button>
      </aside>
      <section className="shop-results" aria-live="polite">
        {filtered.length ? <div className="product-grid">{filtered.map((product, i) => <ProductCard key={product.id} product={product} index={i} />)}</div> : <div className="empty-filter"><span>NO MATCH / 00</span><h2>چیزی پیدا نشد.</h2><p>فیلترها را تغییر بده یا جستجوی دیگری امتحان کن.</p><button className="button button-dark" type="button" onClick={clearFilters}>پاک کردن فیلترها <ArrowLeft size={16} /></button></div>}
      </section>
    </div>
  </main>;
}
