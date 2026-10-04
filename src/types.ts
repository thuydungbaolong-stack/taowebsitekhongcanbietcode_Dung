export interface AudienceGroup {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface BuildCapability {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface BenefitItem {
  id: number;
  text: string;
  detail: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegistrationRecord {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  note?: string;
  registeredAt: string;
  syncedToSheet?: boolean;
}
