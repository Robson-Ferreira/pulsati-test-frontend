import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  background-color: #444;

  padding: 10px 0;
  text-align: center;
`;

export const MenuItem = styled.a`
  display: inline-block;
  color: #fff;

  padding: 10px 20px;
  margin: 0 10px;

  font-weight: bold;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const LogoutButton = styled.button`
  background-color: #d9534f;
  color: #fff;

  border: none;
  border-radius: 5px;

  padding: 10px 20px;
  margin: 0 10px;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;
