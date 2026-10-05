import { EnquiryState } from '@/types/enquiry';

export function getWhatsAppNumber(): string {
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+919876543210';
  return envNumber.replace(/[^0-9+]/g, '');
}

export function generateWhatsAppMessage(enquiry: EnquiryState): string {
  const serviceTitles: Record<string, string> = {
    cctv: 'CCTV Solutions',
    networking: 'Networking Solutions',
    website: 'Website Designing',
  };

  const lines: string[] = [
    '*NEW SERVICE ENQUIRY - TECHBES*',
    '=============================',
    `*Service:* ${serviceTitles[enquiry.service] || enquiry.service}`,
    '',
    '*CUSTOMER DETAILS:*',
    `- *Name:* ${enquiry.common.fullName || 'Not provided'}`,
    `- *Mobile:* ${enquiry.common.mobileNumber || 'Not provided'}`,
    `- *Email:* ${enquiry.common.email || 'Not provided'}`,
    `- *Location:* ${enquiry.common.location || 'Not provided'}`,
    `- *Preferred Date:* ${enquiry.common.preferredDate || 'Flexible'}`,
    `- *Preferred Time:* ${enquiry.common.preferredTime || 'Flexible'}`,
    '',
    '*SERVICE REQUIREMENTS:*',
  ];

  if (enquiry.service === 'cctv') {
    const cameraCount =
      enquiry.cctv.numberOfCameras === 'Custom'
        ? `${enquiry.cctv.customCameraCount || 'Custom'} Cameras`
        : `${enquiry.cctv.numberOfCameras} Cameras`;

    lines.push(
      `- *Requirement Type:* ${enquiry.cctv.requirementType}`,
      `- *Cameras:* ${cameraCount}`,
      `- *Camera Type:* ${enquiry.cctv.cameraType}`,
      `- *Technology:* ${enquiry.cctv.cameraTechnology}`,
      `- *Recording:* ${enquiry.cctv.recording}`,
      `- *Cable Length:* ${enquiry.cctv.cableLength || 'To be assessed'}`,
      `- *Additional Notes:* ${enquiry.cctv.additionalRequirements || 'None'}`
    );
  } else if (enquiry.service === 'networking') {
    lines.push(
      `- *Requirement Type:* ${enquiry.networking.requirementType}`,
      `- *Property Type:* ${enquiry.networking.propertyType}`,
      `- *Rooms / Areas: ${enquiry.networking.numberOfRooms || 'Not specified'}`,
      `- *Network Points:* ${enquiry.networking.approximateNetworkPoints || 'Not provided'}`,
      `- *Wi-Fi Requirement:* ${enquiry.networking.wifiRequirement}`,
      `- *Additional Notes: ${enquiry.networking.additionalRequirements || 'None'}`
    );
  } else if (enquiry.service === 'website') {
    lines.push(
      `- *Requirement Type:* ${enquiry.website.requirementType}`,
      `- *Business Name:* ${enquiry.website.businessName || 'Not specified'}`,
      `- *Estimated Pages:* ${enquiry.website.numberOfPages || 'Not specified'}`,
      `- *Domain:* ${enquiry.website.domain}`,
      `- *Hosting:* ${enquiry.website.hosting}`,
      `- *Reference Website:* ${enquiry.website.referenceWebsite || 'None'}`,
      `- *Additional Notes:* ${enquiry.website.additionalRequirements || 'None'}`
    );
  }

  lines.push(
    '',
    '-----------------------------',
    '_Sent via TechBes Online Portal_'
  );

  return lines.join('\n');
}

export function getWhatsAppUrl(enquiry?: EnquiryState): string {
  const number = getWhatsAppNumber();
  const cleanDigits = number.replace('+', '');
  
  if (!enquiry) {
    const defaultMsg = encodeURIComponent(
      'hello TechBes! I am interested in your CCTV, Networking, and Website Designing services. Please provide more details.'
    );
    return `https://wa.me/${cleanDigits}?text=${defaultMsg}`;
  }

  const message = generateWhatsAppMessage(enquiry);
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`;
}