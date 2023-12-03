import { useForm } from 'react-hook-form';
import { User } from '../../types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schema/schema';

export function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({ resolver: yupResolver(schema) });

  const onSubmit = (data: User) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name')} required />
      <p>{errors.name?.message}</p>

      <label>Age</label>
      <input {...register('age')} />
      <p>{errors.age?.message}</p>

      <label>E-mail</label>
      <input {...register('email')} />
      <p>{errors.email?.message}</p>

      <input type="submit" />
    </form>
  );
}
