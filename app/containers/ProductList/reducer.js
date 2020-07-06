/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST,
  GET_PRODUCTS_LIST_FAILURE,
  SET_PAGE_NUMBER,
} from './constants';

export const initialState = {
  products: {},
  isLoading: false,
  error: false,
  page: 1,
};

const productListReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCTS_LIST:
        draft.isLoading = true;
        break;
      case GET_PRODUCTS_LIST_SUCCESS:
        draft.products = action.products;
        draft.isLoading = false;
        break;
      case GET_PRODUCTS_LIST_FAILURE:
        draft.error = action.error;
        draft.isLoading = false;
        break;
      case SET_PAGE_NUMBER:
        draft.page = action.pageNumber;
        break;
      default:
        return state;
    }
  });

export default productListReducer;
