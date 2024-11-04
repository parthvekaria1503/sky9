import React from 'react';
import { Controller, FieldValues,  } from 'react-hook-form';
import Input from '../Atoms/Input';
import Select from '../Atoms/Select';

interface UserFormValues extends FieldValues {
    name?: string;
    surname?: string;
    email?: string;
    password?: string;
    type?: string;
}

// interface UserFieldsProps extends FieldValues{
//     control: Control<FormData>;
//     errors: FieldErrors<FormData>;
// }

const UserFields: React.FC<UserFormValues> = ({ control, errors }) => (
    <>
        <div className="flex flex-row w-full justify-center">
            <div className="m-3 p-3 w-1/3">
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Enter Name" />}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="m-3 p-3 w-1/3">
                <Controller
                    name="surname"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Enter Surname" />}
                />
                {errors.surname && <span className="text-red-500">{errors.surname.message}</span>}
            </div>
        </div>

        <div className="flex flex-row w-full justify-center">
            <div className="m-3 p-3 w-1/3">
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} placeholder="Enter E-Mail" />}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="m-3 p-3 w-1/3">
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => <Input {...field} type="password" placeholder="Enter Password" />}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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
                                { value: 'type1', label: 'Type 1' },
                                { value: 'type2', label: 'Type 2' },
                                { value: 'type3', label: 'Type 3' },
                                { value: 'type4', label: 'Type 4' },
                            ]}
                        />
                    )}
                />
                {errors.type && <span className="text-red-500">{errors.type.message}</span>}
            </div>
        </div>
    </>
);

export default UserFields;
