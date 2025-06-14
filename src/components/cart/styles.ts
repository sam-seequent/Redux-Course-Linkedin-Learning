import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 1000;
`;

export const CartIconWrapper = styled.div`
  margin-right: 10px;
  font-size: 1.5rem;
  color: #333;
`;

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartInfoText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #333;
  &:first-child {
    font-weight: bold;
  }
`;
