import React, { FC } from 'react';
import {
  ProductDetailsContainer,
  AddToCartButton,
} from './styles';

interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export const ProductDetails: FC<ProductDetailsProps> = ({}) => {

  return (
    <ProductDetailsContainer>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </ProductDetailsContainer>
  );
};
