import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundery/ErrorBoundery.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

export function Main() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main></Main>);
