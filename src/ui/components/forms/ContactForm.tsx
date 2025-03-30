import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { FormInput } from '../common/FormInput';
import { FormTextarea } from '../common/FormTextarea';
import { FormSelect } from '../common/FormSelect';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSubmitting,
    submitStatus,
    serviceTypes
  } = useContactForm();

  // Mapear los tipos de servicio para el componente select
  const serviceTypeOptions = serviceTypes.map(type => ({
    value: type,
    label: type === 'budget' 
      ? 'Presupuesto' 
      : type === 'question' 
        ? 'Consulta' 
        : type === 'support' 
          ? 'Soporte' 
          : 'Otro'
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h2>
      
      {/* Mensaje de éxito o error */}
      {submitStatus.message && (
        <div 
          className={`p-4 mb-6 rounded ${
            submitStatus.success 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="Nombre"
          {...register('name')}
          error={errors.name}
          placeholder="Tu nombre"
        />
        
        <FormInput
          label="Email"
          type="email"
          {...register('email')}
          error={errors.email}
          placeholder="tu@email.com"
        />
        
        <FormInput
          label="Asunto"
          {...register('subject')}
          error={errors.subject}
          placeholder="Asunto de tu mensaje"
        />
        
        <FormSelect
          label="Tipo de Servicio"
          {...register('serviceType')}
          error={errors.serviceType}
          options={serviceTypeOptions}
        />
        
        <FormTextarea
          label="Mensaje"
          {...register('message')}
          error={errors.message}
          placeholder="Escribe tu mensaje aquí..."
        />
        
        <div className="pt-2">
          <Button 
            type="submit" 
            isLoading={isSubmitting}
            className="w-full md:w-auto"
          >
            Enviar Mensaje
          </Button>
        </div>
      </form>
    </div>
  );
}; 