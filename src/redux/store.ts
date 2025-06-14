import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer'
import productsReducer from './reducers/productsReducer'

export const store = configureStore({
  // Here we import the reducers we need to effectively manage the state of the application.
  // This is considered the global store of the application.
  reducer: {
    cart: cartReducer,
    productsList: productsReducer
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
