import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import Input from '../Atoms/Input';
import Select from '../Atoms/Select';

interface FormValues extends FieldValues {
    type?: string;
    city?: string;
    subType?: string;
    additionalField?: string;
}

// interface ConditionalFieldsProps {
//     control: Control<FormValues>;
//     watch: (field: keyof FormValues) => FormValues[keyof FormValues];
// }

const ConditionalFields: React.FC<FormValues> = ({ control, watch }) => {
    const selectedType = watch("type");
    const selectedSubType = watch("subType");

    return (
        <>
            {(selectedType === "type2" || selectedType === "type3" || selectedType === "type4") && (
                <div className="flex flex-row w-full justify-center">
                    <div className="m-3 p-3 w-1/3">
                        <Controller
                            name="city"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState }) => (
                                <>
                                    <Input {...field} placeholder="Enter City" />
                                    {fieldState.invalid && <span className="text-red-500">{fieldState.error?.message}</span>}
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
                                            { value: '', label: 'Select Subtype...' }, // Default option
                                            { value: 'subtype1', label: 'Subtype 1' },
                                            { value: 'subtype2', label: 'Subtype 2' },
                                            { value: 'subtype3', label: 'Subtype 3' },
                                            { value: 'subtype4', label: 'Subtype 4' },
                                        ]}
                                    />
                                    {fieldState.invalid && <span className="text-red-500">{fieldState.error?.message}</span>}
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
                                    {fieldState.invalid && <span className="text-red-500">{fieldState.error?.message}</span>}
                                </>
                            )}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ConditionalFields;
