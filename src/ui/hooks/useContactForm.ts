import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Contact, ServiceType } from '@domain/entities/Contact.ts';
import { SendContactFormUseCase } from '@application/usecases/SendContactFormUseCase.ts';
import { EmailJSAdapter } from '@infrastructure/adapters/EmailJSAdapter.ts';
import { emailConfig } from '@config/email.ts';

// Esquema de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingrese un email válido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  serviceType: z.enum(['budget', 'question', 'support', 'other'] as const)
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      serviceType: 'question'
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Crear adaptador con la configuración de EmailJS
      const emailAdapter = new EmailJSAdapter(
        emailConfig.serviceId,
        emailConfig.templateId,
        emailConfig.publicKey
      );
      
      // Crear caso de uso con el adaptador
      const sendContactForm = new SendContactFormUseCase(emailAdapter);
      
      // Ejecutar caso de uso
      const result = await sendContactForm.execute(data as Contact);
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado! Nos pondremos en contacto contigo pronto.'
        });
        reset(); // Resetear formulario
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Error al enviar el mensaje. Intenta nuevamente.'
        });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: 'Error al enviar el mensaje. Intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
    submitStatus,
    serviceTypes: ['budget', 'question', 'support', 'other'] as ServiceType[]
  };
}; 