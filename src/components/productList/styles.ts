import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  text-align: center;
`;
