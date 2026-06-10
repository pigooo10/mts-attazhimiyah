import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" style={{
      position: 'relative',
      paddingTop: '8rem',
      paddingBottom: '6rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      alignItems: 'center',
      overflow: 'hidden'
      /* background removed for mesh */
    }}>
      {/* Background Ornaments */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--primary-100) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fef3c7 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{ maxWidth: '600px', padding: '3rem', borderRadius: '2rem' }}
          >
            <div style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              backgroundColor: 'white', 
              borderRadius: '9999px',
              color: 'var(--primary-600)',
              fontWeight: 600,
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              ✨ Akreditasi A | Berdiri Sejak 1987
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              marginBottom: '1.5rem',
              color: 'var(--primary-900)'
            }}>
              Membangun Generasi <br/>
              <span style={{ color: 'var(--primary-600)' }}>Cerdas & Berakhlak</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2rem',
              maxWidth: '500px'
            }}>
              MTs Attazhimiyah hadir dengan lingkungan belajar yang modern, Islami, dan inspiratif. Kami membentuk karakter pemimpin masa depan.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/ppdb" className="btn btn-primary">
                Daftar Sekarang <ArrowRight size={18} />
              </Link>
              <Link to="/tentang" className="btn btn-outline">
                <PlayCircle size={18} /> Profil Yayasan
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              aspectRatio: '16/9',
              backgroundColor: 'var(--primary-100)'
            }}>
              <iframe 
                src="https://www.youtube.com/embed/V1dDos50czA?autoplay=1&mute=1&loop=1&playlist=V1dDos50czA&controls=0&showinfo=0&rel=0" 
                title="Video MTs Attazhimiyah" 
                style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
              }}></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                padding: '1.5rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                maxWidth: '250px'
              }}
            >
              <div style={{ 
                width: '3rem', height: '3rem', 
                backgroundColor: 'var(--secondary-500)', 
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 'bold', fontSize: '1.2rem'
              }}>A</div>
              <div>
                <p style={{ fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>Akreditasi Unggul</p>
                <p style={{ fontSize: '0.875rem', margin: 0, color: 'var(--text-muted)' }}>BAN-SM Resmi</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
