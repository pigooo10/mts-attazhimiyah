import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              position: 'relative', 
              borderRadius: '2rem', 
              overflow: 'hidden',
              paddingBottom: '120%' // 5:6 aspect ratio
            }}>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop" 
                alt="Tentang MTs Attazhimiyah" 
                style={{ 
                  position: 'absolute', top: 0, left: 0, 
                  width: '100%', height: '100%', objectFit: 'cover' 
                }}
              />
            </div>
            {/* Decorative block */}
            <div style={{
              position: 'absolute', top: '10%', right: '-10%',
              width: '100%', height: '100%',
              border: '2px dashed var(--primary-500)',
              borderRadius: '2rem',
              zIndex: -1
            }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '3rem', borderRadius: '2rem' }}
          >
            <h4 style={{ color: 'var(--secondary-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Mengenal Lebih Dekat
            </h4>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'var(--primary-900)' }}>
              Sejarah Singkat <br/> MTs Attazhimiyah
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Madrasah Tsanawiyah Atta'zhimiyah didirikan pada 9 Juni 1987 dengan tujuan memberikan layanan pendidikan yang memadukan ilmu pengetahuan, teknologi, dan nilai-nilai keislaman. Sejak berdiri hingga saat ini, madrasah terus berkembang baik dari segi jumlah peserta didik, tenaga pendidik, maupun sarana dan prasarana. Berbagai prestasi telah diraih sebagai wujud komitmen madrasah dalam meningkatkan mutu pendidikan dan pelayanan kepada masyarakat.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '1rem', color: 'var(--primary-600)' }}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Akreditasi Unggul (A)</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Mendapatkan status Akreditasi A sejak awal dan terus dipertahankan, memastikan kualitas standar pendidikan terbaik bagi seluruh siswa.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '1rem', color: 'var(--primary-600)' }}>
                  <Target size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Center Of Excellent</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Berkomitmen menjadi pusat pembelajaran terbaik yang melahirkan insan kamil yang cerdas, kreatif, inovatif, dan berakhlakul karimah.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '1rem', color: 'var(--primary-600)' }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Identitas Madrasah</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    <strong>NPSN:</strong> 20279562 <br/>
                    <strong>NSM:</strong> 121232730026 <br/>
                    <strong>Status:</strong> Swasta <br/>
                    <strong>Alamat:</strong> Jl. Cigondewah Kidul No. 9 RT 01 RW 04 / Jl. Holis Blk No. 448
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid { grid-template-columns: 5fr 7fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
