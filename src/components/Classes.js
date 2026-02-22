import React, { useEffect, useRef } from 'react';

const classes = [
  {
    level: 'Little Stars',
    ageRange: 'Ages 4+',
    badge: '⭐',
    color: '#c9a84c',
    description: 'Our youngest dancers discover the joy of movement through playful Bollywood routines and cultural storytelling. Focus on coordination, rhythm, and fun!',
    includes: ['Basic Bollywood moves', 'Rhythm & coordination', 'Fun & confidence building', 'Annual showcase performance'],
  },
  {
    level: 'Pre-Teens',
    ageRange: 'Ages 8–12',
    badge: '🌟',
    color: '#38b2c8',
    description: 'Pre-teens dive deeper into technique and choreography, exploring Bollywood and Tollywood dance styles with energy and enthusiasm.',
    includes: ['Bollywood & Tollywood technique', 'Folk dance introduction', 'Group choreography', 'Stage performance prep'],
  },
  {
    level: 'Teens & Adults',
    ageRange: 'Ages 13+',
    badge: '💫',
    color: '#9b7fe8',
    description: 'From Bollywood to Tollywood fusion, our senior classes offer a rich, fulfilling dance experience with performance opportunities.',
    includes: ['Bollywood & Tollywood Fusion', 'Folk & contemporary styles', 'Fitness & expression', 'Competition & showcase'],
  },
  {
    level: 'Bolly Beats for Fitness',
    ageRange: 'All Ages',
    badge: '🔥',
    color: '#e87f7f',
    description: 'A high-energy Bollywood-inspired fitness class that combines dance with cardio — burn calories, have fun, and feel amazing all at once!',
    includes: ['Bollywood cardio routines', 'Full-body workout', 'No experience needed', 'Fun group energy'],
  },
];

export default function Classes() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(40px)';
      ref.current.style.transition = 'all 0.8s ease';
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="classes" style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(180deg, #0d0d1a, #111125)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} ref={ref}>
          <span style={{
            fontSize: '0.7rem',
            letterSpacing: '6px',
            color: '#38b2c8',
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '1rem',
          }}>What We Offer</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#f8f4ee',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Classes for <em style={{ color: '#c9a84c' }}>Every</em> Dancer
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #38b2c8, #c9a84c)', margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'rgba(248,244,238,0.55)', maxWidth: '500px', margin: '0 auto', fontWeight: '300', lineHeight: 1.8 }}>
            Structured programs designed for every age and skill level — from first steps to stage-ready performances.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {classes.map((cls, i) => (
            <div key={cls.level} style={{
              position: 'relative',
              padding: '2.5rem',
              border: `1px solid ${cls.color}30`,
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.02)',
              transition: 'all 0.4s ease',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = cls.color + '70';
              e.currentTarget.style.background = cls.color + '08';
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 20px 60px ${cls.color}20`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = cls.color + '30';
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${cls.color}, transparent)`,
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>{cls.badge}</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.5rem',
                    color: '#f8f4ee',
                    fontWeight: '700',
                    lineHeight: 1.1,
                  }}>{cls.level}</h3>
                  <span style={{
                    background: cls.color + '25',
                    color: cls.color,
                    fontSize: '0.7rem',
                    letterSpacing: '2px',
                    padding: '3px 10px',
                    borderRadius: '2px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                  }}>{cls.ageRange}</span>
                </div>
              </div>

              <p style={{
                color: 'rgba(248,244,238,0.65)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
                fontWeight: '300',
              }}>{cls.description}</p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {cls.includes.map(item => (
                  <li key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'rgba(248,244,238,0.75)',
                    fontSize: '0.88rem',
                  }}>
                    <span style={{ color: cls.color, fontSize: '0.7rem' }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: 'block',
                marginTop: '2rem',
                padding: '12px',
                textAlign: 'center',
                border: `1px solid ${cls.color}50`,
                borderRadius: '2px',
                color: cls.color,
                fontSize: '0.8rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.target.style.background = cls.color; e.target.style.color = '#0a0a0f'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = cls.color; }}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
