import { Check, ArrowLeft, Copy } from 'lucide-react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { formatPrice } from '../data/products';

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const location = useLocation();
  const code = params.get('code') || location.state?.orderCode || 'VN-DEMO';
  const total = location.state?.total;
  const itemCount = location.state?.itemCount;
  const copyCode = () => navigator.clipboard?.writeText(code);

  return <main className="container order-success-page"><div className="success-mark"><Check size={32} /></div><span className="eyebrow">VANTA / ORDER RECEIVED</span><h1>سفارش نمایشی<br /><em>با موفقیت ثبت شد.</em></h1><p>این یک تأییدیه آزمایشی است؛ هیچ پرداخت یا سفارش واقعی انجام نشده است.</p><div className="success-details"><div><span>کد پیگیری نمایشی</span><strong>{code} <button onClick={copyCode} aria-label="کپی کد"><Copy size={15} /></button></strong></div>{itemCount !== undefined && <div><span>تعداد اقلام</span><strong>{itemCount.toLocaleString('fa-IR')} عدد</strong></div>}{total !== undefined && <div><span>جمع سفارش</span><strong>{formatPrice(total)}</strong></div>}</div><Link to="/shop" className="button button-dark">بازگشت به فروشگاه <ArrowLeft size={18} /></Link><small>THANK YOU FOR CHOOSING VANTA.</small></main>;
}
