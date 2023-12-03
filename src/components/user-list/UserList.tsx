import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './user.css';

export function UserList() {
  const users = useSelector((state: RootState) => state.userReducer.users);
  console.log(users);
  if (users.length === 0) {
    return;
  }

  return (
    <>
      {users.map((user) => (
        <div className="user">
          <h1>user: {user.name}</h1>
          <p>age: {user.age}</p>
          <p>contry: {user.country}</p>
          <p>gender: {user.gender}</p>
          <p>e-mail: {user.email}</p>
        </div>
      ))}
    </>
  );
}
