import { Link, Outlet } from 'react-router-dom';
import './home.css';

export function Home() {
  return (
    <>
      <h1 className="title">Home Page</h1>
      <div className="navigate">
        <Link to="uncontrolled-form">Uncontrolled Form</Link>
        <Link to="controlled-form">Controlled Form</Link>
      </div>
      <Outlet />
    </>
  );
}
