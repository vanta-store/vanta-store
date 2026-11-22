import { useMemo, useState } from 'react';
import { ArrowLeft, Check, ClipboardCheck, LockKeyhole, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

const initialForm = { fullName: '', phone: '', province: '', city: '', address: '', postalCode: '', notes: '' };
const phonePattern = /^09\d{9}$/;
const postalPattern = /^\d{10}$/;
const normalizeDigits = (value) => value.replace(/[۰-۹٠-٩]/g, (digit) => {
  const persianIndex = '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit);
  return String(persianIndex >= 0 ? persianIndex : '٠١٢٣٤٥٦٧٨٩'.indexOf(digit));
});

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const shipping = subtotal >= 5000000 ? 0 : 120000;
  const total = subtotal + shipping;
  const [submitting, setSubmitting] = useState(false);
  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const next = {};
    if (form.fullName.trim().length < 3) next.fullName = 'نام و نام خانوادگی را کامل وارد کنید.';
    if (!phonePattern.test(normalizeDigits(form.phone.trim()))) next.phone = 'شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد.';
    if (form.province.trim().length < 2) next.province = 'استان را وارد کنید.';
    if (form.city.trim().length < 2) next.city = 'شهر را وارد کنید.';
    if (form.address.trim().length < 10) next.address = 'آدرس باید حداقل ۱۰ کاراکتر باشد.';
    if (!postalPattern.test(normalizeDigits(form.postalCode.trim()))) next.postalCode = 'کد پستی باید ۱۰ رقم باشد.';
    return next;
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (!items.length) { navigate('/cart'); return; }
    setSubmitting(true);

    const orderCode = `VN-${Date.now().toString().slice(-7)}`;
    clearCart();
    navigate(`/order-success?code=${orderCode}`, { state: { orderCode, itemCount, total } });
  };

  if (!items.length) return <main className="container checkout-page"><div className="empty-cart"><span className="eyebrow">NO ITEMS / 00</span><h1>سبد خرید خالی است.</h1><p>برای ادامه، اول محصولی انتخاب کن.</p><Link to="/shop" className="button button-dark">مشاهده محصولات <ArrowLeft size={17} /></Link></div></main>;

  return <main className="container checkout-page"><div className="page-breadcrumb"><Link to="/">خانه</Link><span>/</span><Link to="/cart">سبد خرید</Link><span>/</span><span>تسویه‌حساب نمایشی</span></div>
    <div className="checkout-heading"><span className="eyebrow">THE LAST STEP / 02</span><h1>ثبت سفارش</h1><p>اطلاعات ارسال را وارد کن تا سفارش نمایشی تکمیل شود.</p></div>
    <div className="checkout-demo-banner"><LockKeyhole size={18} /><div><strong>محیط آزمایشی VANTA</strong><span>در این نسخه هیچ پرداختی انجام نمی‌شود و اطلاعات شما به سرور ارسال نخواهد شد.</span></div></div>
    <div className="checkout-layout"><form className="checkout-form" onSubmit={submit} noValidate>
      <section className="form-section"><div className="form-section-heading"><span>01</span><div><h2>اطلاعات گیرنده</h2><p>مشخصات فردی که سفارش را تحویل می‌گیرد.</p></div></div><div className="form-fields"><label className="field full-field">نام و نام خانوادگی *<input value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="مثلاً آرش محمدی" autoComplete="name" />{errors.fullName && <small>{errors.fullName}</small>}</label><label className="field">شماره موبایل *<input dir="ltr" inputMode="numeric" value={form.phone} onChange={(e) => update('phone', normalizeDigits(e.target.value).replace(/[^0-9]/g, '').slice(0, 11))} placeholder="09123456789" autoComplete="tel" />{errors.phone && <small>{errors.phone}</small>}</label><label className="field">کد پستی *<input dir="ltr" inputMode="numeric" value={form.postalCode} onChange={(e) => update('postalCode', normalizeDigits(e.target.value).replace(/[^0-9]/g, '').slice(0, 10))} placeholder="1234567890" autoComplete="postal-code" />{errors.postalCode && <small>{errors.postalCode}</small>}</label></div></section>
      <section className="form-section"><div className="form-section-heading"><span>02</span><div><h2>آدرس تحویل</h2><p>آدرس دقیق برای ارسال سفارش.</p></div></div><div className="form-fields"><label className="field">استان *<input value={form.province} onChange={(e) => update('province', e.target.value)} placeholder="استان" autoComplete="address-level1" />{errors.province && <small>{errors.province}</small>}</label><label className="field">شهر *<input value={form.city} onChange={(e) => update('city', e.target.value)} placeholder="شهر" autoComplete="address-level2" />{errors.city && <small>{errors.city}</small>}</label><label className="field full-field">آدرس کامل *<textarea rows="3" value={form.address} onChange={(e) => update('address', e.target.value)} placeholder="خیابان، کوچه، پلاک، واحد..." autoComplete="street-address" />{errors.address && <small>{errors.address}</small>}</label><label className="field full-field">توضیحات سفارش <textarea rows="2" value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="توضیحات تکمیلی (اختیاری)" /></label></div></section>
      <div className="shipping-method"><Truck size={21} /><div><strong>ارسال استاندارد</strong><span>تحویل تقریبی ۲ تا ۴ روز کاری پس از آماده‌سازی</span></div><b>{shipping ? formatPrice(shipping) : 'رایگان'}</b></div>
      <button className="button button-dark submit-order" type="submit" disabled={submitting}><ClipboardCheck size={18} /> ثبت سفارش نمایشی <ArrowLeft size={18} /></button>
      <p className="checkout-privacy">با ثبت سفارش، صرفاً یک تأییدیه نمایشی ساخته می‌شود؛ اطلاعات پرداخت دریافت نمی‌شود.</p>
    </form>
    <aside className="order-summary checkout-summary"><span className="eyebrow">YOUR ORDER</span><h2>سفارش تو</h2><div className="checkout-items">{items.map((item) => <div className="checkout-item" key={item.key}><div className="checkout-item-thumb"><img src={item.image} alt={item.name} loading="lazy" /></div><div><strong>{item.name}</strong><small>{item.color} · سایز {item.size} · {item.quantity.toLocaleString('fa-IR')} عدد</small></div><b>{formatPrice(item.price * item.quantity)}</b></div>)}</div><div className="summary-line"><span>جمع محصولات</span><strong>{formatPrice(subtotal)}</strong></div><div className="summary-line"><span>ارسال</span><strong>{shipping ? formatPrice(shipping) : 'رایگان'}</strong></div><div className="summary-total"><span>مبلغ کل</span><strong>{formatPrice(total)}</strong></div><div className="checkout-demo-note"><Check size={16} /> پرداخت آنلاین در این نسخه فعال نیست.</div></aside></div>
  </main>;
}
