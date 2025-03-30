import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const FormInput: React.FC<FormInputProps> = ({
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
      <input
        id={name}
        name={name}
        className={`input ${error ? 'input-error' : ''} ${className}`}
        {...props}
      />
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}; 