import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import InputField from '../Atmos/InputField';

interface FormData {
  username: string;
  email: string;
}

interface FormGroupProps {
  register: UseFormRegister<FormData>;
}

const FormGroup: React.FC<FormGroupProps> = ({ register }) => (
  <div>
    <InputField register={register} name="username" label="Username" required />
    <InputField register={register} name="email" label="Email" type="email" required />
  </div>
);

export default FormGroup;
