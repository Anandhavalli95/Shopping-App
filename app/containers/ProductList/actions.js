import { GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_FAILURE, GET_PRODUCTS_LIST_SUCCESS } from './constants';

export function getProductList(pageNumber, query) {
  return {
    type: GET_PRODUCTS_LIST,
    pageNumber,
    query,
  };
}

export function getProductListSuccess(products) {
  return {
    type: GET_PRODUCTS_LIST_SUCCESS,
    products
  };
}
export function getProductListFailure(error) {
  return {
    type: GET_PRODUCTS_LIST_FAILURE,
    error
  };
}