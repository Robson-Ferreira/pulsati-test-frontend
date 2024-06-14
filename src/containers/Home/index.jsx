import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from '../../contexts/Auth/AuthContext';

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      return navigate(`/login`);
    }

    return navigate(`/dashboard`);
  }, []);
}
