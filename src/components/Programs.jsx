import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HeartPulse, Sparkles, Compass } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <BookOpen size={32} />,
      title: 'Kelas Tahfidz Reguler (Dasar)',
      description: 'Target hafalan 1 Juz (Juz 30). Sasaran khusus bagi siswa dengan kemampuan membaca Al-Qur\'an yang masih dalam tahap belajar.',
      color: '#10b981',
      bg: '#ecfdf5'
    },
    {
      icon: <HeartPulse size={32} />,
      title: 'Madrasah Ramah Anak & Berkarakter',
      description: 'Menanamkan nilai-nilai akhlakul karimah melalui pembiasaan harian seperti salaman pagi, sholat dhuha, dan lainnya.',
      color: '#f59e0b',
      bg: '#fffbeb'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Kegiatan Keagamaan Terstruktur',
      description: 'Pelaksanaan sholat berjamaah secara rutin dan peringatan hari besar Islam (PHBI) untuk memperkuat spiritualitas.',
      color: '#8b5cf6',
      bg: '#f5f3ff'
    },
    {
      icon: <Compass size={32} />,
      title: 'Bimbingan Konseling & Literasi',
      description: 'Program bimbingan konseling aktif dan program literasi emosional untuk kesehatan mental dan psikologis peserta didik.',
      color: '#3b82f6',
      bg: '#eff6ff'
    }
  ];

  return (
    <section id="programs" className="section" style={{ padding: 0 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'var(--primary-900)' }}>
            Program Pendidikan Unggulan
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Program pendidikan dirancang secara komprehensif untuk mencapai keseimbangan antara kecerdasan akademis dan kemuliaan akhlak.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                padding: '2.5rem 2rem',
                transition: 'all 0.3s ease',
              }}
              className="glass-card program-card"
            >
              <div style={{
                width: '4rem', height: '4rem',
                borderRadius: '1rem',
                backgroundColor: program.bg,
                color: program.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {program.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                {program.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
