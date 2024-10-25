// Molecules/FormField.tsx
const FormField = ({ control, name, placeholder, errors }) => (
    <div className="m-3 p-3 w-1/3">
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} placeholder={placeholder} />}
      />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </div>
  );
  
  export default FormField;
  