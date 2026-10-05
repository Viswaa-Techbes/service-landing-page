'use client';

import React from 'react';
import { CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react';
import { EnquiryState } from '@/types/enquiry';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface SuccessStateProps {
  enquiry: EnquiryState;
  onNewEnquiry: () => void;
}

export default function SuccessState({ enquiry, onNewEnquiry }: SuccessStateProps) {
  const waUrl = getWhatsAppUrl(enquiry);
  const serviceNames = {
    cctv: 'CCTV Solutions',
    networking: 'Networking Solutions',
    website: 'Website Designing'
  };

  return (
    <div className="card" style={{
      padding: '3.5rem 2rem',
      textAlign: 'center',
      maxWidth: '680px',
      margin: '0 auto',
      border: '2px solid #10b981',
      boxShadow: '0 12px 35px -5px rgba(16, 185, 129, 0.18)',
      borderRadius: 'var(--radius-lg)'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#ecfdf5',
        color: '#10b981',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem auto'
      }}>
        <CheckCircle2 size={48} strokeWidth={2.5} />
      </div>

      <div style={{ marginBottom: '0.75rem' }}>
        <span className="badge" style={{ backgroundColor: '#ecfdf5', color: '#047857' }}>
          Enquiry Registered
        </span>
      </div>

      <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '0.75rem' }}>
        Thank You, {enquiry.common.fullName || 'Valued Customer'}!
      </h2>

      <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
        Your enquiry for <strong style={{ color: 'var(--secondary)' }}>{serviceNames[enquiry.service]}</strong> has been recorded.
        Our engineering specialist will review your requirements and reach out to you at <strong style={{ color: 'var(--secondary)' }}>{enquiry.common.mobileNumber}</strong> shortly.
      </p>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ padding: '0.95rem 1.75rem', fontSize: '1rem' }}
        >
          <MessageCircle size={20} />
          <span>Continue on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onNewEnquiry}
          className="btn btn-outline"
          style={{ padding: '0.95rem 1.75rem', fontSize: '1rem' }}
        >
          <RotateCcw size={18} />
          <span>Submit Another Enquiry</span>
        </button>
      </div>
    </div>
  );
}
