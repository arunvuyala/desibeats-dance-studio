import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', age: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '3px',
    color: '#f8f4ee',
    fontFamily: "'Raleway', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{
      padding: '8rem 2rem',
      background: 'linear-gradient(180deg, #0d0d1a, #0a0a0f)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{
            fontSize: '0.7rem',
            letterSpacing: '6px',
            color: '#38b2c8',
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '1rem',
          }}>Begin Your Journey</span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#f8f4ee',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Join <em style={{ color: '#c9a84c' }}>DesiBeats</em> Today
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #38b2c8, #c9a84c)', margin: '0 auto' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.6rem',
              color: '#f8f4ee',
              marginBottom: '2rem',
              fontWeight: '600',
            }}>Get In Touch</h3>

            {[
              { icon: '📍', label: 'Location', value: '1625 Indian Apple Way\nLeander, TX 78641' },
              { icon: '📞', label: 'Phone', value: '(818) 406-1270' },
              { icon: '📸', label: 'Instagram', value: '@desi_beats_by_shravani' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1.5rem',
                padding: '1.25rem',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '4px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.background = 'rgba(201,168,76,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ color: '#c9a84c', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ color: 'rgba(248,244,238,0.8)', fontSize: '0.95rem', whiteSpace: 'pre-line', lineHeight: 1.5 }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              border: '1px solid rgba(56,178,200,0.2)',
              borderRadius: '4px',
              background: 'rgba(56,178,200,0.04)',
            }}>
              <div style={{ color: '#38b2c8', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.5rem' }}>Classes Available For</div>
              <div style={{ color: 'rgba(248,244,238,0.75)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                ⭐ Ages 4+ (Little Stars)<br/>
                🌟 Pre-Teens (8–12)<br/>
                💫 Teens & Adults (13+)
              </div>
            </div>
          </div>

          {/* Enrollment Form */}
          <div>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '8px',
                background: 'rgba(201,168,76,0.05)',
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }}>🎊</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#f8f4ee', marginBottom: '1rem' }}>Welcome to DesiBeats!</h3>
                <p style={{ color: 'rgba(248,244,238,0.65)', lineHeight: 1.7 }}>We'll be in touch soon to get you started on your dance journey!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.6rem',
                  color: '#f8f4ee',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                }}>Enrollment Inquiry</h3>

                {[
                  { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                  { name: 'email', placeholder: 'Email Address', type: 'email' },
                  { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                ].map(field => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                ))}

                <select
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                >
                  <option value="" style={{ background: '#111125' }}>Select Age Group</option>
                  <option value="4-7" style={{ background: '#111125' }}>Ages 4–7 (Little Stars)</option>
                  <option value="8-12" style={{ background: '#111125' }}>Ages 8–12 (Pre-Teens)</option>
                  <option value="13+" style={{ background: '#111125' }}>Ages 13+ (Teens & Adults)</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your dance experience or questions..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,168,76,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />

                <button type="submit" style={{
                  background: 'linear-gradient(135deg, #c9a84c, #f0d080)',
                  color: '#0a0a0f',
                  padding: '16px',
                  border: 'none',
                  borderRadius: '3px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: '800',
                  fontSize: '0.9rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(201,168,76,0.5)'; }}
                onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                >
                  Send Enrollment Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
