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

const makeSelectPageNumber = () =>
  createSelector(
    selectProductList,
    productListState => productListState.page,
  );
export {
  selectProductList,
  makeSelectProducts,
  makeSelectError,
  makeSelectIsLoading,
  makeSelectPageNumber,
};
