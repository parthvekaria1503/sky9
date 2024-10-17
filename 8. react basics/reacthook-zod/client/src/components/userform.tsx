import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";


// Define the type for your form data
interface FormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  city?: string;
  type: string;
  subType?: string;
  additionalField?: string;
}

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
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      type: "",
    },
    shouldUnregister: false, // Keeps unmounted field values
  });

  const selectedType = watch("type");
  const subType = watch("subType");

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to create user");
        }

        const result = await response.json();
        console.log(result);
        reset(); // Clear the form after submission
      } catch (error) {
        console.error(error);
      }
    },
    [reset]
  );

  const [users, setUsers] = useState<FormData[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched Users:", data); // Log the fetched data
      setUsers(data); // Store fetched users in state
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };
  

  return (
    <>
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
                <input
                  {...field}
                  className="border w-full p-2"
                  placeholder="Enter Name"
                />
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
                <input
                  {...field}
                  className="border w-full p-2"
                  placeholder="Enter Surname"
                />
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
                <input
                  {...field}
                  className="border w-full p-2"
                  placeholder="Enter E-Mail"
                />
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
                <input
                  {...field}
                  type="password"
                  className="border w-full p-2"
                  placeholder="Enter Password"
                />
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
                <select {...field} className="border w-full p-2">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                  <option value="type4">Type 4</option>
                </select>
              )}
            />
            {errors.type && (
              <span className="text-red-500">{errors.type.message}</span>
            )}
          </div>
        </div>

        {/* Conditional Fields */}
        {(selectedType === "type2" ||
          selectedType === "type3" ||
          selectedType === "type4") && (
          <div className="flex flex-row w-full justify-center">
            <div className="m-3 p-3 w-1/3">
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2"
                    placeholder="Enter City"
                  />
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
                render={({ field }) => (
                  <select {...field} className="border w-full p-2">
                    <option value="" disabled>
                      Select Subtype
                    </option>
                    <option value="subtype1">Subtype 1</option>
                    <option value="subtype2">Subtype 2</option>
                    <option value="subtype3">Subtype 3</option>
                    <option value="subtype4">Subtype 4</option>
                  </select>
                )}
              />
            </div>
          </div>
        )}

        {subType === "subtype1" && (
          <div className="flex flex-row w-full justify-center">
            <div className="m-3 p-3 w-1/3">
              <Controller
                name="additionalField"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="border w-full p-2"
                    placeholder="State"
                  />
                )}
              />
            </div>
          </div>
        )}

        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-3 rounded hover:bg-slate-950"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <h1 className="text-center bg-slate-600 text-cyan-200 w-full mt-10 text-4xl">User Data Displayed</h1>
  <table className="w-full text-sm overflow-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 pt-2 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <td scope="col" className="px-6 py-3">Name</td>
        <td scope="col" className="px-6 py-3">Surname</td>
        <td scope="col" className="px-6 py-3">E-Mail</td>
        <td scope="col" className="px-6 py-3">Password</td>
        <td scope="col" className="px-6 py-3">Type</td>
        <td scope="col" className="px-6 py-3">City</td>
        <td scope="col" className="px-6 py-3">Sub-Type</td>
        <td scope="col" className="px-6 py-3">State</td>
        <td scope="col" className="px-6 py-3">Action</td>
      </tr>
    </thead>
    <tbody className="w-full">
    {users.map((user) => {
  console.log("Rendering User:", user); // Log each user being rendered
  return (
    <tr key={user.email} className="border w-full">
      <td className="text-slate-950 text-base  p-3">{user.name}</td>
      <td className="text-slate-950 text-base p-3">{user.surname}</td>
      <td className="text-slate-950 text-base p-3">{user.email}</td>
      <td className="text-slate-950 text-base p-3">{user.password}</td>
      <td className="text-slate-950 text-base p-3">{user.type}</td>
      <td className="text-slate-950 text-base p-3">{user.city || 'N/A'}</td>
      <td className="text-slate-950 text-base p-3">{user.subType || 'N/A'}</td>
      <td className="text-slate-950 text-base p-3">{user.additionalField || 'N/A'}</td>
      <td><button className="bg-green-900 p-2 rounded text-white hover:bg-green-500 m-1">Update</button>
          <button className="bg-red-900 p-2 rounded text-white hover:bg-red-500 m-1">Delete</button>
      </td>
    </tr>
  );
})}

    </tbody>
  </table>
</div>

    </>
  );
};

export default UserForm;
