import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Programs from '../components/Programs';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Shield, Flame, Activity } from 'lucide-react';

const Education = () => {
  const [activeTab, setActiveTab] = useState('kurikulum');

  const ekstrakurikuler = [
    { nama: 'Pramuka Inti', jadwal: 'Kamis', icon: <Compass size={32} /> },
    { nama: 'Paskibra', jadwal: 'Kamis', icon: <Target size={32} /> },
    { nama: 'Tari', jadwal: 'Kamis', icon: <Flame size={32} /> },
    { nama: 'Futsal', jadwal: 'Jumat', icon: <Activity size={32} /> },
  ];

  return (
    <>
      <PageHeader 
        title="Program & Kegiatan" 
        description="Informasi mengenai program akademik, keagamaan, serta kegiatan ekstrakurikuler yang dapat diikuti oleh peserta didik." 
      />
      
      {/* Dynamic Tab Filter Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <div className="glass-card" style={{ display: 'flex', borderRadius: '9999px', padding: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => setActiveTab('kurikulum')}
                className={activeTab === 'kurikulum' ? 'btn btn-primary' : 'btn'}
                style={{ backgroundColor: activeTab === 'kurikulum' ? '' : 'transparent', color: activeTab === 'kurikulum' ? '' : 'var(--text-muted)' }}
              >
                Program Unggulan
              </button>
              <button 
                onClick={() => setActiveTab('ekskul')}
                className={activeTab === 'ekskul' ? 'btn btn-primary' : 'btn'}
                style={{ backgroundColor: activeTab === 'ekskul' ? '' : 'transparent', color: activeTab === 'ekskul' ? '' : 'var(--text-muted)' }}
              >
                Ekstrakurikuler
              </button>
            </div>
          </div>

          <div style={{ minHeight: '400px' }}>
            <AnimatePresence mode="wait">
              {activeTab === 'kurikulum' && (
                <motion.div
                  key="kurikulum"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Programs />
                </motion.div>
              )}

              {activeTab === 'ekskul' && (
                <motion.div
                  key="ekskul"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-900)', marginBottom: '1rem' }}>Kegiatan Ekstrakurikuler</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '1rem' }}>
                      Ekstrakurikuler wajib pramuka merupakan kegiatan yang harus diikuti seluruh peserta didik.
                    </p>
                    <p style={{ color: 'var(--primary-600)', fontSize: '1rem', fontWeight: 600, padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '0.5rem' }}>
                      Peserta didik dapat memilih maksimal 2 jenis kegiatan ekstrakurikuler berdasarkan minat, bakat, dan potensi melalui penjaringan keanggotaan di awal tahun pelajaran.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {ekstrakurikuler.map((eks, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="glass-card"
                        style={{ 
                          padding: '2rem', 
                          borderLeft: '4px solid var(--secondary-500)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1.5rem'
                        }}
                      >
                        <div style={{ color: 'var(--primary-500)' }}>
                          {eks.icon}
                        </div>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>{eks.nama}</h3>
                          <span style={{ 
                            display: 'inline-block', 
                            padding: '0.25rem 0.75rem', 
                            backgroundColor: 'var(--primary-100)', 
                            color: 'var(--primary-700)', 
                            borderRadius: '9999px',
                            fontSize: '0.875rem',
                            fontWeight: 600
                          }}>
                            Latihan: {eks.jadwal}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

// Compass component for the icon fallback
const Compass = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

export default Education;
