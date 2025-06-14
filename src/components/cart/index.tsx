import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  CartContainer,
  CartIconWrapper,
  CartInfoContainer,
  CartInfoText,
} from './styles';
import { useCart } from './hooks/useCart';

export const Cart: FC = () => {
const { totalItems, totalPrice } = useCart();


  return (
    <CartContainer>
      <CartIconWrapper>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </CartIconWrapper>
      <CartInfoContainer>
        <CartInfoText>Total Items: {totalItems}</CartInfoText>
        <CartInfoText>Total Price: ${totalPrice.toFixed(2)}</CartInfoText>
      </CartInfoContainer>
    </CartContainer>
  );
};




















  