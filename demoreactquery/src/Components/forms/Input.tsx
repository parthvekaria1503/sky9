import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className="border w-full p-2"
      placeholder={placeholder}
    />
  )
);

Input.displayName = "Input";
export default Input;
