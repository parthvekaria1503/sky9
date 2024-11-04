import React from 'react';

// Define an interface for props
interface SubmitButtonProps {
  children: React.ReactNode; // Specify the type for children
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return <button type="submit">{children}</button>;
};

export default SubmitButton;
