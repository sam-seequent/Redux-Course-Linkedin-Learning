import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
  CartContainer,
  CartIconWrapper,
  CartInfoContainer,
  CartInfoText,
} from './styles';
import { selectCartTotalItems } from '../../redux/selectors/productsSelector';
import { useSelector } from 'react-redux';
import { selectCartTotalPrice } from '../../redux/selectors/cartSelector';

export const Cart: FC = () => {
  // Here we use our predefined selectors and the useSelector hook to access the global state managed by Redux.
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);

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




















  