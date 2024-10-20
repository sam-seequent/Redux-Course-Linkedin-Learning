import { configureStore } from '@reduxjs/toolkit';

const preloadedState = {
  cart: {
    items: [{ id: 1, name: 'Shoes', price: 50 }],
    totalPrice: 50,
  },
};

export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;