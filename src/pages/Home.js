import { Link } from 'react-router-dom';

const services = [
  { icon: '🩸', title: 'الحجامة الجافة', desc: 'تنشيط الدورة الدموية وتخفيف الآلام المزمنة' },
  { icon: '💧', title: 'الحجامة الرطبة', desc: 'إزالة السموم وتنقية الدم بأيدي متخصصين' },
  { icon: '🌿', title: 'العلاج بالأعشاب', desc: 'خلطات طبيعية مختارة من الطب التقليدي' },
  { icon: '🤲', title: 'المساج العلاجي', desc: 'تخفيف التوتر العضلي وإعادة التوازن' },
];

const testimonials = [
  { name: 'أحمد بنعلي', text: 'تجربة رائعة، الحجامة خففت آلام ظهري المزمنة بشكل ملحوظ.', stars: 5 },
  { name: 'فاطمة الزهراء', text: 'فريق محترف ومكان نظيف. أنصح به بشدة لكل من يعاني من التعب المزمن.', stars: 5 },
  { name: 'يوسف أيت', text: 'عدت إلى المركز ثلاث مرات، النتائج مذهلة والخدمة ممتازة.', stars: 5 },
];

const whyUs = [
  { icon: '🏅', title: 'خبرة سنوات', desc: 'فريق متخصص مع سنوات من الخبرة في الطب البديل' },
  { icon: '🧼', title: 'معايير النظافة', desc: 'نستخدم أدوات معقمة ومعايير صحية صارمة' },
  { icon: '🤖', title: 'تقييم ذكي', desc: 'أداة AI تساعدك في معرفة مدى استفادتك من الحجامة' },
];

const contactItems = [
  { icon: '📞', label: 'اتصل بنا',        val: '+212 638 038 900', href: 'tel:+212638038900',        ltr: true },
  { icon: '💬', label: 'واتساب',           val: '+212 638 038 900', href: 'https://wa.me/212638038900', ltr: true, blank: true },
  { icon: '✉️', label: 'البريد الإلكتروني', val: 'centre.anzali@gmail.com', href: 'mailto:centre.anzali@gmail.com' },
  { icon: '📍', label: 'العنوان',          val: 'سيدي موسى كم 9، مراكش 44000', href: 'https://maps.app.goo.gl/pYBHCQcB2VF9BkZT9?g_st=ac', blank: true },
  { icon: '🕐', label: 'أوقات العمل',      val: 'يومياً: 08:00 – 22:00' },
];

export default function Home() {
  return (
    <div style={s.page}>

      {/* ── Hero ── */}
      <section style={s.hero}>
        <div style={s.heroOverlay} />
        <div style={s.heroContent}>
          <p style={s.heroSub}>مركز متخصص في مراكش</p>
          <h1 style={s.heroTitle}>
            الصحة الطبيعية تبدأ <span style={{ color: '#c9a84c' }}>هنا</span>
          </h1>
          <p style={s.heroDesc}>
            نقدم خدمات الحجامة والطب البديل بأعلى معايير النظافة والاحترافية،
            لاستعادة توازنك وعافيتك.
          </p>
          <div style={s.btnRow}>
            <Link to="/booking" style={s.btnPrimary}>احجز موعدك الآن</Link>
            <Link to="/ai-tool" style={s.btnSecondary}>هل أنا مرشح للحجامة؟</Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={s.section}>
        <div style={s.inner}>
          <span style={s.badge}>خدماتنا</span>
          <h2 style={s.sectionTitle}>ما الذي نقدمه لك؟</h2>
          <div style={s.grid}>
            {services.map((sv) => (
              <div key={sv.title} style={s.card}>
                <div style={s.cardIcon}>{sv.icon}</div>
                <h3 style={s.cardTitle}>{sv.title}</h3>
                <p style={s.cardDesc}>{sv.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/services" style={s.btnPrimary}>عرض جميع الخدمات</Link>
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section style={{ ...s.section, backgroundColor: '#f8f5ee' }}>
        <div style={s.inner}>
          <span style={s.badge}>لماذا نحن؟</span>
          <h2 style={s.sectionTitle}>ثقتك هي أساسنا</h2>
          <div style={s.grid}>
            {whyUs.map((item) => (
              <div key={item.title} style={{ ...s.card, border: '1px solid #e8dcc8' }}>
                <div style={s.cardIcon}>{item.icon}</div>
                <h3 style={s.cardTitle}>{item.title}</h3>
                <p style={s.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={s.section}>
        <div style={s.inner}>
          <span style={s.badge}>آراء عملائنا</span>
          <h2 style={s.sectionTitle}>ماذا يقولون عنا؟</h2>
          <div style={s.grid}>
            {testimonials.map((t) => (
              <div key={t.name} style={s.testimonialCard}>
                <p style={{ color: '#c9a84c', fontSize: '1.2rem', marginBottom: '12px' }}>{'★'.repeat(t.stars)}</p>
                <p style={{ color: '#cccccc', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '16px' }}>"{t.text}"</p>
                <p style={{ color: '#c9a84c', fontWeight: 'bold', fontSize: '0.9rem', margin: 0 }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section style={s.contactStrip}>
        <div style={s.contactGrid}>
          {contactItems.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.blank ? '_blank' : undefined}
                rel={item.blank ? 'noreferrer' : undefined}
                style={s.contactItem}
              >
                <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                <div>
                  <p style={s.contactLabel}>{item.label}</p>
                  <p style={{ ...s.contactVal, ...(item.ltr ? { direction: 'ltr', textAlign: 'right' } : {}) }}>
                    {item.val}
                  </p>
                </div>
              </a>
            ) : (
              <div key={item.label} style={{ ...s.contactItem, cursor: 'default' }}>
                <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                <div>
                  <p style={s.contactLabel}>{item.label}</p>
                  <p style={s.contactVal}>{item.val}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={s.cta}>
        <div style={s.ctaInner}>
          <h2 style={s.ctaTitle}>ابدأ رحلتك نحو الصحة اليوم</h2>
          <p style={s.ctaDesc}>احجز جلستك الأولى أو استشر أداة الذكاء الاصطناعي لمعرفة ما يناسبك</p>
          <div style={s.btnRow}>
            <Link to="/booking" style={s.btnPrimary}>احجز الآن</Link>
            <a href="https://wa.me/212638038900" target="_blank" rel="noreferrer"
              style={{ ...s.btnSecondary, borderColor: '#25d366', color: '#25d366' }}>
              💬 واتساب
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

const s = {
  page: {
    fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
    color: '#1a1a2e',
    direction: 'rtl',
    width: '100%',
    overflowX: 'hidden',
  },
  hero: {
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)',
  },
  heroContent: {
    position: 'relative',
    textAlign: 'center',
    color: '#fff',
    width: '100%',
    maxWidth: '700px',
    padding: '0 16px',
  },
  heroSub: {
    color: '#c9a84c',
    fontSize: 'clamp(0.75rem,2vw,0.9rem)',
    letterSpacing: '2px',
    marginBottom: '16px',
  },
  heroTitle: {
    fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
    fontWeight: 'bold',
    lineHeight: 1.3,
    marginBottom: '20px',
  },
  heroDesc: {
    fontSize: 'clamp(0.9rem,2.5vw,1.1rem)',
    color: '#cccccc',
    lineHeight: 1.8,
    marginBottom: '36px',
  },
  btnRow: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',          /* ← الأزرار تنزل تحت بعض على الموبايل */
  },
  btnPrimary: {
    backgroundColor: '#c9a84c',
    color: '#1a1a2e',
    padding: 'clamp(10px,2vw,14px) clamp(20px,4vw,32px)',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 'clamp(0.85rem,2vw,0.95rem)',
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    color: '#c9a84c',
    padding: 'clamp(9px,2vw,13px) clamp(20px,4vw,32px)',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 'clamp(0.85rem,2vw,0.95rem)',
    border: '2px solid #c9a84c',
  },
  section: {
    padding: 'clamp(40px,8vw,80px) 16px',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
    width: '100%',
  },
  badge: {
    backgroundColor: '#fef3d0',
    color: '#b8891e',
    padding: '4px 16px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
    color: '#1a1a2e',
    marginTop: '16px',
    marginBottom: '40px',
  },
  /* grid مرن يضع كل ما يتسع جنباً لجنب وما لا يتسع تحته */
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: '12px',
    padding: 'clamp(20px,4vw,32px) clamp(16px,3vw,24px)',
    border: '1px solid #f0f0f0',
    flex: '1 1 220px',         /* الحد الأدنى 220px، يتمدد ليملأ الفراغ */
    maxWidth: '300px',
    textAlign: 'center',
  },
  cardIcon: { fontSize: '2.5rem', marginBottom: '16px' },
  cardTitle: { fontSize: '1.05rem', fontWeight: 'bold', color: '#1a1a2e', marginBottom: '8px', marginTop: 0 },
  cardDesc: { color: '#666', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 },
  testimonialCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    padding: 'clamp(20px,4vw,32px) clamp(16px,3vw,24px)',
    textAlign: 'center',
    borderBottom: '3px solid #c9a84c',
    flex: '1 1 240px',
    maxWidth: '340px',
  },
  /* شريط التواصل */
  contactStrip: {
    backgroundColor: '#1a1a2e',
    padding: 'clamp(32px,6vw,48px) 16px',
    width: '100%',
  },
  contactGrid: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',          /* ← يتكدس على الموبايل */
    gap: '16px',
    justifyContent: 'center',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    color: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '12px',
    padding: '14px 20px',
    flex: '1 1 180px',         /* ← الحد الأدنى 180px بدل 200px */
    maxWidth: '260px',
  },
  contactLabel: { color: '#aaaaaa', fontSize: '0.78rem', margin: '0 0 4px' },
  contactVal: { color: '#c9a84c', fontWeight: 'bold', fontSize: '0.85rem', margin: 0 },
  cta: {
    background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
    padding: 'clamp(40px,8vw,80px) 16px',
    textAlign: 'center',
    width: '100%',
  },
  ctaInner: { maxWidth: '700px', margin: '0 auto' },
  ctaTitle: {
    color: '#ffffff',
    fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
    marginBottom: '16px',
  },
  ctaDesc: {
    color: '#aaaaaa',
    fontSize: 'clamp(0.85rem,2.5vw,1rem)',
    lineHeight: 1.8,
    marginBottom: '36px',
  },
};
