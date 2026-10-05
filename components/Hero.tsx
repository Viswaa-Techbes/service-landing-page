'use client';

import React from 'react';
import { ShieldCheck, Zap, Layers, Award, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Hero() {
  const waUrl = getWhatsAppUrl();

  const trustItems = [
    {
      icon: ShieldCheck,
      color: 'var(--primary)',
      bg: 'var(--primary-light)',
      title: 'Certified Technicians',
      desc: 'Rigorous engineering standards & background-verified specialists.'
    },
    {
      icon: Zap,
      color: 'var(--accent-blue)',
      bg: 'var(--accent-blue-light)',
      title: 'Rapid Deployment',
      desc: 'Quick turnaround for on-site visits, setups, and urgent repairs.'
    },
    {
      icon: Layers,
      color: '#10b981',
      bg: '#ecfdf5',
      title: 'Custom Architecture',
      desc: 'Engineered specifically for your building blueprint & bandwidth.'
    },
    {
      icon: Award,
      color: '#8b5cf6',
      bg: '#f5f3ff',
      title: '100% Transparent',
      desc: 'Clear itemized estimates with zero hidden markups or surprises.'
    }
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '4.5rem 0 3.5rem 0',
      background: 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.08) 0%, rgba(37, 99, 235, 0.03) 40%, rgba(248, 250, 252, 1) 100%)',
      borderBottom: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Top Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <span className="badge badge-orange" style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} />
              <span>TechBes Professional Engineering Services</span>
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: 'var(--secondary)',
            marginBottom: '1.5rem'
          }}>
            Smart CCTV, High-Speed Networking & Modern{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Website Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
            maxWidth: '740px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            End-to-end technology infrastructure engineered for homes, offices, retail spaces, and enterprises.
            Get certified technicians, custom project planning, and transparent turnkey implementation.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}>
            <a
              href="#enquiry-section"
              className="btn btn-primary"
              style={{ padding: '0.95rem 1.85rem', fontSize: '1.025rem' }}
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={19} />
            </a>

            <a
              href="#services"
              className="btn btn-outline"
              style={{ padding: '0.95rem 1.75rem', fontSize: '1.025rem' }}
            >
              <span>Explore Services</span>
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.95rem 1.75rem', fontSize: '1.025rem' }}
            >
              <MessageCircle size={19} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Trust Highlight Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginTop: '1rem'
        }}>
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '1.35rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  textAlign: 'left'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: item.bg,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
