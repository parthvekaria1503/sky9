import React from 'react';

interface Option {
    value: string;
    label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ options, ...props }, ref) => (
    <select ref={ref} {...props} className="border w-full p-2">
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
));
Select.displayName = 'Select';
export default Select;
