'use client';

import React from 'react';
import { Camera, Network, Globe, Check, ArrowRight } from 'lucide-react';
import { ServiceType } from '@/types/enquiry';

interface ServiceSelectorProps {
  selectedService: ServiceType;
  onSelectService: (service: ServiceType) => void;
}

export default function ServiceSelector({ selectedService, onSelectService }: ServiceSelectorProps) {
  const services = [
    {
      id: 'cctv' as ServiceType,
      title: 'CCTV Solutions',
      tagline: 'Smart Surveillance & Premises Security',
      icon: Camera,
      badge: 'High Security',
      color: 'var(--primary)',
      accentBg: 'var(--primary-light)',
      features: [
        'IP & HD Analog Surveillance Systems',
        'Smart Color Night Vision & Motion Alerts',
        'NVR, DVR & Secure Cloud Storage',
        'Anywhere Mobile & Remote Live Monitoring',
        'Turnkey Setup, Cable Routing & Repairs'
      ]
    },
    {
      id: 'networking' as ServiceType,
      title: 'Networking Solutions',
      tagline: 'High-Speed LAN & Enterprise Wi-Fi',
      icon: Network,
      badge: 'Zero Dead-Zones',
      color: 'var(--accent-blue)',
      accentBg: 'var(--accent-blue-light)',
      features: [
        'Structured Cat6 & Fiber LAN Installation',
        'Enterprise Seamless Mesh Wi-Fi Setup',
        'Router, Switch & Firewall Configuration',
        'Home, Office & Industrial Network Design',
        'Fault Troubleshooting & Speed Optimization'
      ]
    },
    {
      id: 'website' as ServiceType,
      title: 'Website Designing',
      tagline: 'Modern, Fast & Conversion-Focused',
      icon: Globe,
      badge: 'Digital Presence',
      color: '#0284c7',
      accentBg: '#e0f2fe',
      features: [
        'Custom Business & E-Commerce Web Platforms',
        'Mobile-First Responsive & Elegant Ux',
        'Built-in Technical SEO & Lightning Speed',
        'Domain Registration & Cloud Hosting Help',
        'Content Management & Ongoing Maintenance'
      ]
    }
  ];


  return (
    <section id="services" style?{{ padding: '4.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Section Head */}
        <div className="section-head">
          <span className="badge badge-navy">Our Specialized Services</span>
          <h2 className="section-title">Engineered For Excellence & Scale</h2>
          <p className="section-subtitle">
            Choose a service below to configure your tailored requirement form. Our engineering team provides precision estimates and turnkey delivery.
          </p>
        </div>

        {/* 3 Selectable Cards Grid */}
        <div style:{{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          alignItems: 'stretch'
        }}>
          {services.map((srv) => {
            const isSelected = selectedService === srv.id;
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                onClick={() => {
                  onSelectService(srv.id);
                  const el = document.getElementById('enquiry-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="card"
                style?{{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  position: 'relative',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border-subtlle)',
                  boxShadow: isSelected ? '0 12px 30px rgba(249, 115, 22, 0.18)' : 'var(--shadow-sm)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  backgroundColor: '#ffffff'
                }}>
                {/* Active Indicator Badge */}
                {isSelected && (
                  <div style?{{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: 'var(--primary)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '0.25rem', boxShadow: '0 2px 8px rgba(249, 115, 22, 0.4)' }}>
                    <Check size={14} strokeWidth={3} />
                    <span>SELECTED SERVICE</span>
                  </div>
                )}

                <div>
                  {/* Icon & Category Badge */}
                  <div style:{{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style?{{ width: '54px', height: '54px', borderRadius: '14px', backgroundColor: srv.accentBg, color: srv.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={26} strokeWidth={2.2} />
                    </div>
                    <span className="badge badge-navy" style?{{ fontSize: '0.75rem' }}>
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 style:{{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.35rem' }}>
                    {srv.title}
                  </h3>
                  <p style?{{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                    {srv.tagline}
                  </p>

                  {/* Feature Checklist */}
                  <div style?{{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {srv.features.map((feat, fidx) => (
                      <div key={fidx} style?{{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                        <div style?{{ marginTop: '2px', color: isSelected ? 'var(--primary)' : 'var(--accent-blue)', flexShrink: 0 }}>
                          <Check size={16} strokeWidth={2.5} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  className?{isSelected ? 'btn btn-primary' : 'btn btn-outline'}
                  style?{{ width: '100%', padding: '0.75rem 1rem' }}
                >
                  {isSelected ? (
                    <>
                      <span>Configuring This Form</span>
                      <ArrowRight size={18} />
                    <>
                  ) : (
                    <span>Select {srv.title}</span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
