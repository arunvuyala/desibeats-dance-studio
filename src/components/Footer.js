import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 2rem',
      background: '#060609',
      borderTop: '1px solid rgba(201,168,76,0.15)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          marginBottom: '2rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <div style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '1.6rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.25rem',
            }}>DesiBeats</div>
            <div style={{ color: '#9a9aaa', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Dance Studio • Sravani & Chandu</div>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {['Home', 'About', 'Classes', 'Gallery', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: '#9a9aaa',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  fontWeight: '500',
                }}
                onMouseEnter={e => e.target.style.color = '#c9a84c'}
                onMouseLeave={e => e.target.style.color = '#9a9aaa'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <span style={{ color: '#9a9aaa', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📍 1625 Indian Apple Way, Leander TX 78641
            </span>
            <span style={{ color: '#9a9aaa', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📞 (818) 406-1270
            </span>
          </div>

          <a
            href="https://www.instagram.com/desi_beats_by_shravani"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#9a9aaa',
              fontSize: '0.8rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
            onMouseLeave={e => e.currentTarget.style.color = '#9a9aaa'}
          >
            📸 @desi_beats_by_shravani
          </a>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: 'rgba(154,154,170,0.4)',
          fontSize: '0.75rem',
          letterSpacing: '1px',
        }}>
          © {new Date().getFullYear()} DesiBeats Dance Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
