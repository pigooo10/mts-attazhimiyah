import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, X, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: '',
    wa: '',
    tujuan: 'Tanya Informasi PPDB',
    pesan: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.wa || !formData.pesan) {
      alert('Mohon isi semua field pada form terlebih dahulu!');
      return;
    }
    setShowPopup(true);
  };

  const handleSendWA = (contactName) => {
    let phone = '';
    if (contactName === 'Agiyara') phone = '6287823260757';
    if (contactName === 'Agung') phone = '6281220279446';

    const text = `Halo Admin ${contactName},\nSaya ingin ${formData.tujuan}.\n\n*Data Diri*\nNama: ${formData.nama}\nNo. WA: ${formData.wa}\n\n*Pesan:*\n${formData.pesan}`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    setShowPopup(false);
  };

  return (
    <>
      <section id="contact" className="section" style={{ position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="contact-grid">
            
            {/* PPDB Info & Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 style={{ color: 'var(--secondary-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontSize: '0.875rem' }}>
                Bergabung Bersama Kami
              </h4>
              <h2 id="ppdb" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'var(--primary-900)' }}>
                Pendaftaran Peserta Didik Baru (PPDB) Telah Dibuka!
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.125rem' }}>
                Segera daftarkan putra-putri Anda ke MTs Attazhimiyah. Kuota terbatas. Mari wujudkan generasi unggul, cerdas, dan berakhlakul karimah.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '1rem', color: 'var(--primary-600)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>Alamat Kampus</h3>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>Jl. Cigondewah Kidul No. 9 RT 01 RW 04 / Jl. Holis Blk No. 448<br/>Kec. Bandung Kulon, Kota Bandung, Jawa Barat 40214</p>
                  </div>
                </div>

                <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '1rem', color: 'var(--primary-600)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>Contact Person</h3>
                    <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Agiyara</strong><br/>
                        WhatsApp: 0878-2326-0757<br/>
                        Telp: 022-20651748
                      </div>
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Agung</strong><br/>
                        WhatsApp: 0812-2027-9446
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                  <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', borderRadius: '1rem', color: 'var(--primary-600)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>Email Resmi</h3>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>mts.attazhimiyah@yahoo.co.id</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Container */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card"
              style={{ 
                padding: '3rem'
              }}
            >
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
                Form Pendaftaran / Pertanyaan
              </h3>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>Nama Lengkap</label>
                  <input type="text" name="nama" value={formData.nama} onChange={handleChange} placeholder="Masukkan nama" style={{
                    width: '100%', padding: '1rem', borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)', outline: 'none',
                    fontFamily: 'inherit', fontSize: '1rem'
                  }} />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>Nomor WhatsApp</label>
                  <input type="tel" name="wa" value={formData.wa} onChange={handleChange} placeholder="Contoh: 081234567890" style={{
                    width: '100%', padding: '1rem', borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)', outline: 'none',
                    fontFamily: 'inherit', fontSize: '1rem'
                  }} />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>Tujuan</label>
                  <select name="tujuan" value={formData.tujuan} onChange={handleChange} style={{
                    width: '100%', padding: '1rem', borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)', outline: 'none',
                    fontFamily: 'inherit', fontSize: '1rem', backgroundColor: 'white'
                  }}>
                    <option value="Tanya Informasi PPDB">Tanya Informasi PPDB</option>
                    <option value="Daftar Sekolah">Daftar Sekolah</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>Pesan Singkat</label>
                  <textarea name="pesan" value={formData.pesan} onChange={handleChange} rows="4" placeholder="Tuliskan pesan Anda..." style={{
                    width: '100%', padding: '1rem', borderRadius: '0.5rem',
                    border: '1px solid var(--border-color)', outline: 'none',
                    fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical'
                  }}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: '1rem' }}>
                  Kirim Pesan (via WhatsApp)
                </button>
              </form>
            </motion.div>

          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .contact-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 100,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '1.5rem',
                width: '100%', maxWidth: '400px',
                position: 'relative',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <button 
                onClick={() => setShowPopup(false)}
                style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  width: '4rem', height: '4rem', backgroundColor: 'var(--primary-100)', color: 'var(--primary-600)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto'
                }}>
                  <MessageSquare size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Pilih Kontak Tujuan</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Kepada siapa Anda ingin mengirimkan data ini?</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                  onClick={() => handleSendWA('Agiyara')}
                  style={{
                    width: '100%', padding: '1rem',
                    backgroundColor: '#25D366', color: 'white',
                    border: 'none', borderRadius: '0.75rem',
                    fontSize: '1.125rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'opacity 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Phone size={20} /> Agiyara (Admin 1)
                </button>
                <button 
                  onClick={() => handleSendWA('Agung')}
                  style={{
                    width: '100%', padding: '1rem',
                    backgroundColor: '#128C7E', color: 'white',
                    border: 'none', borderRadius: '0.75rem',
                    fontSize: '1.125rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'opacity 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Phone size={20} /> Agung (Admin 2)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
