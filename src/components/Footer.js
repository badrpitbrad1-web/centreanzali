import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <span style={styles.gold}>✦</span> مركز الأنزالي للحجامة والطب البديل
          <p style={styles.sub}>مراكش، المغرب</p>
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>الرئيسية</Link>
          <Link to="/services" style={styles.link}>الخدمات</Link>
          <Link to="/ai-tool" style={styles.link}>هل أنا مرشح؟</Link>
          <Link to="/booking" style={styles.link}>احجز موعد</Link>
        </div>

        <div style={styles.contact}>
          <p style={styles.contactItem}>📞 <a href="tel:+212638038900" style={{ ...styles.contactLink, direction: 'ltr', display: 'inline-block' }}>+212 638 038 900</a></p>
          <p style={styles.contactItem}>💬 <a href="https://wa.me/212638038900" target="_blank" rel="noreferrer" style={styles.contactLink}>واتساب</a></p>
          <p style={styles.contactItem}>✉️ <a href="mailto:centre.anzali@gmail.com" style={styles.contactLink}>centre.anzali@gmail.com</a></p>
          <p style={styles.contactItem}>📍 <a href="https://maps.app.goo.gl/pYBHCQcB2VF9BkZT9?g_st=ac" target="_blank" rel="noreferrer" style={styles.contactLink}>سيدي موسى كم 9، مراكش 44000</a></p>
          <p style={styles.contactItem}>🕐 كل أيام الأسبوع: 08:00 – 22:00</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} مركز الأنزالي — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f0f1e',
    color: '#aaaaaa',
    borderTop: '2px solid #c9a84c',
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: 'clamp(32px,6vw,48px) 16px clamp(24px,4vw,32px)',
    display: 'flex',
    flexWrap: 'wrap',          /* ← الأعمدة تتكدس على الموبايل */
    gap: '28px',
    justifyContent: 'space-between',
    width: '100%',
  },
  brand: {
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  sub: {
    color: '#888',
    fontSize: '0.85rem',
    marginTop: '6px',
    fontWeight: 'normal',
  },
  gold: {
    color: '#c9a84c',
    marginLeft: '6px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: '#aaaaaa',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  contactItem: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#aaaaaa',
  },
  contactLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  },
  bottom: {
    borderTop: '1px solid #2a2a4a',
    textAlign: 'center',
    padding: '16px',
    fontSize: '0.8rem',
    color: '#666',
  },
};
