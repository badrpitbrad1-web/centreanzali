import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🩸',
    title: 'الحجامة الجافة',
    desc: 'تستخدم كؤوساً توضع على الجلد لخلق ضغط سلبي يُحفّز الدورة الدموية ويُخفف آلام العضلات والمفاصل.',
    benefits: ['تخفيف آلام الظهر', 'تحسين الدورة الدموية', 'إزالة الإجهاد العضلي'],
    duration: '30 دقيقة',
    price: 'من 150 درهم',
  },
  {
    icon: '💧',
    title: 'الحجامة الرطبة',
    desc: 'تجمع بين الكؤوس وشقوق سطحية صغيرة لإخراج الدم الراكد وتنقيته، طريقة تقليدية معروفة منذ قرون.',
    benefits: ['تنقية الدم', 'تعزيز المناعة', 'علاج الصداع المزمن'],
    duration: '45 دقيقة',
    price: 'من 250 درهم',
  },
  {
    icon: '🔥',
    title: 'الحجامة بالنار',
    desc: 'تستخدم اللهب لخلق فراغ داخل الكأس الزجاجية قبل وضعها على الجلد، مناسبة لآلام المفاصل والروماتيزم.',
    benefits: ['علاج الروماتيزم', 'تخفيف توتر العمود الفقري', 'تنشيط الطاقة'],
    duration: '40 دقيقة',
    price: 'من 200 درهم',
  },
  {
    icon: '🌿',
    title: 'العلاج بالأعشاب',
    desc: 'خلطات عشبية طبيعية مختارة بعناية من الطب التقليدي المغربي والإسلامي لعلاج أمراض متعددة.',
    benefits: ['علاج طبيعي 100%', 'لا آثار جانبية', 'تعزيز الجهاز الهضمي'],
    duration: '20 دقيقة استشارة',
    price: 'من 100 درهم',
  },
  {
    icon: '🤲',
    title: 'المساج العلاجي',
    desc: 'تقنيات مساج متخصصة تستهدف المناطق المتأثرة لتخفيف التوتر وإعادة التوازن لجسمك.',
    benefits: ['إزالة التوتر', 'تحسين النوم', 'تنشيط اللمفاوي'],
    duration: '60 دقيقة',
    price: 'من 180 درهم',
  },
  {
    icon: '🧘',
    title: 'جلسات الاسترخاء',
    desc: 'جلسات متكاملة تجمع بين تقنيات التنفس والاسترخاء العميق لإعادة الطاقة الإيجابية لجسمك وعقلك.',
    benefits: ['تقليل القلق', 'تحسين التركيز', 'راحة نفسية عميقة'],
    duration: '45 دقيقة',
    price: 'من 120 درهم',
  },
];

export default function Services() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <div style={styles.headerInner}>
          <span style={styles.badge}>خدماتنا</span>
          <h1 style={styles.title}>علاجات متخصصة لصحتك</h1>
          <p style={styles.subtitle}>
            نقدم مجموعة متكاملة من خدمات الطب البديل بأعلى معايير الجودة والأمان
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={styles.section}>
        <div style={styles.inner}>
          <div style={styles.grid}>
            {services.map((s) => (
              <div key={s.title} style={styles.card}>
                <div style={styles.cardTop}>
                  <span style={styles.icon}>{s.icon}</span>
                  <div>
                    <h2 style={styles.cardTitle}>{s.title}</h2>
                    <p style={styles.cardDesc}>{s.desc}</p>
                  </div>
                </div>

                <ul style={styles.benefits}>
                  {s.benefits.map((b) => (
                    <li key={b} style={styles.benefitItem}>
                      <span style={styles.checkmark}>✓</span> {b}
                    </li>
                  ))}
                </ul>

                <div style={styles.cardFooter}>
                  <div>
                    <span style={styles.metaLabel}>المدة: </span>
                    <span style={styles.metaVal}>{s.duration}</span>
                  </div>
                  <div>
                    <span style={styles.price}>{s.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/booking" style={styles.btn}>احجز موعدك الآن</Link>
          </div>
        </div>
      </section>

      {/* Note */}
      <section style={styles.note}>
        <div style={styles.noteInner}>
          <p>
            ⚠️ <strong>تنبيه طبي:</strong> يرجى استشارة طبيبك قبل البدء بأي علاج خاصة إذا كنت تعاني من أمراض مزمنة.
            فريقنا موجود للإجابة على جميع استفساراتك.
          </p>
          <Link to="/ai-tool" style={styles.aiLink}>جرب أداتنا الذكية لمعرفة هل أنت مرشح ←</Link>
          <div style={styles.contactLinks}>
            <a href="tel:+212638038900" style={{ ...styles.contactLink, direction: 'ltr', textAlign: 'right' }}>📞 +212 638 038 900</a>
            <a href="https://wa.me/212638038900" target="_blank" rel="noreferrer" style={styles.contactLink}>💬 واتساب</a>
            <a href="mailto:centre.anzali@gmail.com" style={styles.contactLink}>✉️ centre.anzali@gmail.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
    direction: 'rtl',
    color: '#1a1a2e',
  },
  header: {
    background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    padding: '80px 24px',
    textAlign: 'center',
  },
  headerInner: { maxWidth: '700px', margin: '0 auto' },
  badge: {
    backgroundColor: 'rgba(201,168,76,0.2)',
    color: '#c9a84c',
    padding: '4px 16px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
  },
  title: {
    color: '#ffffff',
    fontSize: 'clamp(1.8rem, 4vw, 3rem)',
    marginTop: '16px',
    marginBottom: '16px',
  },
  subtitle: {
    color: '#aaaaaa',
    fontSize: '1rem',
    lineHeight: 1.8,
    margin: 0,
  },
  section: { padding: '80px 0', backgroundColor: '#f9f7f2' },
  inner: { maxWidth: '1100px', margin: '0 auto', padding: '0 24px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '28px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
    border: '1px solid #f0e8d8',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cardTop: { display: 'flex', gap: '16px', alignItems: 'flex-start' },
  icon: { fontSize: '2.5rem', flexShrink: 0, marginTop: '4px' },
  cardTitle: { fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '8px', marginTop: 0 },
  cardDesc: { color: '#555', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 },
  benefits: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  benefitItem: { color: '#444', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' },
  checkmark: { color: '#c9a84c', fontWeight: 'bold' },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #f0e8d8',
    paddingTop: '16px',
    marginTop: 'auto',
  },
  metaLabel: { color: '#999', fontSize: '0.85rem' },
  metaVal: { color: '#555', fontSize: '0.85rem', fontWeight: 'bold' },
  price: { color: '#c9a84c', fontWeight: 'bold', fontSize: '1rem' },
  btn: {
    backgroundColor: '#c9a84c',
    color: '#1a1a2e',
    padding: '14px 36px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    display: 'inline-block',
  },
  note: {
    backgroundColor: '#fff8e7',
    padding: '32px 24px',
    borderTop: '2px solid #c9a84c',
    textAlign: 'center',
  },
  noteInner: { maxWidth: '800px', margin: '0 auto' },
  aiLink: {
    color: '#c9a84c',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '12px',
    fontSize: '0.95rem',
  },
  contactLinks: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '16px',
  },
  contactLink: {
    color: '#1a1a2e',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
};
