import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import ProductDetailCard from '../index';

const detail = {
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
};

describe('<ProductDetailCard />', () => {
  it('should render a Card', () => {
    const { container } = render(<ProductDetailCard detail={detail} />);
    expect(container.querySelector('.MuiCard-root')).not.toBeNull();
  });

  it('should render the passed prop', () => {
    const { queryByText } = render(<ProductDetailCard detail={detail} />);
    expect(queryByText(detail.productName)).not.toBeNull();
    expect(queryByText(`Price: ${detail.price}`)).not.toBeNull();
    expect(queryByText('Buy Now')).not.toBeNull();
  });

  it('should redirect to product details page', () => {
    const handleCardClickMock = jest.fn();
    const { container } = render(
      <ProductDetailCard
        detail={detail}
        handleCardClick={handleCardClickMock}
      />,
    );
    fireEvent.click(container.querySelector('.MuiCard-root'));
    expect(handleCardClickMock).toHaveBeenCalled();
  });
});
