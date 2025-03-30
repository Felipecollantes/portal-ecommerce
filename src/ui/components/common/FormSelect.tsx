import React, { SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: FieldError;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={`input ${error ? 'input-error' : ''} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}; 