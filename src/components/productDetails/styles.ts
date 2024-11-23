import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
  text-align: center;
  color: #333;
`;

export const ProductDescription = styled.p`
  text-align: center;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #2ecc71;
  font-size: 1.2rem;
`;

export const AddToCartButton = styled.button`
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;
