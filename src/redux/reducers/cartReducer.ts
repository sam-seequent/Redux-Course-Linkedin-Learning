import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface CartItem {
  id: number
  price: number;
  // Note even though we have nested properties in the CartItem interface,
  // we can still use the same interface for the payload action and not have
  // to create a new slice for the details.
  details?: {
    manufacturer: string;
    warranty: string;
  };
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  rating?: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

// Create slice is used to define the initial state and reducers for anything in a Redux store.
// It is a part of Redux Toolkit which simplifies the process of creating actions and reducers.
const cartSlice = createSlice({
  // As you can see there are a few properties
  // name: The name of the slice
  // initialState: The initial state of the slice
  // reducers: An object containing the reducer functions
  name: 'cart',
  initialState,
  //Reducers are functions that can modify the state
  //They take a payload action that can be used to modify the state
  reducers: {
    updateProductWarranty(state, action: PayloadAction<{ id: number; warranty: string }>) {
      const cartItem = state.items.find(item => item.id === action.payload.id);
      if (cartItem && cartItem.details) {
        cartItem.details.warranty = action.payload.warranty;
      }
    },
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalPrice -= item.price;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    applyCoupon(state, action: PayloadAction<string>) {
      const couponCode = action.payload;
      if (couponCode === 'DISCOUNT10') {
        state.totalPrice *= 0.9;
      }
    },
  },
});

//Note here that the Slice type has an actions property that extracts reducer functions
export const { addToCart, removeFromCart, applyCoupon } = cartSlice.actions;
// The reducer is exported so that it can later be plugged into the global store
export default cartSlice.reducer;
