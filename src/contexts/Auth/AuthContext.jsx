import { createContext, useContext, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthStore } from './authStore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthStore();

  useEffect(() => {
    const checkToken = async () => {
      const accessToken = localStorage.getItem(`auth.token`);

      if (accessToken) {
        const response = await auth.recoveryUser(accessToken);
        if (!response) {
          auth.logout();
          return redirect('/login');
        }
      }
    }

    checkToken()
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};
