import { useNavigate } from 'react-router-dom';

import { MenuWrapper, MenuItem, LogoutButton } from './styles';

import { useAuth } from '../../contexts/Auth/AuthContext';

export const Menu = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const logoutUser = () => {
    logout();
    navigate(`/login`);
  }

  return (
    <MenuWrapper>
      <MenuItem href="#">Dashboard</MenuItem>
      <MenuItem href="#customers">Clientes</MenuItem>
      <MenuItem href="#orders">Pedidos</MenuItem>
      <MenuItem href="#reports">Relatórios</MenuItem>
      <MenuItem href="#config">Configurações</MenuItem>
      <LogoutButton onClick={() => logoutUser()}>Sair</LogoutButton>
    </MenuWrapper>
  );
};
