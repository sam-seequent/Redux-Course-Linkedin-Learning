import cartReducer, { CartState, addToCart, removeFromCart } from '../redux/reducers/cartReducer';

describe('Cart Reducer', () => {
  const initialState: CartState = {
    items: [],
    totalPrice: 0,
  };

  it('should return the initial state when no action is passed', () => {
    expect(cartReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle adding a product to the cart - addToCart', () => {
    const product = {
      id: 1,
      price: 100,
    };

    const expectedState: CartState = {
      items: [product],
      totalPrice: 100,
    };

    expect(cartReducer(initialState, addToCart(product))).toEqual(expectedState);
  });

  it('should handle removing a product from the cart - removeFromCart', () => {
    const initialStateWithItems: CartState = {
      items: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
      ],
      totalPrice: 300,
    };

    const expectedState: CartState = {
      items: [{ id: 2, price: 200 }],
      totalPrice: 200,
    };

    expect(cartReducer(initialStateWithItems, removeFromCart(1))).toEqual(expectedState);
  });
});
