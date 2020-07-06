/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_PRODUCTS_LIST } from './constants';
import { getProductListSuccess, getProductListFailure } from './actions';

export function* fetchProductListSaga(action) {
  const requestURL = action.query
    ? `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${action.pageNumber}/8/${action.query}`
    : `https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/${action.pageNumber}/8`;

  try {
    const response = yield call(request, requestURL);
    yield put(getProductListSuccess(response));
  } catch (err) {
    yield put(getProductListFailure(err));
  }
}

export default function* fetchProductList() {
  yield takeLatest(GET_PRODUCTS_LIST, fetchProductListSaga);
}
