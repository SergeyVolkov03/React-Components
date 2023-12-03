import { Link, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1>home page</h1>
      <Link to="uncontrolled-form">uncontrolled-form</Link>
      <Link to="controlled-form">controlled-form</Link>
      <Outlet />
    </>
  );
}
