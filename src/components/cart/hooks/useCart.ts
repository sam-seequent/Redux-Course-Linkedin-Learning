import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotalItems, selectCartTotalPrice } from '../../../redux/selectors/cartSelector';
import { addToCart, CartItem, removeFromCart } from '../../../redux/reducers/cartReducer'

export const useCart = () => {
  const dispatch = useDispatch();

  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const addProductToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const removeProductFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return {
    totalItems,
    totalPrice,
    addProductToCart,
    removeProductFromCart,
  };
};
