import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil Yayasan', href: '/tentang' },
    { name: 'Program Pendidikan', href: '/pendidikan' },
    { name: 'Fasilitas Madrasah', href: '/fasilitas' },
  ];

  const activeStyle = {
    color: 'var(--primary-600)',
    fontWeight: 600,
  };

  const inactiveStyle = {
    color: 'var(--text-main)',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: isScrolled ? 'var(--glass-bg)' : 'var(--surface-color)',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid var(--glass-border)',
      boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/logo.png" alt="Logo MTs Attazhimiyah" style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 700, 
            fontSize: '1.25rem',
            color: 'var(--primary-900)'
          }}>
            MTs Attazhimiyah
          </span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'none' }} className="desktop-menu">
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.href} 
                  style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                  onMouseOver={(e) => { if(e.currentTarget.style.color !== 'var(--primary-600)') e.currentTarget.style.color = 'var(--primary-500)'}}
                  onMouseOut={(e) => { if(location.pathname !== link.href) e.currentTarget.style.color = 'var(--text-main)'}}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/ppdb" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                PPDB & Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button 
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} color="var(--text-main)" /> : <Menu size={24} color="var(--text-main)" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            backgroundColor: 'var(--surface-color)',
            padding: '1rem 2rem',
            boxShadow: 'var(--shadow-md)',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.href} 
                  style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/ppdb" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }} onClick={() => setIsMobileMenuOpen(false)}>
                PPDB & Kontak
              </Link>
            </li>
          </ul>
        </motion.div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-menu { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
