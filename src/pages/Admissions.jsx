import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { CheckCircle2, Folder } from 'lucide-react';

const Admissions = () => {
  const syaratList = [
    'Formulir Pendaftaran',
    'Photo copy Ijazah SD/MI legalisir (2 lembar)',
    'STK (Surat Tanda Kelulusan) Asli',
    'Photo copy Akte Kelahiran (2 lembar)',
    'Photo copy Kartu Keluarga (2 lembar)',
    'Surat Keterangan Kelakuan Baik Asli',
    'Photo copy Surat Keterangan Hasil Ujian Nasional (SKHUN)',
    'Photo copy Kartu NISN / Surat keterangan NISN',
    'Photo copy KTP ayah dan ibu (Orang tua)',
  ];

  return (
    <>
      <PageHeader 
        title="PPDB & Kontak Kami" 
        description="Mari bergabung menjadi bagian dari keluarga besar MTs Attazhimiyah. Lengkapi persyaratan berikut untuk mendaftar." 
      />

      {/* Syarat Pendaftaran */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-900)', marginBottom: '1rem' }}>Syarat Pendaftaran</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Harap lengkapi semua dokumen persyaratan di bawah ini.</p>
          </div>

          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {syaratList.map((syarat, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.125rem', color: 'var(--text-main)' }}
                >
                  <div style={{ color: 'var(--primary-500)', marginTop: '0.25rem' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, marginRight: '0.5rem', color: 'var(--primary-700)' }}>{index + 1}.</span> 
                    {syarat}
                  </div>
                </motion.li>
              ))}
              
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: syaratList.length * 0.05 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.125rem', color: 'var(--text-main)', marginTop: '1rem', paddingTop: '1.5rem', borderTop: '2px dashed var(--border-color)' }}
              >
                <div style={{ color: 'var(--secondary-500)', marginTop: '0.25rem' }}>
                  <Folder size={24} />
                </div>
                <div>
                  <span style={{ fontWeight: 600, marginRight: '0.5rem', color: 'var(--primary-700)' }}>10.</span> 
                  Persyaratan dimasukkan dalam map:
                  <ul style={{ listStyle: 'disc', paddingLeft: '2rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                    <li><strong style={{ color: '#3b82f6' }}>Biru</strong> untuk laki-laki</li>
                    <li><strong style={{ color: '#ef4444' }}>Merah</strong> untuk perempuan</li>
                  </ul>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </>
  );
};

export default Admissions;
