import { useForm } from 'react-hook-form';
import { User } from '../../types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schema/schema';
import './form.css';

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
      <div className="field">
        <label>Name</label>
        <input {...register('name')} />
        <p className="error">{errors.name?.message}</p>
      </div>

      <div className="field">
        <label>Age</label>
        <input {...register('age')} />
        <p>{errors.age?.message}</p>
      </div>

      <div className="field">
        <label>E-mail</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>

      <input type="submit" />
    </form>
  );
}
