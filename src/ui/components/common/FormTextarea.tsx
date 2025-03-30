import React, { TextareaHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: FieldError;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={`input ${error ? 'input-error' : ''} ${className}`}
        rows={4}
        {...props}
      />
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}; 