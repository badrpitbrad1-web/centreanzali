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
          <span style={styles.logoGold}>✦</span> مركز الأنزالي للحجامة والطب البديل
        </Link>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
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
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="قائمة"
          aria-expanded={menuOpen}
        >
          <span style={{ ...styles.bar, transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', transition: 'transform 0.2s' }} />
          <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ ...styles.bar, transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', transition: 'transform 0.2s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="nav-mobile-menu">
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
    fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
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
    fontSize: 'clamp(0.75rem, 2.5vw, 1.15rem)',
    fontWeight: 'bold',
    letterSpacing: '0.3px',
    flexShrink: 1,
    lineHeight: 1.3,
  },
  logoGold: {
    color: '#c9a84c',
    marginLeft: '6px',
  },
  link: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
  },
  activeLink: {
    color: '#c9a84c',
    borderBottom: '2px solid #c9a84c',
    paddingBottom: '2px',
  },
  bar: {
    display: 'block',
    width: '24px',
    height: '2px',
    backgroundColor: '#c9a84c',
    borderRadius: '2px',
  },
  mobileLink: {
    color: '#cccccc',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '14px 24px',
    display: 'block',
    borderBottom: '1px solid #2a2a4a',
  },
  activeMobileLink: {
    color: '#c9a84c',
    backgroundColor: 'rgba(201,168,76,0.08)',
  },
};
