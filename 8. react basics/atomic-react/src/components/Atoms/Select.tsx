  // Atoms/Select.tsx
  const Select = ({ options, ...props }) => (
    <select {...props} className="border w-full p-2">
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  
  export default Select;
  