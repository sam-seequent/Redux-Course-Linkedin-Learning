import { useSelector, useDispatch } from 'react-redux';
import { selectCartTotalItems, selectCartTotalPrice } from '../../../redux/selectors/cartSelector';
import { addToCart, CartItem, removeFromCart } from '../../../redux/reducers/cartReducer'

// Defining a custom hook makes your code:
// 1. More readable by abstracting away the logic.
// 2. Reusable across different components. 
// 3. Avoid prop drilling by providing a simple interface to interact with the cart state.
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

  // Returning an object with the functions and variables needed across the application.
  // This allows components to access the cart state and actions without needing to know the implementation details.
  return {
    totalItems,
    totalPrice,
    addProductToCart,
    removeProductFromCart,
  };
};
