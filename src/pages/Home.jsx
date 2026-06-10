import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Quick Info Section */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', alignItems: 'center', overflow: 'hidden' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--primary-900)', marginBottom: '1.5rem' }}
            >
              Selamat Datang di MTs Attazhimiyah
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}
            >
              Kami berdedikasi untuk mencetak generasi pemimpin masa depan yang cerdas secara intelektual dan anggun secara moral. Kurikulum kami dirancang khusus untuk memadukan ilmu pengetahuan modern dengan nilai-nilai Islami yang kokoh.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link to="/tentang" className="btn btn-primary">
                Profil Yayasan <ArrowRight size={18} />
              </Link>
              <Link to="/pendidikan" className="btn btn-outline">
                Program Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
