import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, BookMarked, Stethoscope, Droplets, UserCheck, Home } from 'lucide-react';

const Facilities = () => {
  const saranaList = [
    { nama: 'Ruang Kelas', jumlah: 8, icon: <LayoutDashboard size={28} /> },
    { nama: 'Ruang Kepala Madrasah', jumlah: 1, icon: <UserCheck size={28} /> },
    { nama: 'Ruang Guru', jumlah: 1, icon: <Users size={28} /> },
    { nama: 'Perpustakaan', jumlah: 1, icon: <BookMarked size={28} /> },
    { nama: 'UKS', jumlah: 1, icon: <Stethoscope size={28} /> },
    { nama: 'Mushala/Masjid', jumlah: 1, icon: <Home size={28} /> },
    { nama: 'Toilet Guru', jumlah: 1, icon: <Droplets size={28} /> },
    { nama: 'Toilet Siswa', jumlah: 6, icon: <Droplets size={28} /> },
  ];

  return (
    <section id="facilities" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <h4 style={{ color: 'var(--secondary-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Sarana dan Prasarana
          </h4>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'var(--primary-900)' }}>
            Fasilitas Madrasah
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            Kami menyediakan sarana dan prasarana yang memadai untuk menunjang kelancaran proses kegiatan belajar mengajar sehari-hari.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {saranaList.map((fac, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              className="glass-card facility-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: 'var(--primary-600)' }}>
                  {fac.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {fac.nama}
                </h3>
              </div>
              <div style={{ 
                backgroundColor: 'var(--primary-100)', 
                color: 'var(--primary-700)', 
                fontWeight: 'bold', 
                padding: '0.5rem 1rem', 
                borderRadius: '0.5rem' 
              }}>
                {fac.jumlah}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
