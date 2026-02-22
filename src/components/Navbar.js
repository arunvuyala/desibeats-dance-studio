import React, { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px',
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    background: 'rgba(10, 10, 15, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
  },
  logo: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: '1.4rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #c9a84c, #f0d080, #c9a84c)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s linear infinite',
    cursor: 'pointer',
    letterSpacing: '2px',
  },
  logoSub: {
    display: 'block',
    fontSize: '0.5rem',
    letterSpacing: '4px',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '500',
    color: '#9a9aaa',
    WebkitTextFillColor: '#9a9aaa',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  link: {
    color: '#f8f4ee',
    textDecoration: 'none',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: '500',
    fontSize: '0.85rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '4px 0',
    position: 'relative',
    transition: 'color 0.3s',
  },
  cta: {
    background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
    color: '#0a0a0f',
    padding: '8px 22px',
    borderRadius: '2px',
    fontWeight: '700',
    fontSize: '0.8rem',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'inline-block',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px',
  },
  bar: {
    width: '24px',
    height: '2px',
    background: '#c9a84c',
    transition: 'all 0.3s',
  },
  mobileMenu: {
    position: 'fixed',
    top: '70px',
    left: 0,
    right: 0,
    background: 'rgba(10,10,15,0.98)',
    backdropFilter: 'blur(20px)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    borderBottom: '1px solid rgba(201,168,76,0.2)',
    zIndex: 999,
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); };
  }, []);

  const navLinks = ['Home', 'About', 'Classes', 'Gallery', 'Contact'];

  return (
    <>
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div>
          <span style={styles.logo}>
            DesiBeats
            <span style={styles.logoSub}>Sravani & Chandu</span>
          </span>
        </div>

        {!isMobile && (
          <ul style={styles.links}>
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={styles.link}
                  onMouseEnter={e => e.target.style.color = '#c9a84c'}
                  onMouseLeave={e => e.target.style.color = '#f8f4ee'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!isMobile && (
          <a
            href="#contact"
            style={styles.cta}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(201,168,76,0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
          >
            Enroll Now
          </a>
        )}

        {isMobile && (
          <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={styles.bar}></span>
            <span style={styles.bar}></span>
            <span style={styles.bar}></span>
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ ...styles.link, fontSize: '1rem' }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" style={styles.cta} onClick={() => setMenuOpen(false)}>Enroll Now</a>
        </div>
      )}
    </>
  );
}
