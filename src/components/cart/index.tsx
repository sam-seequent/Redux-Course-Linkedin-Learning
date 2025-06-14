import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  CartContainer,
  CartIconWrapper,
  CartInfoContainer,
  CartInfoText,
} from './styles';

export const Cart: FC = () => {

  return (
    <CartContainer>
      <CartIconWrapper>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </CartIconWrapper>
      <CartInfoContainer>
        <CartInfoText>Total Items: 20</CartInfoText>
        <CartInfoText>Total Price: 245</CartInfoText>
      </CartInfoContainer>
    </CartContainer>
  );
};




















  