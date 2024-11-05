import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../forms/Input";
import Select from "../forms/Select";

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

export type FormData = z.infer<typeof schema>;

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
  const methods = useForm<FormData>({
    resolver: zodResolver(
      schema.superRefine((data, ctx) => {
        if (
          (data.type === "type2" ||
            data.type === "type3" ||
            data.type === "type4") &&
          !data.city
        ) {
          ctx.addIssue({
            path: ["city"],
            message: "City is required when Type is type2, type3, or type4",
            code: z.ZodIssueCode.custom,
          });
        }

        // Validation for subType
        if (data.type === "type3" && !data.subType) {
          ctx.addIssue({
            path: ["subType"],
            message: "SubType is required when Type is type3",
            code: z.ZodIssueCode.custom,
          });
        }

        // Validation for additionalField
        if (data.subType === "subtype1" && !data.additionalField) {
          ctx.addIssue({
            path: ["additionalField"],
            message: "State is required when SubType is subtype1",
            code: z.ZodIssueCode.custom,
          });
        }
      })
    ),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      type: "",
      city: "",
      subType: "",
      additionalField: "",
    },
    shouldUnregister: false,
  });

  const { handleSubmit, reset, control, formState, watch } = methods;
  const { errors } = formState;

  const selectedType = watch("type");
  const selectedSubType = watch("subType");

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      reset();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      mutation.mutate(data);
    },
    [mutation]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="w-full bg-slate-700 text-white text-center text-5xl">
        User Form
      </h1>
      <div className="flex flex-row w-full justify-center">
        <div className="m-3 p-3 w-1/3">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter Name" />
            )}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="m-3 p-3 w-1/3">
          <Controller
            name="surname"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter Surname" />
            )}
          />
          {errors.surname && (
            <span className="text-red-500">{errors.surname.message}</span>
          )}
        </div>
      </div>

      <div className="flex flex-row w-full justify-center">
        <div className="m-3 p-3 w-1/3">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter E-Mail" />
            )}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="m-3 p-3 w-1/3">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input {...field} type="password" placeholder="Enter Password" />
            )}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
      </div>

      <div className="flex flex-row w-full justify-center">
        <div className="m-3 p-3 w-1/3">
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "type1", label: "Type 1" },
                  { value: "type2", label: "Type 2" },
                  { value: "type3", label: "Type 3" },
                  { value: "type4", label: "Type 4" },
                ]}
              />
            )}
          />
          {errors.type && (
            <span className="text-red-500">{errors.type.message}</span>
          )}
        </div>
      </div>
      {(selectedType === "type2" ||
        selectedType === "type3" ||
        selectedType === "type4") && (
        <div className="flex flex-row w-full justify-center">
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="city"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <Input {...field} placeholder="Enter City" />
                  {fieldState.invalid && (
                    <span className="text-red-500">
                      {fieldState.error?.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
      )}

      {selectedType === "type3" && (
        <div className="flex flex-row w-full justify-center">
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="subType"
              control={control}
              rules={{ required: true }} // Make subType required
              defaultValue="" // Set default value to empty string
              render={({ field, fieldState }) => (
                <>
                  <Select
                    {...field}
                    options={[
                      { value: "subtype1", label: "Subtype 1" },
                      { value: "subtype2", label: "Subtype 2" },
                      { value: "subtype3", label: "Subtype 3" },
                      { value: "subtype4", label: "Subtype 4" },
                    ]}
                  />
                  {fieldState.invalid && (
                    <span className="text-red-500">
                      {fieldState.error?.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
      )}

      {selectedSubType === "subtype1" && (
        <div className="flex flex-row w-full justify-center">
          <div className="m-3 p-3 w-1/3">
            <Controller
              name="additionalField"
              control={control}
              rules={{ required: true }} // Make additionalField required when subtype1 is selected
              render={({ field, fieldState }) => (
                <>
                  <Input {...field} placeholder="State" />
                  {fieldState.invalid && (
                    <span className="text-red-500">
                      {fieldState.error?.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <button type="submit" className="m-3 p-2 bg-blue-500 text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
