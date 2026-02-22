import React from 'react';

const danceEmojis = ['💃', '🕺', '🎭', '🌟', '✨', '🎵', '🎶', '💫', '🌺', '🎊'];

const galleryItems = [
  { emoji: '💃', title: 'Bollywood Showcase', desc: 'Annual performance night' },
  { emoji: '🌺', title: 'Classical Bharatanatyam', desc: 'Traditional Indian dance' },
  { emoji: '🎭', title: 'Festival Performances', desc: 'Community celebrations' },
  { emoji: '🌟', title: 'Little Stars Recital', desc: 'Our youngest performers' },
  { emoji: '🎵', title: 'Fusion Choreography', desc: 'Modern meets traditional' },
  { emoji: '💫', title: 'Competition Ready', desc: 'Stage-ready dancers' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(180deg, #111125, #0d0d1a)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            fontSize: '0.7rem',
            letterSpacing: '6px',
            color: '#c9a84c',
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '1rem',
          }}>Our Moments</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#f8f4ee',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Dance, <em style={{ color: '#38b2c8' }}>Celebrate</em>, Inspire
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #38b2c8)', margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'rgba(248,244,238,0.55)', maxWidth: '500px', margin: '0 auto', fontWeight: '300', lineHeight: 1.8 }}>
            Every performance tells a story. Every practice builds a memory. Here's a glimpse into the DesiBeats world.
          </p>
        </div>

        {/* Photo montage hero card */}
        <div style={{
          padding: '3rem',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, rgba(201,168,76,0.06), rgba(56,178,200,0.04))',
          marginBottom: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08), transparent 70%)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }}>👗</div>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: 'rgba(248,244,238,0.7)',
              marginBottom: '1.5rem',
              maxWidth: '500px',
              margin: '0 auto 1.5rem',
            }}>
              "Our students don't just learn dance — they discover their confidence, culture, and community."
            </p>
            <p style={{ color: '#c9a84c', fontSize: '0.85rem', letterSpacing: '2px', fontWeight: '600' }}>
              — Sravani & Chandu
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {galleryItems.map((item, i) => (
            <div key={item.title} style={{
              padding: '2rem',
              border: '1px solid rgba(201,168,76,0.1)',
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.02)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
              e.currentTarget.style.background = 'rgba(201,168,76,0.06)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', color: '#f8f4ee', marginBottom: '0.25rem', fontWeight: '600' }}>{item.title}</div>
                <div style={{ color: '#9a9aaa', fontSize: '0.8rem', letterSpacing: '1px' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          border: '1px solid rgba(56,178,200,0.2)',
          borderRadius: '6px',
          background: 'rgba(56,178,200,0.04)',
          textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(248,244,238,0.7)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Follow us for class updates, performance clips & behind-the-scenes moments
          </p>
          <a
            href="https://www.instagram.com/desi_beats_by_shravani"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '4px',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '1.5px',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(253,29,29,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            📸 @desi_beats_by_shravani
          </a>
        </div>
      </div>
    </section>
  );
}
