import { Contact } from '@domain/entities/Contact.ts';
import { EmailPort } from '@domain/ports/EmailPort.ts';

export class SendContactFormUseCase {
  constructor(private emailService: EmailPort) {}

  async execute(contact: Contact): Promise<{ success: boolean; error?: string }> {
    try {
      const result = await this.emailService.sendContactForm(contact);
      return { success: result };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido al enviar el formulario'
      };
    }
  }
} 