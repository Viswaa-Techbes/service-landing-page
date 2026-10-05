'use client';

import React from 'react';
import {
  CheckCircle,
  ShieldCheck,
  Cpu,
  Receipt,
  Headphones,
  GraduationCap
} from 'lucide-react';

export default function WhyChooseTechbes() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Certified Engineering Specialists',
      desc: 'Our technicians hold industry certifications in CCTV security architecture, structured cabling, and modern full-stack web engineering.',
      highlight: 'Certified Standards'
    },
    {
      icon: Cpu,
      title: 'Tailored Blueprint & Capacity Planning',
      desc: 'We never deploy generic packages. Every camera angle, network point, and website architecture is custom planned for your specific site layout.',
      highlight: 'Custom Engineering'
    },
    {
      icon: CheckCircle,
      title: 'Tested Enterprise-Grade Equipment',
      desc: 'We partner with leading global hardware manufacturers to supply genuine cameras, Cat6/fiber cables, and high-performance routers with warranty.',
      highlight: 'Genuine Hardware'
    },
    {
      icon: Receipt,
      title: 'Transparent Itemized Quotations',
      desc: 'Receive clear, fully itemized proposals before work begins. No hidden line items, unexpected add-ons, or surprise labor surcharges.',
      highlight: 'Zero Hidden Costs'
    },
    {
      icon: GraduationCap,
      title: 'Complete Handover & Client Training',
      desc: 'We do not leave until your system is calibrated, mobile applications are paired, passwords secured, and your staff trained on operation.',
      highlight: 'Turnkey Handover'
    },
    {
      icon: Headphones,
      title: 'Dedicated Local & Remote Support',
      desc: 'Reliable post-installation assistance for troubleshooting, firmware updates, network recalibration, and preventive periodic maintenance.',
      highlight: 'Ongoing Support'
    }
  ];

  return (
    <section id="why-choose-us" style={{ padding: '5.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        
        {/* Head */}
        <div className="section-head">
          <span className="badge badge-navy">The TechBes Standard</span>
          <h2 className="section-title">Why Businesses & Homeowners Trust TechBes</h2>
          <p className="section-subtitle">
            Reliable engineering, disciplined workmanship, and dedicated after-sales service. Here is how we ensure project success from consultation to commissioning.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem'
        }}>
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <span className="badge badge-orange" style={{ fontSize: '0.75rem' }}>
                    {item.highlight}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
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
