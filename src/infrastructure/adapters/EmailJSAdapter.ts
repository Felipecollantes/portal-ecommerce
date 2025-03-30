import { EmailPort } from '@domain/ports/EmailPort.ts';
import { Contact } from '@domain/entities/Contact.ts';
import emailjs from '@emailjs/browser';

export class EmailJSAdapter implements EmailPort {
  private readonly serviceId: string;
  private readonly templateId: string;
  private readonly publicKey: string;

  constructor(serviceId: string, templateId: string, publicKey: string) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
  }

  async sendContactForm(contact: Contact): Promise<boolean> {
    try {
      const templateParams = {
        from_name: contact.name,
        from_email: contact.email,
        subject: contact.subject,
        message: contact.message,
        service_type: contact.serviceType
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );

      return response.status === 200;
    } catch (error) {
      console.error('Error al enviar email:', error);
      throw error;
    }
  }
} 