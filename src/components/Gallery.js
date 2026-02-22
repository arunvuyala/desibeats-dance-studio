import React, { useState } from 'react';

const photos = [
  { src: '/media/IMG_4914_Original.jpeg', caption: 'Festival Performance', desc: 'Students performing at a community festival' },
  { src: '/media/IMG_8482_Original.jpeg', caption: 'Showcase Day', desc: 'Colorful lehengas, big smiles!' },
  { src: '/media/IMG_8478_Original.jpeg', caption: 'Performance Ready', desc: 'All dressed up and ready to shine' },
  { src: '/media/IMG_3348_Original.jpeg', caption: 'Class Vibes', desc: 'Fun times at the studio with Sravani' },
  { src: '/media/20260110_005054828_iOS.jpeg', caption: 'Dance Class', desc: 'Learning and growing together' },
  { src: '/media/IMG_5959_Original.jpeg', caption: 'Behind the Scenes', desc: 'Candid moments from practice' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(180deg, #111125, #0d0d1a)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            fontSize: '0.7rem', letterSpacing: '6px', color: '#c9a84c',
            textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '1rem',
          }}>Gallery</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700', color: '#f8f4ee', lineHeight: 1.2, marginBottom: '1rem',
          }}>
            Dance, <em style={{ color: '#38b2c8' }}>Celebrate</em>, Inspire
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #38b2c8)', margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'rgba(248,244,238,0.55)', maxWidth: '500px', margin: '0 auto', fontWeight: '300', lineHeight: 1.8 }}>
            Real moments from our classes, performances, and celebrations.
          </p>
        </div>

        {/* Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1rem',
          marginBottom: '5rem',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '4/3',
                background: '#111',
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                  display: 'block',
                }}
              />
              <div className="overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,15,0.85) 0%, transparent 60%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem',
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#f8f4ee', fontWeight: '600' }}>{photo.caption}</div>
                <div style={{ color: 'rgba(248,244,238,0.65)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{photo.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{
              fontSize: '0.7rem', letterSpacing: '6px', color: '#38b2c8',
              textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '0.75rem',
            }}>Watch Us Move</span>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              color: '#f8f4ee', fontWeight: '700',
            }}>
              See the <em style={{ color: '#c9a84c' }}>Magic</em> in Motion
            </h3>
          </div>

          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.2)',
            background: '#000',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <video
              controls
              style={{ width: '100%', display: 'block', maxHeight: '500px' }}
              poster="/media/IMG_4914_Original.jpeg"
            >
              <source src="/media/df74ca47121c443086c35f55451f18bc.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Instagram CTA */}
        <div style={{
          padding: '2.5rem',
          border: '1px solid rgba(56,178,200,0.2)',
          borderRadius: '6px',
          background: 'rgba(56,178,200,0.04)',
          textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(248,244,238,0.7)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Follow us for class updates, performance clips & behind-the-scenes moments
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="/qrcode.jpg"
                alt="Scan to follow on Instagram"
                style={{ width: '150px', height: '150px', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
              />
              <p style={{ color: '#9a9aaa', fontSize: '0.75rem', letterSpacing: '1px', marginTop: '0.75rem', textTransform: 'uppercase' }}>Scan to Follow</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'rgba(248,244,238,0.5)', fontSize: '0.85rem', marginBottom: '1rem' }}>or tap below</p>
              <a
                href="https://www.instagram.com/desi_beats_by_shravani"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                  background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                  color: '#fff', padding: '14px 32px', borderRadius: '4px',
                  fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1.5px', textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(253,29,29,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                📸 @desi_beats_by_shravani
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={() => setLightbox(lightbox > 0 ? lightbox - 1 : photos.length - 1)}
            onClick={e => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : photos.length - 1); }}
            style={{
              position: 'fixed', left: '1.5rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
              color: '#c9a84c', width: '48px', height: '48px', borderRadius: '50%',
              cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >‹</button>

          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '85vw', maxHeight: '85vh', textAlign: 'center' }}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].caption}
              style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '6px', display: 'block', margin: '0 auto' }}
            />
            <div style={{ marginTop: '1rem' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#f8f4ee', fontWeight: '600' }}>{photos[lightbox].caption}</div>
              <div style={{ color: 'rgba(248,244,238,0.6)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{photos[lightbox].desc}</div>
            </div>
          </div>

          <button
            onClick={e => { e.stopPropagation(); setLightbox(lightbox < photos.length - 1 ? lightbox + 1 : 0); }}
            style={{
              position: 'fixed', right: '1.5rem', top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
              color: '#c9a84c', width: '48px', height: '48px', borderRadius: '50%',
              cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >›</button>

          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              color: '#fff', width: '40px', height: '40px', borderRadius: '50%',
              cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>
      )}
    </section>
  );
}
