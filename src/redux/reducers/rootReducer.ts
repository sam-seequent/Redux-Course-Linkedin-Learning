// Allows you to combine multiple reducers into a single root reducer
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import userReducer from './userReducer';

// Each slice of state is managed by a separate reducer.
// The rootReducer combines these reducers into a single reducer function.
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

export default rootReducer;
// Having a combined reducer provides the following benefits:
// 1. **Modularity**: Each reducer can be developed and tested independently.
// 2. **Scalability**: New features can be added by creating new slices without modifying existing code.
// 3. **Maintainability**: The codebase remains organized, making it easier to manage state changes.
// 4. **Simplicity**: Redux Toolkit's `combineReducers` simplifies the process of creating a root reducer, reducing boilerplate code.