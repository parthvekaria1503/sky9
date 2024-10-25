  // Atoms/Input.tsx
  const Input = ({ placeholder, ...props }) => (
    <input
      {...props}
      className="border w-full p-2"
      placeholder={placeholder}
    />
  );
  
  export default Input;