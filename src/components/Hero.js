import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'all 1s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 40%, #111125 100%)',
    }}>
      {/* Decorative radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Animated circles */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '50%',
        animation: 'spin-slow 20s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '8%',
        width: '120px',
        height: '120px',
        border: '1px solid rgba(56,178,200,0.15)',
        borderRadius: '50%',
        animation: 'spin-slow 15s linear infinite reverse',
      }} />

      {/* Teal accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #c9a84c, #38b2c8, #c9a84c, transparent)',
      }} />

      <div ref={ref} style={{
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '900px',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Real Logo */}
        <div style={{ marginBottom: '2rem', animation: 'float 4s ease-in-out infinite' }}>
          <img
            src="/logo.jpg"
            alt="DesiBeats Logo"
            style={{
              height: '160px',
              width: 'auto',
              filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.4))',
            }}
          />
        </div>

        <div style={{
          fontSize: '0.75rem',
          letterSpacing: '6px',
          color: '#c9a84c',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          fontFamily: "'Raleway', sans-serif",
          fontWeight: '600',
        }}>
          Sravani & Chandu Present
        </div>

        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: '700',
          lineHeight: 1.05,
          background: 'linear-gradient(135deg, #c9a84c 0%, #f0d080 40%, #c9a84c 70%, #f0d080 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 4s linear infinite',
          marginBottom: '0.5rem',
        }}>
          DesiBeats
        </h1>

        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1rem, 3vw, 1.6rem)',
          fontStyle: 'italic',
          color: '#38b2c8',
          marginBottom: '1.5rem',
          letterSpacing: '2px',
        }}>
          Dance Studio
        </div>

        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
          color: 'rgba(248,244,238,0.7)',
          maxWidth: '550px',
          margin: '0 auto 2.5rem',
          fontWeight: '300',
          lineHeight: 1.8,
        }}>
          Bollywood & Indian Classical Dance classes for all ages — igniting passion, culture, and rhythm in Leander, TX
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#classes" style={{
            background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
            color: '#0a0a0f',
            padding: '14px 36px',
            borderRadius: '2px',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: '700',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(201,168,76,0.5)'; }}
          onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
          >
            Explore Classes
          </a>
          <a href="#contact" style={{
            border: '1px solid rgba(201,168,76,0.5)',
            color: '#c9a84c',
            padding: '14px 36px',
            borderRadius: '2px',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: '600',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.background = 'rgba(201,168,76,0.1)'; e.target.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}
          >
            Get In Touch
          </a>
        </div>

        {/* Address bar */}
        <div style={{
          marginTop: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          padding: '1rem 2rem',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}>
          <span style={{ color: '#9a9aaa', fontSize: '0.8rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📍 1625 Indian Apple Way, Leander TX 78641
          </span>
          <span style={{ color: '#9a9aaa', fontSize: '0.8rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            📞 (818) 406-1270
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '3px', color: 'rgba(201,168,76,0.5)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, rgba(201,168,76,0.5), transparent)' }} />
      </div>
    </section>
  );
}
