'use client';

import React from 'react';
import {
  ShieldCheck,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Edit3,
  Send,
  MessageCircle,
  FileText
} from 'lucide-react';
import { EnquiryState } from '@/types/enquiry';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface EnquirySummaryProps {
  enquiry: EnquiryState;
  onEdit: () => void;
  onSubmit: () => void;
}

export default function EnquirySummary({ enquiry, onEdit, onSubmit }: EnquirySummaryProps) {
  const serviceLabels = {
    cctv: 'CCTV Solutions',
    networking: 'Networking Solutions',
    website: 'Website Designing'
  };

  const currentServiceTitle = serviceLabels[enquiry.service];
  const waUrl = getWhatsAppUrl(enquiry);

  return (
    <div className="card" style={{
      padding: '2.25rem',
      backgroundColor: '#ffffff',
      border: '2px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      borderRadius: 'var(--radius-lg)'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid var(--border-subtle)',
        marginBottom: '1.5rem'
      }}>
        <div>
          <span className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>
            <FileText size={14} />
            <span>Review Your Requirements</span>
          </span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>
            Enquiry Summary
          </h3>
        </div>

        <div style={{
          backgroundColor: 'var(--secondary)',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          borderRadius: 'var(--radius-md)',
          fontWeight: 700,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <ShieldCheck size={18} color="var(--primary)" />
          <span>{currentServiceTitle}</span>
        </div>
      </div>

      {/* Grid of Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
        
        {/* Customer Info Box */}
        <div style={{
          backgroundColor: 'var(--bg-page)',
          padding: '1.25rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
            Contact & Scheduling
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <User size={16} color="var(--primary)" />
              <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>{enquiry.common.fullName}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <Phone size={16} color="var(--primary)" />
              <span>{enquiry.common.mobileNumber}</span>
            </div>
            {enquiry.common.email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Mail size={16} color="var(--primary)" />
                <span>{enquiry.common.email}</span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <MapPin size={16} color="var(--primary)" />
              <span>{enquiry.common.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)' }}>
              <Calendar size={16} color="var(--accent-blue)" />
              <span>Preferred Date: {enquiry.common.preferredDate || 'Flexible / As soon as possible'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <Clock size={16} color="var(--accent-blue)" />
              <span>Preferred Time: {enquiry.common.preferredTime || 'Any Time'}</span>
            </div>
          </div>
        </div>

        {/* Service Requirements Box */}
        <div style={{
          backgroundColor: 'var(--bg-page)',
          padding: '1.25rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
            Service Requirements
          </h4>

          {enquiry.service === 'cctv' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.925rem' }}>
              <div><strong>Requirement:</strong> {enquiry.cctv.requirementType}</div>
              <div><strong>Cameras:</strong> {enquiry.cctv.numberOfCameras === 'Custom' ? `${enquiry.cctv.customCameraCount || 'Custom'} Cameras` : `${enquiry.cctv.numberOfCameras} Cameras`}</div>
              <div><strong>Camera Type:</strong> {enquiry.cctv.cameraType}</div>
              <div><strong>Technology:</strong> {enquiry.cctv.cameraTechnology}</div>
              <div><strong>Recording:</strong> {enquiry.cctv.recording}</div>
              <div><strong>Cable Length:</strong> {enquiry.cctv.cableLength || 'To be assessed'}</div>
              {enquiry.cctv.additionalRequirements && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)' }}>
                  <strong>Notes:</strong> {enquiry.cctv.additionalRequirements}
                </div>
              )}
            </div>
          )}

          {enquiry.service === 'networking' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.925rem' }}>
              <div><strong>Requirement:</strong> {enquiry.networking.requirementType}</div>
              <div><strong>Property Type:</strong> {enquiry.networking.propertyType}</div>
              <div><strong>Rooms / Areas:</strong> {enquiry.networking.numberOfRooms || 'Not specified'}</div>
              <div><strong>Network Points:</strong> {enquiry.networking.approximateNetworkPoints || 'Not specified'}</div>
              <div><strong>Wi-Fi Needed:</strong> {enquiry.networking.wifiRequirement}</div>
              {enquiry.networking.additionalRequirements && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)' }}>
                  <strong>Notes:</strong> {enquiry.networking.additionalRequirements}
                </div>
              )}
            </div>
          )}

          {enquiry.service === 'website' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.925rem' }}>
              <div><strong>Requirement:</strong> {enquiry.website.requirementType}</div>
              <div><strong>Business Name:</strong> {enquiry.website.businessName || 'Not specified'}</div>
              <div><strong>Estimated Pages:</strong> {enquiry.website.numberOfPages || 'Not specified'}</div>
              <div><strong>Domain:</strong> {enquiry.website.domain}</div>
              <div><strong>Hosting:</strong> {enquiry.website.hosting}</div>
              {enquiry.website.referenceWebsite && <div><strong>Reference:</strong> {enquiry.website.referenceWebsite}</div>}
              {enquiry.website.additionalRequirements && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtle)' }}>
                  <strong>Notes:</strong> {enquiry.website.additionalRequirements}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        paddingTop: '1.25rem',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <button
          type="button"
          onClick={onEdit}
          className="btn btn-outline"
          style={{ padding: '0.85rem 1.4rem' }}
        >
          <Edit3 size={17} />
          <span>Edit Details</span>
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.85rem 1.4rem' }}
          >
            <MessageCircle size={18} />
            <span>Continue on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onSubmit}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.6rem' }}
          >
            <Send size={18} />
            <span>Submit Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
