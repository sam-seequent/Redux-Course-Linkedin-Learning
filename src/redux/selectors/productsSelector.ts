import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../reducers/productsReducer'
// Selectors extract specific pieces of state from the Redux store. This is used so we don't have to access the state directly in components, promoting better separation of concerns and reusability.
// Selectors can be simple or memoized. Memoized selectors are created using `createSelector` from Redux Toolkit, which helps optimize performance by caching results based on input parameters.

// Note: Selectors only recompute when their input parameters change, which can significantly improve performance in larger applications.
// Basic selector to retrieve all products
export const selectAllProducts = (state: RootState) => state.reducer.products.products;

// Basic selector to retrieve loading state of the products list API call
export const selectProductListStatus = (state: RootState) => state.reducer.products.status;

// Memoized selector to filter expensive products
export const selectExpensiveProducts = createSelector(
  [selectAllProducts],
  (products: Product[]) => products.filter((product: Product) => product.price > 1000)
);

export const selectCartTotalItems = (state: RootState) => state.reducer.cart.items.length;