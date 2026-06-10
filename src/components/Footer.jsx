import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'white', borderTop: '1px solid var(--border-color)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="Logo MTs Attazhimiyah" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--primary-900)' }}>
                MTs Attazhimiyah
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Membentuk generasi muda yang cerdas, berprestasi, dan memiliki akhlakul karimah yang berlandaskan nilai-nilai Islami.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.instagram.com/mts_attazhimiyah/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-600)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <InstagramIcon />
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>@mts_attazhimiyah</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Tautan Cepat</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Beranda</Link></li>
              <li><Link to="/tentang" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Profil Yayasan</Link></li>
              <li><Link to="/pendidikan" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Program Pendidikan</Link></li>
              <li><Link to="/fasilitas" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Fasilitas</Link></li>
              <li><Link to="/ppdb" style={{ color: 'var(--primary-600)', textDecoration: 'none', fontWeight: 500 }}>Info PPDB 2026/2027</Link></li>
            </ul>
          </div>

          {/* Jam Kerja */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Jam Pelayanan</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Senin - Kamis</span>
                <span>07:00 - 15:00</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Jumat</span>
                <span>07:00 - 11:30</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sabtu</span>
                <span>07:00 - 12:00</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--secondary-500)', fontWeight: 500 }}>
                <span>Minggu & Libur Nasional</span>
                <span>Tutup</span>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} MTs Attazhimiyah Bandung. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
