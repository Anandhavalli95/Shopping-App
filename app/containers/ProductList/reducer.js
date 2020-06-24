import produce from 'immer';
import { GET_PRODUCTS_LIST_SUCCESS, GET_PRODUCTS_LIST, GET_PRODUCTS_LIST_FAILURE } from './constants';

export const initialState = {
  products: {},
  isLoading: false,
  error: false,
};

const productListReducer = (state = initialState, action) =>
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
    }
  });

export default productListReducer;
