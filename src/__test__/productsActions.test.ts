// Command to install mock-fetch: npm install --save-dev jest-fetch-mock
import { fetchProducts } from '../redux/actions/productsActions';
import fetchMock from 'jest-fetch-mock';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/rootReducer';

describe('fetchProducts thunk', () => {
  // Works the same as in Java
  beforeAll(() => {
    // Enables fetchMock to mock fetch calls
    fetchMock.enableMocks();
  });
  
  // Ensures store works as it would in the actual application
  let store = configureStore({
    reducer: rootReducer
  });

  // Also works the same as in Java
  beforeEach(() => {
    // Resets mock states before each test
    fetchMock.resetMocks();
  });

  it('should dispatch fulfilled action when fetching products is successful', async () => {
    const mockProducts = [{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }];
    // Simulate a successful fetch response
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    } as Response);

    const result = await store.dispatch(fetchProducts());

    expect(fetchMock).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(result.type).toBe('products/fetchProducts/fulfilled');
    expect(result.payload).toEqual(mockProducts);
  });

  it('should dispatch rejected action when fetching products fails', async () => {
    // Simulate a failed fetch response
    fetchMock.mockResolvedValueOnce({
      ok: false,
      statusText: 'Internal Server Error',
    } as Response);

    const result = await store.dispatch(fetchProducts());

    expect(fetchMock).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(result.type).toBe('products/fetchProducts/rejected');
    expect(result.payload).toBe('Failed to fetch products');
  });

  it('should dispatch rejected action when network error occurs', async () => {
    // Simulate a network error
    fetchMock.mockRejectedValueOnce(new Error('Network Error'));

    const result = await store.dispatch(fetchProducts());

    expect(fetchMock).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(result.type).toBe('products/fetchProducts/rejected');
    expect(result.payload).toBe('Network Error');
  });
});
