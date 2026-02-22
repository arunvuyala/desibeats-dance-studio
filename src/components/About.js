import React, { useEffect, useRef } from 'react';

function useInView(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

const StatCard = ({ number, label }) => (
  <div style={{
    textAlign: 'center',
    padding: '2rem 1.5rem',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '4px',
    background: 'rgba(201,168,76,0.04)',
    flex: '1',
    minWidth: '120px',
  }}>
    <div style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.8rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: 1,
      marginBottom: '0.5rem',
    }}>{number}</div>
    <div style={{ color: '#9a9aaa', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '500' }}>{label}</div>
  </div>
);

export default function About() {
  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    [ref, ref2].forEach(r => {
      if (r.current) {
        r.current.style.opacity = '0';
        r.current.style.transform = 'translateY(40px)';
        r.current.style.transition = 'all 0.8s ease';
      }
    });
  }, []);

  useInView(ref);
  useInView(ref2);

  return (
    <section id="about" style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(180deg, #0a0a0f, #0d0d1a)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(56,178,200,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} ref={ref}>
          <span style={{
            fontSize: '0.7rem',
            letterSpacing: '6px',
            color: '#c9a84c',
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '1rem',
          }}>Our Story</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#f8f4ee',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>
            Where Culture Meets <em style={{ color: '#c9a84c' }}>Rhythm</em>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #c9a84c, #38b2c8)', margin: '0 auto 2rem' }} />
          <p style={{
            color: 'rgba(248,244,238,0.65)',
            maxWidth: '660px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            fontWeight: '300',
          }}>
            DesiBeats Dance Studio, founded by Sravani, is a vibrant celebration of Indian dance culture in the heart of Leander, Texas. We believe dance is more than movement — it's a language that connects generations, preserves heritage, and transforms lives.
          </p>
        </div>

        <div ref={ref2} style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '4rem',
        }}>
          <StatCard number="4+" label="Ages Welcome" />
          <StatCard number="4" label="Class Styles" />
          <StatCard number="100+" label="Happy Students" />
          <StatCard number="∞" label="Memories Made" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {[
            { icon: '💃', title: 'Expert Instructor', desc: 'Sravani brings years of professional training and performance experience to every class.' },
            { icon: '🎵', title: 'Cultural Immersion', desc: 'Dive deep into Bollywood, Tollywood, Folk, and Fusion styles that celebrate our rich heritage.' },
            { icon: '✨', title: 'All Are Welcome', desc: 'From toddlers to adults, beginners to advanced — every dancer finds their place at DesiBeats.' },
          ].map(card => (
            <div key={card.title} style={{
              padding: '2rem',
              border: '1px solid rgba(201,168,76,0.12)',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.02)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.background = 'rgba(201,168,76,0.05)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.3rem',
                color: '#f8f4ee',
                marginBottom: '0.75rem',
                fontWeight: '600',
              }}>{card.title}</h3>
              <p style={{ color: 'rgba(248,244,238,0.6)', lineHeight: 1.7, fontSize: '0.95rem', fontWeight: '300' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
