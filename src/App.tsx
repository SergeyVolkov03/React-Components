import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NotFoundPage } from './pages/not-found/NotFoundPage';
import { UncontrolledForm } from './pages/uncontrolled-form/UncontrolledForm';
import { ControlledForm } from './pages/controlled-form/ControlledForm';
import { Home } from './pages/home/Home';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
          <Route path="/controlled-form" element={<ControlledForm />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
