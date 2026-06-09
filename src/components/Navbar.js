import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/services', label: 'خدماتنا' },
  { path: '/ai-tool', label: 'هل أنا مرشح؟' },
  { path: '/booking', label: 'احجز موعد' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoGold}>✦</span> مركز الأنزالي
        </Link>

        {/* Desktop links */}
        <ul style={styles.links}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                style={{
                  ...styles.link,
                  ...(location.pathname === path ? styles.activeLink : {}),
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="قائمة"
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul style={styles.mobileMenu}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                style={{
                  ...styles.mobileLink,
                  ...(location.pathname === path ? styles.activeMobileLink : {}),
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#1a1a2e',
    borderBottom: '2px solid #c9a84c',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  logoGold: {
    color: '#c9a84c',
    marginLeft: '6px',
  },
  links: {
    display: 'flex',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '@media (max-width: 768px)': { display: 'none' },
  },
  link: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s',
  },
  activeLink: {
    color: '#c9a84c',
    borderBottom: '2px solid #c9a84c',
    paddingBottom: '2px',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  bar: {
    display: 'block',
    width: '24px',
    height: '2px',
    backgroundColor: '#c9a84c',
    borderRadius: '2px',
  },
  mobileMenu: {
    listStyle: 'none',
    margin: 0,
    padding: '12px 24px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#12122a',
  },
  mobileLink: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '8px 0',
    display: 'block',
    borderBottom: '1px solid #2a2a4a',
  },
  activeMobileLink: {
    color: '#c9a84c',
  },
};
