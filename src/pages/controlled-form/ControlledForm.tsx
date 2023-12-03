import { useForm } from 'react-hook-form';
import { User } from '../../types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../schema/schema';
import './form.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addUser } from '../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';

export function ControlledForm() {
  const countries = useSelector(
    (state: RootState) => state.countryReducer.countries
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({ resolver: yupResolver(schema) });

  const onSubmit = (data: User) => {
    dispatch(addUser(data));
    reset();
    navigate('/');
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

      <div className="field">
        <label>Password</label>
        <input {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>

      <div className="field">
        <label>Confirm Password</label>
        <input {...register('confirmPassword')} />
        <p>{errors.confirmPassword?.message}</p>
      </div>

      <div className="field">
        <label>Gender</label>
        <select {...register('gender')}>
          <option value={'male'}>Male</option>
          <option value={'female'}>Female</option>
        </select>
        <p>{errors.gender?.message}</p>
      </div>

      <div className="field">
        <label htmlFor="checkbox">Accept T&C</label>
        <input type="checkbox" {...register('accept')} />
        <p>{errors.accept?.message}</p>
      </div>

      <div className="field">
        <label>Country:</label>
        <input list="countries" {...register('country')} />
        <datalist id="countries">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </div>

      <input type="submit" />
    </form>
  );
}
