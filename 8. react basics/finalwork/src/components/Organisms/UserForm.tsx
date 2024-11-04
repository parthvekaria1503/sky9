import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import FormGroup from '../Molecules/FormGroup';

interface UserData {
  username: string;
  email: string;
}

const UserForm = () => {
  const { register, handleSubmit } = useForm<UserData>();

  // Define the mutation function separately
  const mutationFn = async (data: UserData): Promise<UserData> => {
    const response = await fetch('http://localhost:3003/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to create user');
    
    return response.json() as Promise<UserData>;
  };

  const mutation: UseMutationResult<UserData, Error, UserData> = useMutation(
    {
      mutationFn, // Assign the mutation function here
      onError: (error: Error) => {
        console.error('Error:', error.message);
      },
    }
  );

  const onSubmit: SubmitHandler<UserData> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup register={register} />
      <button type="submit">Submit</button>
      {/* Error handling */}
      {mutation.isError && mutation.error instanceof Error && (
        <p>Error occurred: {mutation.error.message}</p>
      )}
      {mutation.isSuccess && <p>User created successfully!</p>}
    </form>
  );
};

export default UserForm;
