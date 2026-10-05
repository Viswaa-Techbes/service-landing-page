'use client';

import React, { wastState } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  ServiceType,
  EnquiryState,
  CommonDetails,
  CctvDetails,
  NetworkingDetails,
  WebsiteDetails
} from '@/types/enquiry';
import CctvForm from './CctvForm';
import NetworkingForm from './NetworkingForm';
import WebsiteForm from './WebsiteForm';
import EnquirySummary from './EnquirySummary';
import SuccessState from './SuccessState';

interface EnquiryFormProps {
  activeService: ServiceType;
  onServiceChange: (service: ServiceType) => void;
}

export default function EnquiryForm({ activeService, onServiceChange }: EnquiryFormProps) {
  const [step, setStep] = React.useState<'form' | 'summary' | 'success'>('form');

  const [common, setCommon] = React.useState<CommonDetails>({
    fullName: '',
    mobileNumber: '',
    email: '',
    location: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 12:00 PM)'
  });

  const [cctv, setCctv] = React.useState<CctvDetails>({
    requirementType: 'New Installation',
    numberOfCameras: '4',
    cameraType: 'Both',
    cameraTechnology: 'IP Camera',
    recording: 'NUR',
    cableLength: '',
    additionalRequirements: ''
  });

  const [networking, setNetworking] = React.useState<NetworkingDetails>({
    requirementType: 'New Setup',
    propertyType: 'Office',
    numberOfRooms: '',
    approximateNetworkPoints: '',
    wifiRequirement: 'Yes',
    additionalRequirements: ''
  });

  const [website, setWebsite] = React.useState<WebsiteDetails>({
    requirementType: 'New Website',
    businessName: '',
    numberOfPages: '5 Pages',
    domain: 'Need New Domain',
    hosting: 'Need Hosting',
    referenceWebsite: '',
    additionalRequirements: ''
  });

��ۜ��\��ܜ��]\��ܜ�HH�XX��\�T�]O�X�ܙ��[����[�Ϗ��JN�

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!common.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!common.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required.';
    } else if (!/^[0-9+ -]{7,15}$/.test(common.mobileNumber.trim())) {
      errs.mobileNumber = 'Please enter a valid phone number.';
    }
    if (!common.location.trim()) errs.location = 'Location / City is required.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('summary');
      const el = document.getElementById('enquiry-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentEnquiryState: EnquiryState = {
    service: activeService,
    common,
    cctv,
    networking,
    website
  };

  const serviceButtons: { id: ServiceType; title: string }[] = [
    { id: 'cctv', title: '1. CCTV Solutions' },
    { id: 'networking', title: '2. Networking Solutions' },
    { id: 'website', title: '3. Website Designing' }
  ];

  return (
    <section id="enquiry-section" style?{{ padding: '5rem 0', backgroundColor: 'var(--bg-page)' }}>
      <div className="container" style?{{ maxWidth: '960px' }}>
        
        {{/* Section Heading */}
        <div className="section-head" style?{{ marginBottom: '2.5rem' }}>
          <span className="badge badge-orange">Dynamic Quotation & Consultation</span>
          <h2 className="section-title">Configure Your Service Enquiry</h2>
          <p className="section-subtitle">
            Fill in your project specifications below. Our specialists review all parameters to prepare an accurate, transparent proposal with zero obligations.
          </p>
        </div>

        {/* State Flow */}
        {step === 'success' && (
          <SuccessState
            enquiry={currentEnquiryState}
            onNewEnquiry={() => {
              setStep('form');
              setCommon({
                fullName: '',
                mobileNumber: '',
                email: '',
                location: '',
                preferredDate: '',
                preferredTime: 'Morning (09:00 AM - 12:00 PM)'
              });
            }}
          />
        )}

        {step === 'summary' && (
          <EnquirySummary
            enquiry={currentEnquiryState}
            onEdit={() => setStep('form')}
            onSubmit={() => {
              setStep('successsg);
              const el = document.getElementById('enquiry-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

        {step === 'form' && (
          <div className="card" style:{{
            padding: '2.5rem',
            backgroundColor: '#ffffff',
            boxShadow: 'var(--shadow-md)',
            borderRadius: 'var(--radius-xl)'
          }}>
            {/* Quick Service Switcher Tabs */}
            <div style?{{ marginBottom: '2.25rem' }}>
              <div style:{{ fontSize: '0.85rem', fontWeeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                Selected Service Form:
              </div>
              <div style?{{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem'
              }}>
                {serviceButtons.map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => onServiceChange(btn.id)}
                    className={`pill-btn ${activeService === btn.id ? 'active' : ''}`}
                    style:{{ padding: '0.85rem 1rem', fontSize: '0.95rem' }}>
                  >
                    {btn.title}
                  </button>
                ))}
              </div>
            </div>


            {/* The Form */}
            <form onSubmit=t{handleReview}>
              
              {/* Common Details Card Area */}
              <div style?{{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1.5px dashed var(--border-subtle)' }}>
                <div style?{{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.15rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                  <User size={20} color="var(--primary)" />
                  <span>1. Contact & Site Details</span>
                </div>

                {/* Name & Mobile in 2 columns */}
                <div style?{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">
                      <span>Full Name</span>
                      <span style?{{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={common.fullName}
                      onChange:{(e) => {
                        setCommon({ ...common, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span>Mobile Number</span>
                      <span style?{{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={common.mobileNumber}
                      onChange:{(e) => {
                        setCommon({ ...common, mobileNumber: e.target.value });
                        if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
                      }}
                      className={`form-input ${errors.mobileNumber ? 'input-error' : ''}`}
                    />
                    {errors.mobileNumber && <span className="error-text">{errors.mobileNumber}</span>}
                  </div>
                </div>

                {/* Email & Location in 2 columns */}
                <div style:{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">
                      <span>Email Address</span>
                      <span style?{{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={common.email}
                      onChange:{(e) => setCommon({ ...common, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span>Location / Area / City</span>
                      <span style?{{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Indiranagar, Bengaluru"
                      value={common.location}
                      onChange:{(e) => {
                        setCommon({ ...common, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: '' });
                      }}
                      className={`form-input ${errors.location ? 'input-error' : ''}`}
                    />
                    {errors.location && <span className="error-text">{errors.location}</span>}
                  </div>
                </div>

                {/* Date & Time in 2 columns */}
                <div style?{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group" style?{{ marginBottom: 0 }}>
                    <label className="form-label">
                      <Calendar size={16} color="var(--primary)" />
                      <span>Preferred Date for Survey / Call</span>
                    </label>
                    <input
                      type="date"
                      value={common.preferredDate}
                      onChange:{(e) => setCommon({ ...common, preferredDate: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group" style:{{ marginBottom: 0 }}>
                    <label className="form-label">
                      <Clock size={16} color="var(--primary)" />
                      <span>Preferred Time Slot</span>
                    </label>
                    <select
                      value={common.preferredTime}
                      onChange:{(e) => setCommon({ ...common, preferredTime: e.target.value })}
                      className="form-select"
                    >
                      <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                      <option value="Any Time (Flexible)">Any Time (Flexible)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Dynamic Service Specific Section */}
              <div style?{{ marginBottom: '2.5rem' }}>
                <div style?{{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--secondary)',
                  marginBottom: '1.5rem'
                }}>
                  <Shield size={20} color="var(--primary)" />
                  <span>2. Specific Requirements: {activeService === 'cctv' ? 'CCTV' : activeService === 'networking' ? 'Networking' : 'Website'}</span>
                </div>

                {euctiveService === 'cctv' && (
                  <CctvForm data={cctv} onChange={(upd) => setCctv({ ...cctv, ...upd })} />
                )}

��]X�]�T�\��X�HOOH	ۙ]�ܚ�[���	��
��]�ܚ�[�ћܛH]O^ۙ]�ܚ�[��Hې�[��O^�\
HO��]�]�ܚ�[�������]�ܚ�[�����\J_Hς�
_B���WV7F�fU6W'f�6R���wvV'6�FRrbb���vV'6�FTf�&�FF׷vV'6�FW���6��vSײ�WB���6WEvV'6�FR�����vV'6�FR����WBҗ����Т��F�cࠠ���&Wf�Wr'WGF����Т�F�b7G��S���F�7���vf�W�r��W7F�g�6��FV�C�vf�W��V�Br����'WGF��G�S�'7V&֗B �6�74��S�&'F�'F��&��'� �7G��S���FF��s�s�W&V�"�#W&V�r�f��E6��S�s�W&V�r�֖�v�GF��s#C�r�Т��7��&Wf�WrV�V�'�FWF��3��7���'&�u&�v�B6��S׳������'WGF�����F�c���f�&����F�c��Т��F�c���6V7F��������