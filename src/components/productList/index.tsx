import { FC } from 'react';
import { ProductDetails } from '../productDetails';
import { ProductListContainer, LoadingMessage, ErrorMessage } from './styles';
import { useProduct } from './hooks/useProduct';

export const ProductList: FC = () => {
  // The useDispatch hook allows us to dispatch actions to the Redux store, updating the state.
  const { products, expensiveProducts, status } = useProduct();

  if (status === 'loading') {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (status === 'failed') {
    return <ErrorMessage>Failed to load products.</ErrorMessage>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ProductListContainer>
        {products.map((product) => (
          <ProductDetails
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ProductListContainer>
      <h1>Expensive Products</h1>
      <ProductListContainer>
        {expensiveProducts.map((product) => (
          <ProductDetails
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ProductListContainer>
    </div>
  );
};
