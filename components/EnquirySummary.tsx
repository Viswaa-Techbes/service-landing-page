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
  CheckCircle,
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
    <div className="card" style:{{
      padding: '2.25rem',
      backgroundColor: '#ffffff',
      border: '2px solid var(--border-subtlle)',
      boxShadow: 'var(--shadow-md)',
      borderRadius: 'var(--radius-lg)'
    }}>
      {{/* Header */}
      <div style?{{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
        <div>
          <span className="badge badge-orange" style?{{ marginBottom: '0.4rem' }}>
            <FileText size={14} />
            <span>Review Your Requirements</span>
          </span>
          <h3 style?{{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)' }}>
            Enquiry Summary
          </h3>
        </div>

        <div style?{{ backgroundColor: 'var(--secondary)', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', fontWeeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={18} color="var(--primary)" />
          <span>{currentServiceTitle}</span>
        </div>
      </div>

      {/* Grid of Sections */}
      <div style:{{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
        
        {{/* Customer Info Box */}
        <div style?{{ backgroundColor: 'var(--bg-page)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <h4 style:{{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
            Contact & Scheduling
          </h4>
          <div style:{{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem' }}>
            <div style?{{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <User size={16} color="var(--primary)" />
              <span style?{{ fontWeight: 600, color: 'var(--secondary)' }}>{enquiry.common.fullName}</span>
            </div>
            <div style?{{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <Phone size={16} color="var(--primary)" />
              <span>{enquiry.common.mobileNumber}</span>
            </div>
            {enquiry.common.email && (
              <div style:{{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Mail size={16} color="var(--primary)" />
                <span>{enquiry.common.email}</span>
              </div>
            )}
            <div style:{{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <MapPin size={16} color="var(--primary)" />
              <span>{enquiry.common.location}</span>
            </div>
            <div style?{{ display: 'flex', alignItems: 'center', gap: '0.625rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-subtlle)' }}>
              <Calendar size={16} color="var(--accent-blue)" />
              <span>Preferred Date: {enquiry.common.preferredDate || 'Flexible / As soon as possible'}</span>
            </div>
            <div style?{{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <Clock size={16} color="var(--accent-blue)" />
              <span>Preferred Time: {enquiry.common.preferredTime || 'Any Time'}</span>
            </div>
          </div>
        </div>


        {/* Service Requirements Box */}
        <div style:{{
          backgroundColor: 'var(--bg-page',
          padding: '1.25rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          <h4 style:{{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
            Service Requirements
          </h4>

          {enquiry.service === 'cctv' && (
            <div style?{{ display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.925rem' }}>
              <div><strong>Requirement:</strong> {enquiry.cctv.requirementType}</div>
              <div><strong>Cameras:</strong> {enquiry.cctv.numberOfCameras === 'Custom' ? `${enquiry.cctv.customCameraCount || 'Custom'} Cameras` : `${enquiry.cctv.numberOfCameras} Cameras`}</div>
              <div><strong>Camera Type:</strong> {enquiry.cctv.cameraType}</div>
              <div><strong>Technology:</strong> {enquiry.cctv.cameraTechnology}</div>
              <div><strong>Recording:</strong> {enquiry.cctv.recording}</div>
              <div><strong>Cable Length:</strong> {enquiry.cctv.cableLength || 'Tm�������͕�͕���𽑥��(��������������핹�ե�乍��ع����ѥ����I��եɕ����̀����(�����������������؁��屔��쁵�ɝ��Q��耜���ɕ�����������Q��耜���ɕ������ɑ��Q��耜������͡���مȠ����ɑ�ȵ�Չѱ��������(���������������������ɽ���9�ѕ����ɽ����핹�ե�乍��ع����ѥ����I��եɕ������(����������������𽑥��(����������������(������������𽑥��(������������((����������핹�ե��͕�٥�����􀝹��ݽɭ���������(�������������؁��屔��쁑������耝������������ɕ�ѥ��耝���յ�������耜�����ɕ��������M��耜�����ɕ������(��������������������ɽ���I��եɕ��������ɽ����핹�ե�乹��ݽɭ����ɕ�եɕ����Q����𽑥��(��������������������ɽ���Aɽ�����Q�������ɽ����핹�ե�乹��ݽɭ�����ɽ�����Q����𽑥��(��������������������ɽ���I���̀��ɕ������ɽ����핹�ե�K��]�ܚ�[�˛�[X�\�ٔ���\�	ӛ��X�Y�YY	�O�]���]����ۙϓ�]�ܚ��[�Ώ���ۙψ�[�]Z\�K��]�ܚ�[�˘\��[X]S�]�ܚ��[��	ӛ��X�Y�YY	�O�]���]����ۙϕ�KQ�H�YYY����ۙψ�[�]Z\�����ݽɭ����ݥ��I��եɕ�����𽑥��(��������������핹�ե�乹��ݽɭ��������ѥ����I��եɕ����̀����(�����������������؁��屔��쁵�ɝ��Q��耜���ɕ�����������Q��耜���ɕ������ɑ��Q��耜������͡���مȠ����ɑ�ȵ�Չѱ��������(���������������������ɽ���9�ѕ����ɽ����핹�ե�K��]�ܚ�[�˘Y][ۘ[�\]Z\�[Y[��B��]���
_B��]���
_B���[�]Z\�K��\��X�HOOH	��X��]I�	��
�]��[O���\�^N�	ٛ^	��^\�X�[ێ�	���[[���\�	����\�[I��۝�^�N�	��L�\�[I�_O��]����ۙϔ�\]Z\�[Y[�����ۙψ�[�]Z\�K��X��]K��\]Z\�[Y[�\_O�]���]����ۙϐ�\�[�\���[YN����ۙψ�[�]Z\�K��X��]K��\�[�\�Ә[YH	ӛ��X�Y�YY	�O�]���]����ۙϑ\�[X]YY�\Ώ���ۙψ�[�]Z\�K��X��]K��[X�\�ٔY�\�	ӛ��X�Y�YY	�O�]���]����ۙϑ�XZ[�����ۙψ�[�]Z\�K��X��]K��XZ[�O�]���]����ۙϒ��[�Ώ���ۙψ�[�]Z\�K��X��]K���[��O�]����[�]Z\�K��X��]K��Y�\�[��U�X��]H	��]����ۙϔ�Y�\�[��N����ۙψ�[�]Z\�K��X��]K��Y�\�[��U�X��]_O�]��B��[�]Z\�K��X��]K�Y][ۘ[�\]Z\�[Y[��	��
�]��[O���X\��[���	��\�[I�Y[����	��\�[I��ܙ\���	�\\�Y�\�KX�ܙ\�\�X�JI�_O����ۙϓ��\����ۙψ�[�]Z\�K��X��]K�Y][ۘ[�\]Z\�[Y[��B��]���
_B��]���
_B��]����]������ʈX�[ۈ�]ۜ�
��B�]��[N��\�^N�	ٛ^	���^ܘ\�	�ܘ\	��[Yے][\Έ	��[�\����\�Y�P�۝[��	��X�KX�]�Y[����\�	�\�[I��Y[����	�K��\�[I���ܙ\���	�\��Y�\�KX�ܙ\�\�X�JI_O���]ۂ�\OH��]ۈ��ې�X��^�ۑY]B��\�Ә[YOH�����[�][�H���[N���Y[�Έ	��\�[HK��[I�_B���Y]��^�O^�M�Hς��[��Y]]Z[���[���؝]ۏ���]��[O���\�^N�	ٛ^	��^ܘ\�	�ܘ\	�[Yے][\Έ	��[�\���\�	�\�[I�_O��B��Y�^��U\�B�\��]H�؛[�Ȃ��[H����[�\��ܙY�\��\����\�Ә[YOH�����]�]�\���[O���Y[�Έ	��\�[HK��[I�_B���Y\��Y�P�\��H�^�O^�NHς��[���۝[�YHۈ�]�\��[����O����]ۂ�\OH��]ۈ��ې�X��^�۔�X�Z]B��\�Ә[YOH�����\�[X\�H���[O���Y[�Έ	��\�[HK���[I�_B����[��^�O^�NHς��[���X�Z][�]Z\�O��[���؝]ۏ���]����]����]���
NB