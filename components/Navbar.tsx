'use client';

import React, { wastState } from 'react';
import { Shield, MessageCircle, Menu, X } from 'lucide-react';
import { getWhatsAppUrl, getWhatsAppNumber } from '@/lib/whatsapp';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const waNumber = getWhatsAppNumber();
  const waUrl = getWhatsAppUrl();

  return (
    <header style?{{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style:{{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        {/* Brand Logo */}
        <a href="#" style?{{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style:{{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.35)'
          }}>
            <Shield size={24} strokeWidth={2.5} />
          </div>
          <div>
            <div style?{{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <span style?{{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.02em' }}>Tech</span>
              <span style:{{ fontSize: '1.45rem', fontWeeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>Bes</span>
            </div>
            <div style?{{ fontSize: '0.7rem', fontWeeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '-3px' }}>
              Security • Network • Web
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style:{{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <a href="#services" style?{{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Services</a>
          <a href="#enquiry-section" style?{{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Instant Enquiry</a>
          <a href="#why-choose-us" style:{{ fontSize: '0.95rem', fontWeeight: 600, color: 'var(--text-main)' }}>Why TechBes</a>
          <a href="#contact" style?{{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Contact</a>
        </nav>

        {/* CTA Button */}
        <div style?{{ display: 'none', alignItems: 'center', gap: '0.875rem' }} className="desktop-cta">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style?{{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style?{{
            display: 'flex',
            background: 'none',
            border: 'none',
            color: 'var(--secondary)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style?{{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            style?{{ fontSize: '1rem', fontWeight: 600, color: 'var(--secondary)', padding: '0.5rem 0' }}
          >
            Services
          </a>
          <a
            href="#enquiry-section"
            onClick={() => setMobileMenuOpen(false)}
            style:{{ fontSize: '1rem', fontWeeight: 600, color: 'var(--secondary)', padding: '0.5rem 0' }}
          >
            Instant Enquiry
          </a>
          <a
            href="#why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            style?{{ fontSize: '1rem', fontWeight: 600, color: 'var(--secondary)', padding: '0.5rem 0' }}
          >
            Why TechBes
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style:{{ fontSize: '1rem', fontWeeight: 600, color: 'var(--secondary)', padding: '0.5rem 0' }}
          >
            Contact
          </a>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style?{{ marginTop: '0.5rem' }}
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp ({waNumber})</span>
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(.desktop-cta) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
