import React from 'react';
import PageHeader from '../components/PageHeader';
import FacilitiesGrid from '../components/Facilities';
import { motion } from 'framer-motion';

const Facilities = () => {
  return (
    <>
      <PageHeader 
        title="Fasilitas Madrasah" 
        description="Lingkungan belajar yang asri, aman, dan dilengkapi dengan teknologi terkini untuk mendukung kegiatan belajar mengajar yang optimal." 
      />
      
      {/* Smart Grid Section (Reusing Facilities Component) */}
      <FacilitiesGrid />

      {/* Interactive Map */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-900)', marginBottom: '1rem' }}>Peta Lokasi Madrasah</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Temukan rute terbaik menuju MTs Attazhimiyah dengan mudah.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '2rem',
              overflow: 'hidden',
              padding: '1rem'
            }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=MTs%20Attazhimiyah%20Bandung&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              style={{ width: '100%', height: '100%', border: 0, borderRadius: '1rem' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Lokasi MTs Attazhimiyah"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
