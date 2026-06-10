import React from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const currentYear = new Date().getFullYear();
  const yearsActive = currentYear - 1987;

  const stats = [
    { number: yearsActive, label: 'Tahun Pengalaman', suffix: '+' },
    { number: '28', label: 'Tenaga Pendidik & Kependidikan', suffix: '' },
    { number: '8', label: 'Ruang Kelas', suffix: '' },
    { number: '100', label: 'Berakhlakul Karimah', suffix: '%' },
  ];

  return (
    <>
      <PageHeader 
        title="Profil Yayasan" 
        description="Mengenal lebih dekat sejarah, visi, misi, tujuan, dan data sumber daya MTs Attazhimiyah." 
      />
      
      <About />

      {/* Animated Statistics Section */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center', padding: '3rem 2rem' }}>
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ padding: '1rem' }}
              >
                <div style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: 'var(--primary-700)' }}>
                  {stat.number}<span style={{ color: 'var(--secondary-500)' }}>{stat.suffix}</span>
                </div>
                <div style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="vision-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: '3rem', borderTop: '5px solid var(--primary-500)' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-900)' }}>Visi Madrasah</h3>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 500 }}>
                "Menjadi Center Of Excellent dalam pengembangan dan pembinaan siswa agar menjadi insan kamil yang Cerdas, Kreatif, Inovatif dan Disiplin dengan dilandasi Iman, Takwa dan Tafaqquh Fid diin."
              </p>

              <h3 style={{ fontSize: '2rem', margin: '3rem 0 1.5rem 0', color: 'var(--primary-900)' }}>Tujuan Madrasah</h3>
              <ul style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Mampu menampilkan pemahaman tentang dasar-dasar aqidah yang shohih, praktek ibadah yang shohih, serta bermasyarakat dengan akhlaqul karimah.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mampu menampilkan kebiasaan sopan santun dan berbudi pekerti sebagai cerminan Iman Taqwa.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mampu menguasai pendalaman agama mendasar yang tercermin dalam konsep Tafaqquh Fid Diin.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mampu berkomunikasi dengan baik, berjiwa mandiri, dan bersikap kreatif.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mampu mengembangkan kemampuan berfikir secara logis, kritis, dan sistematis.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mampu mengaktualisasikan diri dalam berbagai seni dan olah raga, sesuai pilihannya.</li>
                <li style={{ marginBottom: '0.5rem' }}>Mampu bersaing dalam mengikuti berbagai kompetisi akademik dan non akademik.</li>
                <li>Mampu memiliki kecakapan hidup personal, sosial, serta berwawasan.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: '3rem', borderTop: '5px solid var(--secondary-500)' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-900)' }}>Misi Madrasah</h3>
              <ol style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '1rem' }}>Menciptakan MTs. Atta'zhimiyah sebagai pusat pembelajaran yang terbaik.</li>
                <li style={{ marginBottom: '1rem' }}>Menciptakan pembelajaran yang menyenangkan Aktif, Kreatif, Inovatif, Produktif dan disiplin yang dilandasi ruh lillahi ta'ala serta senantiasa menumbuhkan semangat keunggulan serta insentif kepada seluruh civitas akademika madrasah.</li>
                <li style={{ marginBottom: '1rem' }}>Membentuk siswa yang berilmu amaly dan beramal ilmy.</li>
                <li style={{ marginBottom: '1rem' }}>Meningkatkan pengetahuan dan profesionalisme tenaga pendidikan sesuai dengan perkembangan dunia pendidikan.</li>
                <li style={{ marginBottom: '1rem' }}>Melaksanakan pembelajaran dan bimbingan secara efektif sehingga setiap siswa berkembang secara optimal sesuai potensi yang dimiliki.</li>
              </ol>
            </motion.div>
          </div>
        </div>
        <style>{`
          @media (min-width: 992px) {
            .vision-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutUs;
