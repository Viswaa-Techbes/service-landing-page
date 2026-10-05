'use client';

import React from 'react';
import { Camera, HardDrive, Cpu, Sliders } from 'lucide-react';
import {
  CctvDetails,
  CctvRequirementType,
  CctvCameraCount,
  CctvCameraType,
  CctvCameraTechnology,
  CctvRecording
} from '@/types/enquiry';

interface CctvFormProps {
  data: CctvDetails;
  onChange: (updated: Partial<CctvDetails>) => void;
}

export default function CctvForm({ data, onChange }: CctvFormProps) {
  const requirementTypes: CctvRequirementType[] = [
    'New Installation',
    'Repair',
    'Maintenance',
    'Upgrade'
  ];

  const cameraCounts: CctvCameraCount[] = [
    '1', '2', '4', '6', '8', '12', '16', 'Custom'
  ];

  const cameraTypes: CctvCameraType[] = [
    'Indoor',
    'Outdoor',
    'Both'
  ];

  const technologies: CctvCameraTechnology[] = [
    'IP Camera',
    'HD / Analog',
    'Not Sure'
  ];

  const recordingOptions: CctvRecording[] = [
    'DVR',
    'NVR',
    'Cloud',
    'Not Sure'
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Requirement Type */}
      <div className="form-group">
        <label className="form-label">
          <Sliders size={16} color="var(--primary)" />
          <span>CCTV Requirement Type</span>
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

      {/* Number of Cameras */}
      <div className="form-group">
        <label className="form-label">
          <Camera size={16} color="var(--primary)" />
          <span>Number of Cameras</span>
        </label>
        <div className="pill-grid">
          {cameraCounts.map((cnt) => (
            <button
              key={cnt}
              type="button"
              onClick={() => onChange({ numberOfCameras: cnt })}
              className={`pill-btn ${data.numberOfCameras === cnt ? 'active' : ''}`}
            >
              {cnt === 'Custom' ? 'Custom Count' : `${cnt} ${cnt === '1' ? 'Camera' : 'Cameras'}`}
            </button>
          ))}
        </div>

        {/* Custom Count Input */}
        {data.numberOfCameras === 'Custom' && (
          <div style={{ marginTop: '0.75rem' }}>
            <input
              type="text"
              placeholder="Enter custom camera count (e.g. 24 or 32)"
              value={data.customCameraCount || ''}
              onChange={(e) => onChange({ customCameraCount: e.target.value })}
              className="form-input"
            />
          </div>
        )}
      </div>

      {/* Camera Type & Technology in 2 columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        
        {/* Camera Type */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">
            <Camera size={16} color="var(--primary)" />
            <span>Camera Placement / Type</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {cameraTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => onChange({ cameraType: type })}
                className={`pill-btn ${data.cameraType === type ? 'active' : ''}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Camera Technology */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label">
            <Cpu size={16} color="var(--primary)" />
            <span>Camera Technology</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {technologies.map((tech) => (
              <button
                key={tech}
                type="button"
                onClick={() => onChange({ cameraTechnology: tech })}
                className={`pill-btn ${data.cameraTechnology === tech ? 'active' : ''}`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recording */}
      <div className="form-group">
        <label className="form-label">
          <HardDrive size={16} color="var(--primary)" />
          <span>Recording / Storage Preference</span>
        </label>
        <div className="pill-grid">
          {recordingOptions.map((rec) => (
            <button
              key={rec}
              type="button"
              onClick={() => onChange({ recording: rec })}
              className={`pill-btn ${data.recording === rec ? 'active' : ''}`}
            >
              {rec}
            </button>
          ))}
        </div>
      </div>

      {/* Cable Length */}
      <div className="form-group">
        <label className="form-label">
          <span>Estimated Cable Length</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
        </label>
        <input
          type="text"
          placeholder="e.g. 50 - 100 meters, or 'Need site survey for estimation'"
          value={data.cableLength || ''}
          onChange={(e) => onChange({ cableLength: e.target.value })}
          className="form-input"
        />
      </div>

      {/* Additional Requirements */}
      <div className="form-group" style={{ marginBottom: 0 }}>
        <label className="form-label">
          <span>Additional CCTV Requirements / Site Details</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Need audio recording, number of days storage required, high-zoom lens for parking lot, mobile app setup..."
          value={data.additionalRequirements || ''}
          onChange={(e) => onChange({ additionalRequirements: e.target.value })}
          className="form-textarea"
        />
      </div>
    </div>
  );
}
