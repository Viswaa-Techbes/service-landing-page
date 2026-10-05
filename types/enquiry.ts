export type ServiceType = 'cctv' | 'networking' | 'website';

export interface CommonDetails {
  fullName: string;
  mobileNumber: string;
  email: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
}

export type CctvRequirementType = 'New Installation' | 'Repair' | 'Maintenance' | 'Upgrade';
export type CctvCameraCount = '1' | '2' | '4' | '6' | '8' | '12' | '16' | 'Custom';
export type CctvCameraType = 'Indoor' | 'Outdoor' | 'Both';
export type CctvCameraTechnology = 'IP Camera' | 'HD / Analog' | 'Not Sure';
export type CctvRecording = 'DVR' | 'NVR' | 'Cloud' | 'Not Sure';

export interface CctvDetails {
  requirementType: CctvRequirementType;
  numberOfCameras: CctvCameraCount;
  customCameraCount?: string;
  cameraType: CctvCameraType;
  cameraTechnology: CctvCameraTechnology;
  recording: CctvRecording;
  cableLength: string;
  additionalRequirements: string;
}

export type NetworkingRequirementType =
  | 'New Setup'
  | 'LAN Installation'
  | 'Wi-Fi Setup'
  | 'Router Configuration'
  | 'Switch Configuration'
  | 'Network Repair'
  | 'Maintenance';

export type NetworkingPropertyType =
  | 'Home'
  | 'Office'
  | 'Shop'
  | 'School / College'
  | 'Industrial'
  | 'Other';

export type NetworkingWifiRequirement = 'Yes' | 'No' | 'Not Sure';

export interface NetworkingDetails {
  requirementType: NetworkingRequirementType;
  propertyType: NetworkingPropertyType;
  numberOfRooms: string;
  approximateNetworkPoints: string;
  wifiRequirement: NetworkingWifiRequirement;
  additionalRequirements: string;
}

export type WebsiteRequirementType =
  | 'New Website'
  | 'Business Website'
  | 'E-commerce Website'
  | 'Website Redesign'
  | 'Website Maintenance';

export type WebsiteDomainStatus = 'Already Have' | 'Need New Domain' | 'Not Sure';
export type WebsiteHostingStatus = 'Already Have' | 'Need Hosting' | 'Not Sure';

export interface WebsiteDetails {
  requirementType: WebsiteRequirementType;
  businessName: string;
  numberOfPages: string;
  domain: WebsiteDomainStatus;
  hosting: WebsiteHostingStatus;
  referenceWebsite: string;
  additionalRequirements: string;
}

export interface EnquiryState {
  service: ServiceType;
  common: CommonDetails;
  cctv: CctvDetails;
  networking: NetworkingDetails;
  website: WebsiteDetails;
}
