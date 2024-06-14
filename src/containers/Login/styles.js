import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 450px;

  padding: 45px;

  display: flex;
  justify-content: center;

  flex-direction: column;

  border-radius: 15px;

  border: 1px solid #FFF;
`;

export const AccessYourAccount = styled.h2`
  font-size: 26px;
  font-weight: bold;

  margin-bottom: 25px;
`;

export const Label = styled.label`
  font-size: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 6px;

  font-size: 16px;

  padding: 15px;
  background: #121214;

  margin-top: 5px;
  margin-bottom: 10px;

  transition: all 0.2s;

  outline: none;

  transition: all 0.3s;

  &:focus {
    outline: #FFF 2px solid;
  }
`;

export const ForgotPasswordText = styled.button`
  margin-top: 10px;
  
  border: none;

  font-size: 14px;
  font-weight: bold;

  color: #FFF;
  background: none;

  cursor: pointer;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;

  color: rgba(0, 0, 0, 1);

  background: #FFF;
  font-size: 17px;
  font-weight: bold;

  border: none;
  border-radius: 5px;

  padding: 10px;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
  }
`;
