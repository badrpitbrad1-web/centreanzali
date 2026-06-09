import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1a1a2e',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <div style={{ color: '#c9a84c', fontSize: '16px', fontWeight: 'bold' }}>
        مركز الأنزالي للحجامة والطب البديل
      </div>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>الرئيسية</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>خدماتنا</Link>
        <Link to="/ai-tool" style={{ color: 'white', textDecoration: 'none' }}>هل أنت مرشح؟</Link>
        <Link to="/booking" style={{ color: 'white', textDecoration: 'none' }}>احجز موعد</Link>
      </div>
    </nav>
  );
}

export default Navbar;
