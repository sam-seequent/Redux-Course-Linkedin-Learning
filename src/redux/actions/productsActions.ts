// This file has purposefully been kept seperate to split the reducers and actions
//Used to handle async actions related to products in a Redux store
import { createAsyncThunk } from '@reduxjs/toolkit';

// This function accepts two parameters:
// 1. A string that represents the action type
// 2. An async function that performs the API call to fetch products
// It returns a promise that resolves with the fetched products or rejects with an error message.
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

