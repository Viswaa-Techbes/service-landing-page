'use client';

import React from 'react';
import { CheckCircle2, MessageCircle, RotateCcw, ShieldCheck } from 'lucide-react';
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
    <div className="card" style:{{
      padding: '3.5rem 2rm',
      textAlign: 'center',
      maxWidth: '680px',
      margin: '0 auto',
      border: '2px solid #10b981',
      boxShadow: '0 12px 35px -5px rgba(16, 185, 129, 0.18)',
      borderRadius: 'var(--radius-lg)'
    }}>
      <div style?{{
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
        <CheckCircle2 size=z�����7G&��Uv�GF�׳"�W�����F�cࠢ�F�b7G��S����&v��&�GF�Ӣs�sW&V�r����7�6�74��S�&&FvR"7G��S���&6�w&�V�D6���#�r6V6fFcRr�6���#�r3Cs�Srr���V�V�'�6��f�&�V@���7����F�cࠢƃ"7G��S���f��E6��S�s�&V�r�f��EvV�v�C���6���#�wf"���6V6��F'��r��&v��&�GF�Ӣs�sW&V�r���F����R��V�V�'��6������gV����R��uf�VVB7W7F��W"w�����#ࠢ�7G��S���f��E6��S�s�W&V�r�6���#�wf"���FW�B��WFVB�r�Ɩ�T�V�v�C��b��&v��&�GF�Ӣs'&V�r�����W"V�V�'�f�"�7G&��r7G��S���6���#�wf"���6V6��F'��r���6W'f�6T��W5�V�V�'��6W'f�6U����7G&��s��2&VV�&V6V�fVB��W"V�v��VW&��r7V6�Ɨ7Bv���&Wf�Wr��W"&WV�&V�V�G2�B6��F7B��RB�7G&��r7G��S���6���#�wf"���6V6��F'��r���V�V�'��6��������&��T�V�&W'���7G&��s�v�F���3֖�WFW2���ࠢ��5D'WGF��2��Т�F�b7G��S���F�7���vf�W�r�f�W�w&�ww&r�Ɩv�FV�3�v6V�FW"r��W7F�g�6��FV�C�v6V�FW"r�v�s&V�r������&Vc׷vW&�ТF&vWC�%�&�� �&V��&���V�W"��&VfW'&W" �6�74��S�&'F�'F��v�G6 �7G��S���FF��s�s�W&V��sW&V�r�f��E6��S�s&V�r�����W76vT6�&6�R6��S׳#����7��6��F��VR��v�G4��7����ࠢ�'WGF��G�S�&'WGF�� ���6Ɩ6�׶���WtV�V�'�Т6�74��S�&'F�'F���WFƖ�R �7G��S���FF��s�s�W&V��sW&V�r�f��E6��S�s&V�r����&�FFT67r6��S�ǳ�����7��7V&֗B��F�W"V�V�'���7����'WGF�����F�c���F�c����Р