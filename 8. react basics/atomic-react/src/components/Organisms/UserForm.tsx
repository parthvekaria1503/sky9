// Organisms/UserForm.tsx
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Atoms/Button";
import FormField from "../Molecules/FormField";
import Select from "../Atoms/Select";
import { useState, useEffect, useCallback } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  city: z.string().optional(),
  type: z.string().min(1, "Type is required"),
  subType: z.string().optional(),
  additionalField: z.string().optional(),
});

const UserForm = () => {
  const { control, handleSubmit, watch, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", surname: "", email: "", password: "", type: "" },
  });

  const onSubmit = async (data: FormData) => {
  
    try {
      const response = await fetch("http://localhost:3002/users ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error("Failed to create user");
      
      reset();
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="w-full bg-slate-700 text-white text-center text-5xl">User Form</h1>
      <div className="flex flex-row w-full justify-center">
        <FormField control={control} name="name" placeholder="Enter Name" errors={errors} />
        <FormField control={control} name="surname" placeholder="Enter Surname" errors={errors} />
      </div>
      {/* Other fields... */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
