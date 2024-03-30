import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestoDetail from './pages/RestoDetail';
import FilteredRestoWrappper from './context/RestoContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/restaurant/:id',
    element: <RestoDetail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilteredRestoWrappper>
      <RouterProvider router={router} />
    </FilteredRestoWrappper>
  </React.StrictMode>
);

reportWebVitals();
