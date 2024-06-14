import { create } from 'zustand';

import { login, getUserByAccessToken } from '../../services/auth';

export const useAuthStore = create((set) => ({
  user: null,
  login: async ({ userLogin, userPassword }) => {
    try {
      const { user } = await login({
        userLogin,
        userPassword,
      });

      localStorage.setItem('auth.token', user.accessToken);

      set({ user });

      return true;
    } catch (err) {
      return false;
    }
  },
  recoveryUser: async (accessToken) => {
    try {
      const { user } = await getUserByAccessToken(accessToken);

      set({ user });

      return true;
    } catch (err) {
      return false;
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.clear(`auth.token`);
  },
}));
