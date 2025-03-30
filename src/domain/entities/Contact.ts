export type ServiceType = 'budget' | 'question' | 'support' | 'other';

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
  serviceType: ServiceType;
} 