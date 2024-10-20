import { fetchProducts } from '../redux/actions/productsActions';
import fetchMock from 'jest-fetch-mock';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/rootReducer';

describe('fetchProducts thunk', () => {
  beforeAll(() => {
    fetchMock.enableMocks();
  });
  
  let store = configureStore({
    reducer: rootReducer
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should dispatch fulfilled action when fetching products is successful', async () => {
    const mockProducts = [{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }];
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
    fetchMock.mockRejectedValueOnce(new Error('Network Error'));

    const result = await store.dispatch(fetchProducts());

    expect(fetchMock).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    expect(result.type).toBe('products/fetchProducts/rejected');
    expect(result.payload).toBe('Network Error');
  });
});
