import { useCallback } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserFields from '../Molecules/UserField';
import ConditionalFields from '../Molecules/ConditionalFields';

// interface FormData {
//     name: string;
//     surname: string;
//     email: string;
//     password: string;
//     city?: string;
//     type: string;
//     subType?: string;
//     additionalField?: string;
// }

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

export type FormData = z.infer<typeof schema>


// Create user function
const createUser = async (data: FormData) => {
    const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Failed to create user");
    return response.json();
};

const UserForm = () => {
    const queryClient = useQueryClient();
    const { control, handleSubmit, reset, formState: { errors }, watch } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            type: "",
        },
        shouldUnregister: false,
    });

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] }); 
            reset();
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const onSubmit = useCallback((data: FormData) => {
        mutation.mutate(data);
    }, [mutation]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="w-full bg-slate-700 text-white text-center text-5xl">User Form</h1>
            <UserFields control={control} errors={errors} />
            <ConditionalFields control={control} watch={watch} />
            <button type="submit" className="m-3 p-2 bg-blue-500 text-white">Submit</button>
        </form>
    );
};

export default UserForm;
