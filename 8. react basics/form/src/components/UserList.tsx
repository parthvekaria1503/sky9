import React, { useState, useEffect } from "react";
import { z } from "zod";

interface UserData {
  name: string;
  surname: string;
  email: string;
  password: string;
  city: string;
  state?: string; 
  selectedOption: string;
  subselectedOption: string;
}

const UserList = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [subselectedOption, subsetSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState<Omit<UserData, "selectedOption" | "subselectedOption">>({
    name: "",
    surname: "",
    email: "",
    password: "",
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [storedData, setStoredData] = useState<UserData[]>([]);

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required").optional(),
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const subhandleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    subsetSelectedOption(event.target.value);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({}); // Reset errors

    try {
      // Validate form data
      schema.parse({
        ...formData,
        city: selectedOption === "type2" || selectedOption === "type3" || selectedOption === "type4" ? formData.city : undefined,
        state: subselectedOption === "subtype1" ? formData.state : undefined,
      });

      const newData: UserData = {
        ...formData,
        selectedOption,
        subselectedOption,
      };

      const updatedStoredData = [...storedData, newData];
      setStoredData(updatedStoredData);
      localStorage.setItem("userData", JSON.stringify(updatedStoredData));

      // Reset form
      resetForm();
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {} as { [key: string]: string });
        setErrors(fieldErrors);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: "", surname: "", email: "", password: "", city: "", state: "" });
    setSelectedOption("");
    subsetSelectedOption("");
  };

  const editUser = (index: number) => {
    const userToEdit = storedData[index];
    setFormData({
      name: userToEdit.name,
      surname: userToEdit.surname,
      email: userToEdit.email,
      password: userToEdit.password,
      city: userToEdit.city,
      state: userToEdit.state || "",
    });
    setSelectedOption(userToEdit.selectedOption);
    subsetSelectedOption(userToEdit.subselectedOption);
  };

  const deleteUser = (index: number) => {
    const updatedStoredData = storedData.filter((_, i) => i !== index);
    setStoredData(updatedStoredData);
    localStorage.setItem("userData", JSON.stringify(updatedStoredData));
  };

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const parsedData: UserData[] = JSON.parse(data);
      setStoredData(parsedData);
    }
  }, []);

  return (
    <>
      <div className="w-full bg-slate-400 mt-5">
        <h1 className="text-center text-xl">User Data</h1>
      </div>
      <form className="max-w-md mx-auto space-y-5" onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <input type="text" name="name" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" placeholder="Name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <input type="text" name="surname" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" placeholder="Surname" value={formData.surname} onChange={handleChange} />
            {errors.surname && <p className="text-red-500">{errors.surname}</p>}
          </div>
          <div>
            <input type="email" name="email" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" placeholder="E-Mail" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <input type="password" name="password" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" placeholder="Password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
        </div>
        {/* Dropdowns */}
        <div className="relative mb-5">
          <select id="types" value={selectedOption} onChange={handleSelectChange} className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            <option value="">Choose a Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
            <option value="type4">Type 4</option>
          </select>

          {(selectedOption === "type2" || selectedOption === "type3" || selectedOption === "type4") && (
            <div className="mt-3">
              <input type="text" name="city" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" placeholder="City" value={formData.city} onChange={handleChange} />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>
          )}

          {selectedOption === "type3" && (
            <div>
              <select id="subtypes" value={subselectedOption} onChange={subhandleSelectChange} className="mt-3 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="">Choose a Sub-Type</option>
                <option value="subtype1">Sub Type 1</option>
                <option value="subtype2">Sub Type 2</option>
                <option value="subtype3">Sub Type 3</option>
                <option value="subtype4">Sub Type 4</option>
              </select>

              {subselectedOption === "subtype1" && (
                <div className="mt-3">
                  <input type="text" name="state" className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none" placeholder="State" value={formData.state} onChange={handleChange} />
                  {errors.state && <p className="text-red-500">{errors.state}</p>}
                </div>
              )}
            </div>
          )}
        </div>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-sm px-5 py-2.5">
          Submit
        </button>
      </form>

      <div className="w-full bg-slate-400 mt-5">
        <h1 className="text-center text-xl">Data Display</h1>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Surname</th>
              <th className="py-2">Email</th>
              <th className="py-2">City</th>
              <th className="py-2">State</th>
              <th className="py-2">Type</th>
              <th className="py-2">Sub-Type</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {storedData.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-2">No data available</td>
              </tr>
            ) : (
              storedData.map((data, index) => (
                <tr key={index}>
                  <td className="py-2">{data.name}</td>
                  <td className="py-2">{data.surname}</td>
                  <td className="py-2">{data.email}</td>
                  <td className="py-2">{data.city}</td>
                  <td className="py-2">{data.state}</td>
                  <td className="py-2">{data.selectedOption}</td>
                  <td className="py-2">{data.subselectedOption}</td>
                  <td>
                    <button onClick={() => editUser(index)} className="bg-green-950 text-white p-2 rounded hover:bg-green-500">Edit</button>
                    <button onClick={() => deleteUser(index)} className="bg-red-950 text-white p-2 rounded m-1 hover:bg-red-500">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;