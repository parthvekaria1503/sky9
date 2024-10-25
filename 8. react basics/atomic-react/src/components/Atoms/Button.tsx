// Atoms/Button.tsx
const Button = ({ onClick, children, className }) => (
    <button
      onClick={onClick}
      className={`mt-4 bg-blue-500 text-white p-3 rounded hover:bg-slate-950 ${className}`}
    >
      {children}
    </button>
  );
  
  export default Button;