import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description }) => {
  return (
    <section style={{
      backgroundColor: 'rgba(6, 78, 59, 0.8)',
      backdropFilter: 'blur(16px)',
      color: 'white',
      padding: '8rem 0 4rem 0',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute', top: '-50%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, var(--primary-700) 0%, rgba(0,0,0,0) 70%)',
        opacity: 0.5, zIndex: 0
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem', color: 'white' }}
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.25rem', color: 'var(--primary-100)', maxWidth: '700px', margin: '0 auto' }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHeader;
