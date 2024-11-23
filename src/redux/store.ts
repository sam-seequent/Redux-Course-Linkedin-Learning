import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer'
import productsReducer from './reducers/productsReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsList: productsReducer
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
