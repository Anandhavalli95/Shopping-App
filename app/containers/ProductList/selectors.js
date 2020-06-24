import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProductList = state => state.productList || initialState;

const makeSelectProducts = () =>
  createSelector(
    selectProductList,
    productListState => productListState.products,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectProductList,
    productListState => productListState.isLoading,
  );

const makeSelectError = () =>
  createSelector(
    selectProductList,
    productListState => productListState.error,
  );
export { selectProductList, makeSelectProducts, makeSelectError, makeSelectIsLoading };
