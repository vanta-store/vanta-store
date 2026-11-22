import { useState } from 'react';
import { ArrowLeft, ArrowUpLeft, Instagram, MoveUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [activeInfo, setActiveInfo] = useState('');
  const info = {
    shipping: { title: 'روش ارسال', body: 'در نسخه واقعی فروشگاه، سفارش‌ها پس از تأیید در بازه ۲ تا ۴ روز کاری آماده و به سراسر ایران ارسال می‌شوند. هزینه ارسال برای سفارش‌های بالای ۵ میلیون تومان رایگان در نظر گرفته شده است.' },
    returns: { title: 'تعویض و بازگشت', body: 'در سناریوی فروشگاه واقعی، امکان درخواست تعویض یا بازگشت کالا تا ۷ روز پس از تحویل، در صورت حفظ شرایط اولیه محصول و بسته‌بندی، پیش‌بینی شده است. این بخش در نسخه نمایشی صرفاً جهت نمایش تجربه کاربری است.' },
    size: { title: 'راهنمای سایز', body: 'برای انتخاب سایز مناسب، اندازه دور سینه و دور کمر را با جدول راهنمای سایز هر محصول مقایسه کنید. این جدول‌ها راهنمای تقریبی هستند.' }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMessage('ایمیل معتبر وارد کنید.'); return; }
    setMessage('عضویت نمایشی ثبت شد.');
    setEmail('');
  };

  return <footer className="site-footer">
    <div className="footer-top container">
      <div className="footer-big-mark">VANTA<span>.</span></div>
      <div className="footer-newsletter">
        <div><span className="eyebrow">THE VANTA LIST</span><h2>از تازه‌ها<br /><em>باخبر بمان.</em></h2></div>
        <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="newsletter-email">ایمیل</label>
          <div className="newsletter-input"><input id="newsletter-email" value={email} onChange={(e) => { setEmail(e.target.value); setMessage(''); }} placeholder="name@example.com" type="email" /><button type="submit" aria-label="عضویت در خبرنامه"><ArrowLeft size={19} /></button></div>
          <small className={message.includes('ثبت شد') ? 'form-success' : 'form-feedback'} aria-live="polite">{message || 'اطلاع از کالکشن‌های تازه، بدون شلوغی.'}</small>
        </form>
      </div>
    </div>
    <div className="footer-main container">
      <div className="footer-brand"><Link to="/" className="footer-logo">VANTA<span>.</span></Link><p>FORM / FUNCTION / FEELING</p><a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /> اینستاگرام <MoveUpRight size={13} /></a></div>
      <div className="footer-column"><h3>کالکشن</h3><Link to="/shop">همه محصولات</Link><Link to="/shop?sort=newest">تازه‌ها</Link><Link to="/shop?category=pants">شلوارها</Link><Link to="/shop?category=outerwear">کت و ژاکت</Link></div>
      <div className="footer-column"><h3>اطلاعات</h3><button type="button" onClick={() => setActiveInfo('shipping')}>ارسال</button><button type="button" onClick={() => setActiveInfo('returns')}>تعویض و بازگشت</button><button type="button" onClick={() => setActiveInfo('size')}>راهنمای سایز</button><a href="mailto:hello@vanta.example">ارتباط با ما</a></div>
      <div className="footer-contact"><span className="eyebrow">NEED A HAND?</span><a href="mailto:hello@vanta.example">hello@vanta.example <ArrowUpLeft size={14} /></a><span className="demo-disclaimer">فروشگاه نمایشی · پرداخت واقعی غیرفعال است.</span></div>
    </div>
    {activeInfo && <div className="modal-backdrop" role="presentation" onClick={() => setActiveInfo('')}><section className="footer-info-modal" role="dialog" aria-modal="true" aria-labelledby="footer-info-title" onClick={(event) => event.stopPropagation()}><div className="modal-heading"><div><span className="eyebrow">VANTA / INFORMATION</span><h2 id="footer-info-title">{info[activeInfo].title}</h2></div><button className="icon-button" type="button" onClick={() => setActiveInfo('')} aria-label="بستن"><X /></button></div><p>{info[activeInfo].body}</p><button className="button button-dark" type="button" onClick={() => setActiveInfo('')}>متوجه شدم <ArrowLeft size={16} /></button></section></div>}
    <div className="footer-bottom container"><span>© ۲۰۲۶ VANTA STUDIO</span><span>MADE FOR EVERYDAY.</span><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>بازگشت به بالا <ArrowUpLeft size={14} /></button></div>
  </footer>;
}
