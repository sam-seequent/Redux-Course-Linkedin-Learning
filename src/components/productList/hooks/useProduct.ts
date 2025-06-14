import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { selectAllProducts, selectExpensiveProducts, selectProductListStatus } from "../../../redux/selectors/productsSelector";
import { fetchProducts } from "../../../redux/actions/productsActions";
import { useEffect } from "react";
import { addToCart } from "../../../redux/reducers/cartReducer";

export const useProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const products = useSelector(selectAllProducts);
    const status = useSelector(selectProductListStatus);
    const expensiveProducts = useSelector(selectExpensiveProducts);

    const handleAddToCart = (id: number, price: number) => {
        dispatch(addToCart({ id, price }));
    };

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    return {
        products,
        status,
        expensiveProducts,
        handleAddToCart
    }
}