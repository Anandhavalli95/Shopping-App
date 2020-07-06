import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { ProductDetail } from '../index';
import configureStore from '../../../configureStore';

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
const props = {
  match: {
    params: {
      id: '1f80e11b-1412-4990-813a-f068e1122873',
    },
  },
};

describe('<ProductDetailCard />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });
  it('should render a Card', () => {
    const { container, queryByText } = render(
      <Provider store={store}>
        <ProductDetail match={props.match} products={products} />
      </Provider>,
    );
    expect(container.querySelector('.fluid')).not.toBeNull();
    expect(queryByText(products.products[0].productName)).not.toBeNull();
    expect(queryByText(products.products[0].price)).not.toBeNull();
    expect(container.getElementsByTagName(Rating)).not.toBeNull();
  });

  it('should render the passed product details', () => {
    const { container, queryByText } = render(
      <Provider store={store}>
        <ProductDetail match={props.match} products={products} />
      </Provider>,
    );
    expect(queryByText(products.products[0].productName)).not.toBeNull();
    expect(queryByText(products.products[0].price)).not.toBeNull();
    expect(container.getElementsByTagName(Rating)).not.toBeNull();
  });
});
