import { Contact } from '../entities/Contact';

export interface EmailPort {
  sendContactForm(contact: Contact): Promise<boolean>;
} 