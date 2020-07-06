import {
  selectProductList,
  makeSelectProducts,
  makeSelectError,
  makeSelectIsLoading,
  makeSelectPageNumber,
} from '../selectors';

describe('selectProductList', () => {
  it('should select the productList state', () => {
    const productListState = {
      products: {},
    };
    const mockedState = {
      productList: productListState,
    };
    expect(selectProductList(mockedState)).toEqual(productListState);
  });
});

const mockedState = {
  productList: {
    products: {
      products: [
        {
          productId: '1',
          productName: 'LG',
        },
      ],
    },
    error: new Error(),
    isLoading: true,
    page: 2,
  },
};
describe('makeSelectProducts', () => {
  const productListSelector = makeSelectProducts();
  it('should select the products', () => {
    const products = {
      products: [
        {
          productId: '1',
          productName: 'LG',
        },
      ],
    };
    expect(productListSelector(mockedState)).toEqual(products);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    expect(errorSelector(mockedState)).toEqual(new Error());
  });
});

describe('makeSelectIsLoading', () => {
  const isLoadingSelector = makeSelectIsLoading();
  it('should select the isLoading value', () => {
    expect(isLoadingSelector(mockedState)).toEqual(true);
  });
});

describe('makeSelectPageNumber', () => {
  const pageSelector = makeSelectPageNumber();
  it('should select the page value', () => {
    expect(pageSelector(mockedState)).toEqual(2);
  });
});
