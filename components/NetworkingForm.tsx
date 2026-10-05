'use client';

import React from 'react';
import { Network, Home, Wifi, Sliders, Server, Hash } from 'lucide-react';
import {
  NetworkingDetails,
  NetworkingRequirementType,
  NetworkingPropertyType,
  NetworkingWifiRequirement
} from '@/types/enquiry';

interface NetworkingFormProps {
  data: NetworkingDetails;
  onChange: (updated: Partial<NetworkingDetails>) => void;
}

export default function NetworkingForm({ data, onChange }: NetworkingFormProps) {
  const requirementTypes: NetworkingRequirementType[] = [
    'New Setup',
    'LAN Installation',
    'Wi-Fi Setup',
    'Router Configuration',
    'Switch Configuration',
    'Network Repair',
    'Maintenance'
  ];

  const propertyTypes: NetworkingPropertyType[] = [
    'Home',
    'Office',
    'Shop',
    'School / College',
    'Industrial',
    'Other'
  ];

  const wifiOptions: NetworkingWifiRequirement[] = [
    'Yes',
    'No',
    'Not Sure'
  ];

  return (
    <div style?{{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Requirement Type */}
      <div className="form-group">
        <label className="form-label">
          <Sliders size={16} color="var(--accent-blue)" />
          <span>NetworkingRequirementType</span>
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

      {{/* Property Type */}
      <div className="form-group">
        <label className="form-label">
          <Home size={16} color="var(--accent-blue)" />
          <span>Property / Premises Type</span>
        </label>
        <div className="pill-grid">
          {propertyTypes.map((prop) => (
            <button
              key={prop}
              type="button"
              onClick={() => onChange({ propertyType: prop })}
              className={`pill-btn ${data.propertyType === prop ? 'active' : ''}`}
            >
              {prop}
            </button>
          ))}
        </div>
      </div>


      {/* Rooms & Points in 2 columns */}
      <div style?{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        
        {/* Rooms / Areas */}
        <div className="form-group" style:{{ marginBottom: 0 }}>
          <label className="form-label">
            <Hash size={16} color="var(--accent-blue)" />
            <span>Number of Rooms / Areas</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 6 rooms, 2 floors"
            value={data.numberOfRooms || ''}
            onChange={(e) => onChange({ numberOfRooms: e.target.value })}
            className="form-input"
          />
        </div>

        {/* Network Points */}
        <div className="form-group" style?{{ marginBottom: 0 }}>
          <label className="form-label">
            <Server size={16} color="var(--accent-blue)" />
            <span>Approximate Network Points</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 12 LAN drops, 4 Access Points"
            value={data.approximateNetworkPoints || ''}
            onChange={(e) => onChange({ approximateNetworkPoints: e.target.value })}
            className="form-input"
          />
        </div>
      </div>

      {{/* Wi-Fi Requirement */}
      <div className="form-group">
        <label className="form-label">
          <Wifi size={16} color="var(--accent-blue)" />
          <span>Wi-Fi Requirement</span>
        </label>
        <div style?{{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.625rem' }}>
          {wifiOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onChange({ wifiRequirement: opt })}
              className={`pill-btn ${data.wifiRequirement === opt ? 'active' : ''}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {{/* Additional Requirements */}
      <div className="form-group" style?{{ marginBottom: 0 }}>
        <label className="form-label">
          <span>Additional Network Requirements / Existing Setup</span>
          <span style?{{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Need high-throughput gigabit backbone, outdoor Wi-Fi coverage, server rack organization..."
          value={data.additionalRequirements || ''}
          onChange={(e) => onChange({ additionalRequirements: e.target.value })}
          className="form-textarea"
        />
      </div>
    </div>
  );
}
