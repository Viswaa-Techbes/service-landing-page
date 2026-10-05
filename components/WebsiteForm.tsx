'use client';

import React from 'react';
import { Globe, Building, Layout, Server, Link as LinkIcon, Sliders } from 'lucide-react';
import {
  WebsiteDetails,
  WebsiteRequirementType,
  WebsiteDomainStatus,
  WebsiteHostingStatus
} from '@/types/enquiry';

interface WebsiteFormProps {
  data: WebsiteDetails;
  onChange: (updated: Partial<WebsiteDetails>) => void;
}

export default function WebsiteForm({ data, onChange }: WebsiteFormProps) {
  const requirementTypes: WebsiteRequirementType[] = [
    'New Website',
    'Business Website',
    'E-commerce Website',
    'Website Redesign',
    'Website Maintenance'
  ];

  const domainOptions: WebsiteDomainStatus[] = [
    'Already Have',
    'Need New Domain',
    'Not Sure'
  ];

  const hostingOptions: WebsiteHostingStatus[] = [
    'Already Have',
    'Need Hosting',
    'Not Sure'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Requirement Type */}
      <div className="form-group">
        <label className="form-label">
          <Sliders size={16} color="#0284c7" />
          <span>Website Requirement Type</span>
        </label>
        <div className="pill-grid">
          {requirementTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => onChange({ requirementType: type })}
              className={`pill-btn ${data.requirementType === type ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Business Name & Number of Pages in 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        
        {/* Business / Company Name */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">
            <Building size={16} color="#0284c7" />
            <span>Business / Company Name</span>
          </label>
          <input
            type="text"
            placeholder="e.g. TechBes Solutions Pvt Ltd"
            value={data.businessName || ''}
            onChange={(e) => onChange({ businessName: e.target.value })}
            className="form-input"
          />
        </div>

        {/* Number of Pages */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">
            <Layout size={16} color="#0284c7" />
            <span>Estimated Number of Pages</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 5 pages, 10+ pages, One-page landing"
            value={data.numberOfPages || ''}
            onChange={(e) => onChange({ numberOfPages: e.target.value })}
            className="form-input"
          />
        </div>
      </div>

      {/* Domain & Hosting in 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        
        {/* Domain */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">
            <Globe size={16} color="#0284c7" />
            <span>Domain Status</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {domainOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange({ domain: opt })}
                className={`pill-btn ${data.domain === opt ? 'active' : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Hosting */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">
            <Server size={16} color="#0284c7" />
            <span>Hosting Status</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {hostingOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange({ hosting: opt })}
                className={`pill-btn ${data.hosting === opt ? 'active' : ''}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reference Website */}
      <div className="form-group">
        <label className="form-label">
          <LinkIcon size={16} color="#0284c7" />
          <span>Reference / Competitor Website</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
        </label>
        <input
          type="text"
          placeholder="e.g. https://example.com or competitor site you like"
          value={data.referenceWebsite || ''}
          onChange={(e) => onChange({ referenceWebsite: e.target.value })}
          className="form-input"
        />
      </div>

      {/* Additional Requirements */}
      <div className="form-group" style={{ marginBottom: 0 }}>
        <label className="form-label">
          <span>Website Goals, Features & Notes</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Need WhatsApp chat integration, contact form with email notifications, payment gateway, multi-language support, specific brand colors..."
          value={data.additionalRequirements || ''}
          onChange={(e) => onChange({ additionalRequirements: e.target.value })}
          className="form-textarea"
        />
      </div>
    </div>
  );
}
