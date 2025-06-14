import productsReducer, { ProductsState } from '../redux/reducers/productsReducer';
import { fetchProducts } from '../redux/actions/productsActions';

describe('Products Slice Reducer', () => {
  let initialState: ProductsState;

  beforeEach(() => {
    initialState = {
      products: [],
      status: 'idle',
      error: null,
    };
  });

  it('should handle fetchProducts.pending action', () => {
    const action = { type: fetchProducts.pending.type };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: 'loading',
    });
  });

  it('should handle fetchProducts.fulfilled action', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100, description: '', image: '', category: '' },
      { id: 2, title: 'Product 2', price: 200, description: '', image: '', category: '' },
    ];
    const action = { type: fetchProducts.fulfilled.type, payload: mockProducts };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({ ...initialState, products: mockProducts, status: 'succeeded' });
  });

  it('should handle fetchProducts.rejected action', () => {
    const errorMessage = 'Failed to fetch products';
    const action = { type: fetchProducts.rejected.type, payload: errorMessage };
    const state = productsReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      status: 'failed',
      error: errorMessage,
    });
  });
});
