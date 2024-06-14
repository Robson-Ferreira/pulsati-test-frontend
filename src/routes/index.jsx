import { createBrowserRouter } from 'react-router-dom';

import { Dashboard } from '../containers/Dashboard';
import { Login } from '../containers/Login';
import { Home } from '../containers/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
