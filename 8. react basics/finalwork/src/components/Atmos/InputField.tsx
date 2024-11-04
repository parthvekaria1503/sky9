import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormData {
  username: string;
  email: string;
}

interface InputFieldProps {
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  label: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ register, name, label, type = 'text', required }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...register(name, { required })} type={type} id={name} />
  </div>
);

export default InputField;
