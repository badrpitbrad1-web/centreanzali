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

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <p style={styles.heroSub}>مركز متخصص في مراكش</p>
          <h1 style={styles.heroTitle}>
            الصحة الطبيعية تبدأ <span style={styles.gold}>هنا</span>
          </h1>
          <p style={styles.heroDesc}>
            نقدم خدمات الحجامة والطب البديل بأعلى معايير النظافة والاحترافية،
            لاستعادة توازنك وعافيتك.
          </p>
          <div style={styles.heroBtns}>
            <Link to="/booking" style={styles.btnPrimary}>احجز موعدك الآن</Link>
            <Link to="/ai-tool" style={styles.btnSecondary}>هل أنا مرشح للحجامة؟</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <span style={styles.badge}>خدماتنا</span>
          <h2 style={styles.sectionTitle}>ما الذي نقدمه لك؟</h2>
          <div style={styles.grid4}>
            {services.map((s) => (
              <div key={s.title} style={styles.card}>
                <div style={styles.cardIcon}>{s.icon}</div>
                <h3 style={styles.cardTitle}>{s.title}</h3>
                <p style={styles.cardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/services" style={styles.btnPrimary}>عرض جميع الخدمات</Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ ...styles.section, backgroundColor: '#f8f5ee' }}>
        <div style={styles.sectionInner}>
          <span style={styles.badge}>لماذا نحن؟</span>
          <h2 style={styles.sectionTitle}>ثقتك هي أساسنا</h2>
          <div style={styles.grid3}>
            {[
              { icon: '🏅', title: 'خبرة سنوات', desc: 'فريق متخصص مع سنوات من الخبرة في الطب البديل' },
              { icon: '🧼', title: 'معايير النظافة', desc: 'نستخدم أدوات معقمة ومعايير صحية صارمة' },
              { icon: '🤖', title: 'تقييم ذكي', desc: 'أداة AI تساعدك في معرفة مدى استفادتك من الحجامة' },
            ].map((item) => (
              <div key={item.title} style={{ ...styles.card, border: '1px solid #e8dcc8' }}>
                <div style={styles.cardIcon}>{item.icon}</div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <span style={styles.badge}>آراء عملائنا</span>
          <h2 style={styles.sectionTitle}>ماذا يقولون عنا؟</h2>
          <div style={styles.grid3}>
            {testimonials.map((t) => (
              <div key={t.name} style={styles.testimonialCard}>
                <p style={styles.stars}>{'★'.repeat(t.stars)}</p>
                <p style={styles.testimonialText}>"{t.text}"</p>
                <p style={styles.testimonialName}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section style={styles.contactStrip}>
        <div style={styles.contactGrid}>
          <a href="tel:+212638038900" style={styles.contactItem}>
            <span style={styles.contactIcon}>📞</span>
            <div>
              <p style={styles.contactLabel}>اتصل بنا</p>
              <p style={{ ...styles.contactVal, direction: 'ltr', textAlign: 'right' }}>+212 638 038 900</p>
            </div>
          </a>
          <a href="https://wa.me/212638038900" target="_blank" rel="noreferrer" style={styles.contactItem}>
            <span style={styles.contactIcon}>💬</span>
            <div>
              <p style={styles.contactLabel}>واتساب</p>
              <p style={{ ...styles.contactVal, direction: 'ltr', textAlign: 'right' }}>+212 638 038 900</p>
            </div>
          </a>
          <a href="mailto:centre.anzali@gmail.com" style={styles.contactItem}>
            <span style={styles.contactIcon}>✉️</span>
            <div>
              <p style={styles.contactLabel}>البريد الإلكتروني</p>
              <p style={styles.contactVal}>centre.anzali@gmail.com</p>
            </div>
          </a>
          <a href="https://maps.app.goo.gl/pYBHCQcB2VF9BkZT9?g_st=ac" target="_blank" rel="noreferrer" style={styles.contactItem}>
            <span style={styles.contactIcon}>📍</span>
            <div>
              <p style={styles.contactLabel}>العنوان</p>
              <p style={styles.contactVal}>سيدي موسى كم 9، مراكش 44000</p>
            </div>
          </a>
          <div style={{ ...styles.contactItem, cursor: 'default' }}>
            <span style={styles.contactIcon}>🕐</span>
            <div>
              <p style={styles.contactLabel}>أوقات العمل</p>
              <p style={styles.contactVal}>يومياً: 08:00 – 22:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>ابدأ رحلتك نحو الصحة اليوم</h2>
          <p style={styles.ctaDesc}>احجز جلستك الأولى أو استشر أداة الذكاء الاصطناعي لمعرفة ما يناسبك</p>
          <div style={styles.heroBtns}>
            <Link to="/booking" style={styles.btnPrimary}>احجز الآن</Link>
            <a
              href="https://wa.me/212638038900"
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.btnSecondary, borderColor: '#25d366', color: '#25d366' }}
            >
              💬 واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, 'Arabic UI Text', sans-serif",
    color: '#1a1a2e',
    direction: 'rtl',
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
    maxWidth: '700px',
    padding: '0 24px',
  },
  heroSub: {
    color: '#c9a84c',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    lineHeight: 1.3,
    marginBottom: '20px',
  },
  gold: { color: '#c9a84c' },
  heroDesc: {
    fontSize: '1.1rem',
    color: '#cccccc',
    lineHeight: 1.8,
    marginBottom: '36px',
  },
  heroBtns: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    backgroundColor: '#c9a84c',
    color: '#1a1a2e',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    transition: 'opacity 0.2s',
  },
  btnSecondary: {
    backgroundColor: 'transparent',
    color: '#c9a84c',
    padding: '13px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    border: '2px solid #c9a84c',
  },
  section: {
    padding: '80px 0',
    backgroundColor: '#ffffff',
  },
  sectionInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    textAlign: 'center',
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
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
    color: '#1a1a2e',
    marginTop: '16px',
    marginBottom: '48px',
  },
  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: '12px',
    padding: '32px 24px',
    border: '1px solid #f0f0f0',
    transition: 'box-shadow 0.2s',
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: '8px',
  },
  cardDesc: {
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: 1.7,
    margin: 0,
  },
  testimonialCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: '12px',
    padding: '32px 24px',
    textAlign: 'center',
    borderBottom: '3px solid #c9a84c',
  },
  stars: {
    color: '#c9a84c',
    fontSize: '1.2rem',
    marginBottom: '12px',
  },
  testimonialText: {
    color: '#cccccc',
    fontSize: '0.95rem',
    lineHeight: 1.8,
    marginBottom: '16px',
  },
  testimonialName: {
    color: '#c9a84c',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    margin: 0,
  },
  contactStrip: {
    backgroundColor: '#1a1a2e',
    padding: '48px 24px',
  },
  contactGrid: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    textDecoration: 'none',
    color: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(201,168,76,0.3)',
    borderRadius: '12px',
    padding: '16px 24px',
    minWidth: '200px',
  },
  contactIcon: { fontSize: '1.8rem' },
  contactLabel: { color: '#aaaaaa', fontSize: '0.8rem', margin: '0 0 4px' },
  contactVal: { color: '#c9a84c', fontWeight: 'bold', fontSize: '0.9rem', margin: 0 },
  cta: {
    background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
    padding: '80px 0',
    textAlign: 'center',
  },
  ctaInner: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '0 24px',
  },
  ctaTitle: {
    color: '#ffffff',
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
    marginBottom: '16px',
  },
  ctaDesc: {
    color: '#aaaaaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: '36px',
  },
};
