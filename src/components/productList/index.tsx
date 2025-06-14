import React, { FC } from 'react';
import { ProductListContainer} from './styles';

export const ProductList: FC = () => {

  return (
    <div>
      <h2>Product List</h2>
      <ProductListContainer> Product List</ProductListContainer>
      <h1>Expensive Products</h1>
    </div>
  );
};
