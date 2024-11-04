import React from 'react';

// Define props type
interface SubmitButtonProps {
  children: React.ReactNode; // Define the type for children
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => (
  <button type="submit">{children}</button>
);

export default SubmitButton;
