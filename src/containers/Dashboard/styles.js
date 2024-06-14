import styled from 'styled-components';

export const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const MainContent = styled.div`
`;

export const DataCardRevanue = styled.div`
  background-color: #efefef;
  border-radius: 0.5em;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 1em;
  margin: 20px;

  width: 50%;
  height: 20rem;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const DataCardCustomer = styled.div`
  background-color: #efefef;
  border-radius: 0.5em;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 1em;
  margin: 10px;

  width: 50%;
  height: 20rem; 

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const DataCardCategory = styled.div`
  background-color: #efefef;
  border-radius: 0.5em;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 1em;
  margin: 10px;

  width: 50%;
  height: 20rem;

  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;
