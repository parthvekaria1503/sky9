import React from 'react';
import { Controller, Control } from 'react-hook-form';
import Input from '../Atoms/Input';
import Select from '../Atoms/Select';

interface ConditionalFieldsProps {
    control: Control<any>; // Specify type for control
    watch: (field: string) => any; // Specify type for watch function
}

const ConditionalFields: React.FC<ConditionalFieldsProps> = ({ control, watch }) => {
    const selectedType = watch("type");

    return (
        <>
            {(selectedType === "type2" || selectedType === "type3" || selectedType === "type4") && (
                <div className="flex flex-row w-full justify-center">
                    <div className="m-3 p-3 w-1/3">
                        <Controller
                            name="city"
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="Enter City" />}
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
                                <Select
                                    {...field}
                                    options={[
                                        { value: 'subtype1', label: 'Subtype 1' },
                                        { value: 'subtype2', label: 'Subtype 2' },
                                        { value: 'subtype3', label: 'Subtype 3' },
                                        { value: 'subtype4', label: 'Subtype 4' },
                                    ]}
                                />
                            )}
                        />
                    </div>
                </div>
            )}

            {watch("subType") === "subtype1" && (
                <div className="flex flex-row w-full justify-center">
                    <div className="m-3 p-3 w-1/3">
                        <Controller
                            name="additionalField"
                            control={control}
                            render={({ field }) => <Input {...field} placeholder="State" />}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ConditionalFields;
