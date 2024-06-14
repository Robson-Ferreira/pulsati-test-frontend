import styled from 'styled-components';

export const ContentWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: row;

  padding: 20px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 0;
  }
`;
