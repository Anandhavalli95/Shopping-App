import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import Card from 'components/Card';
import { ProductListPage } from '../index';
// import { getProductList } from '../actions';
import configureStore from '../../../configureStore';

describe('<Product Listing View />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should fetch the productList on mount', () => {
    const ProductListPageSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ProductListPage products={{}} getProductList={ProductListPageSpy} />
        </IntlProvider>
      </Provider>,
    );
    expect(ProductListPageSpy).toHaveBeenCalled();
  });

  it('On Click of Icon More should open the edit Modal', () => {
    const products = {
      products: [
        {
          productId: '1f80e11b-1412-4990-813a-f068e1122873',
          productName: 'VIZIO 23" Class 720p LED HDTV - E231-B1',
          shortDescription:
            '<ul>\n\t<li>Resolution: 720p</li>\n\t<li>Refresh Rate: 60Hz</li>\n\t<li>HDMI Input: 1</li>\n</ul>\n',
          longDescription:
            '<p>Introducing the all-new 2014 E-Series 23&rdquo; (22.95&rdquo; diag.) Razor LED TV with an ultra-narrow frame and vibrant LED-lit picture. Edge-lit Razor LED backlighting delivers brilliant picture quality in an ultra-thin design. Enjoy high definition TV in crisp, clear resolution. With a near borderless design, a thinner side profile and space-saving, slimmer base, the new E-Series 23&rdquo; Full-Array LED TV is a perfect upgrade to any room.</p>\n\n<p>VIZIO E-Series: Picture-Perfect Brilliance.</p>\n',
          price: '$134.88',
          productImage: '/images/image9.jpeg',
          reviewRating: 3,
          reviewCount: 2,
          inStock: true,
        },
      ],
      totalProducts: 60,
      pageNumber: 1,
      pageSize: 8,
    };
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <ProductListPage products={products} getProductList={() => {}} />
        </IntlProvider>
      </Provider>,
    );
  });
  expect(Card.length).toBe(1);
  // it('should not call onSubmitForm if username is null', () => {
  //   const submitSpy = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <IntlProvider locale="en">
  //         <ProductListPage
  //           username=""
  //           onChangeUsername={() => {}}
  //           onSubmitForm={submitSpy}
  //         />
  //       </IntlProvider>
  //     </Provider>,
  //   );
  //   expect(submitSpy).not.toHaveBeenCalled();
  // });
});
