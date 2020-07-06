/* eslint-disable no-param-reassign */
import produce from 'immer';

import productListReducer from '../reducer';
import {
  getProductList,
  setPageNumber,
  getProductListFailure,
  getProductListSuccess,
} from '../actions';

describe('productListReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      products: {},
      isLoading: false,
      error: false,
      page: 1,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(productListReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getProductList action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.isLoading = true;
    });

    expect(productListReducer(state, getProductList(2, null))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getProductListSuccess action correctly', () => {
    const products = {
      products: [
        {
          productId: '218ca04a-0a9f-42b3-9fa5-1ca592fc7d29',
          productName: 'LG 32" Class 720P LED HDTV - 32LF500B',
          shortDescription:
            '<ul>\n\t<li>Resolution: 720p</li>\n\t<li>Refresh Rate: 60Hz</li>\n\t<li>HDMI Inputs: 3</li>\n</ul>\n',
          longDescription:
            '<p><b>LED</b><br />\nLED uses tiny, energy-efficient light-emitting diodes to illuminate the picture. The new standard in HDTVs, LED is superior to older CCFL technology, making slimmer televisions possible, with amazing brightness, clarity and color detail.</p>\n\n<p><span style="line-height: 1.6em;"><b>Triple XD Engine</b><br />\nLG&rsquo;s exceptional picture quality is further enhanced by the Triple XD Engine, which processes images with even greater precision. The latest Triple XD Engine enables more natural color expression, deeper contrast and more refined motion so that viewers can enjoy a more lifelike picture.</span></p>\n\n<p><span style="line-height: 1.6em;"><b>Smart Energy Saving<br />\n</b></span><span style="line-height: 1.6em;">This valuable feature includes a backlight control to adjust the brightness, a screen-off function that turns the screen off to play audio only, and the Standby Mode Zero function that allows the TV to effectively hibernate, using zero electricity.</span></p>\n',
          price: '$217.88',
          productImage: '/images/image5.jpeg',
          reviewRating: 4.8125,
          reviewCount: 16,
          inStock: true,
        },
      ],
      totalProducts: 60,
      pageNumber: 1,
      pageSize: 8,
      statusCode: 200,
    };
    const expectedResult = produce(state, draft => {
      draft.products = products;
      draft.isLoading = false;
    });

    expect(productListReducer(state, getProductListSuccess(products))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getProductListFailure action correctly', () => {
    const error = new Error();
    const expectedResult = produce(state, draft => {
      draft.isLoading = false;
      draft.error = error;
    });

    expect(productListReducer(state, getProductListFailure(error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the setPageNumber action correctly', () => {
    const pageNumber = 3;
    const expectedResult = produce(state, draft => {
      draft.page = pageNumber;
    });

    expect(productListReducer(state, setPageNumber(pageNumber))).toEqual(
      expectedResult,
    );
  });
});
