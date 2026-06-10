import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PopupBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Tampilkan popup setelah delay 1 detik agar animasi awal web selesai
    const timer = setTimeout(() => {
      // Cek sessionStorage agar tidak spam setiap kali user ganti halaman
      const hasSeen = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeen) {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setIsVisible(false)} // Menutup jika klik di area luar gambar
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            style={{
              position: 'relative',
              maxWidth: '600px',
              width: '100%',
              backgroundColor: 'transparent',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()} // Mencegah popup tertutup jika gambar diklik
          >
            {/* Tombol Close */}
            <button
              onClick={() => setIsVisible(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(255,255,255,0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                zIndex: 10,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={20} color="var(--text-main)" />
            </button>
            
            {/* Gambar Brosur */}
            <img 
              src="/brosur.png" 
              alt="Brosur PPDB MTs Attazhimiyah" 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1.5rem' }} 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupBanner;
