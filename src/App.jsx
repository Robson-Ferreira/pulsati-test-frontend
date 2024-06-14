import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './contexts/Auth/AuthContext';
import { GlobalCSS } from './styles/global';
import { router } from './routes';

export const App = function() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
      
      <GlobalCSS />
    </>
  )
}
