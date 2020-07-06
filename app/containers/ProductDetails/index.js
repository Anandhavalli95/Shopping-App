import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '@material-ui/core/Button';
import ReactImageMagnify from 'react-image-magnify';
import Rating from '@material-ui/lab/Rating';
import { Wrapper } from './wrapper';
import { makeSelectProducts } from '../ProductList/selectors';

export function ProductDetail(props) {
  const prodIdToDisplay = props.match.params.id;
  const productDetail =
    props.products &&
    props.products.products.find(
      product => product.productId === prodIdToDisplay,
    );
  return (
    <Wrapper>
      <Button color="primary" onClick={() => props.history.goBack()}>
        Back
      </Button>
      <div className="fluid">
        <div className="fluid__image-container">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Product Image',
                isFluidWidth: true,
                src: `https://mobile-tha-server-8ba57.firebaseapp.com${
                  productDetail.productImage
                }`,
              },
              largeImage: {
                src: `https://mobile-tha-server-8ba57.firebaseapp.com${
                  productDetail.productImage
                }`,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className="fluid__instructions">
          <h3>{productDetail.productName}</h3>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: productDetail.shortDescription }}
          />
          <p style={{ fontSize: '24px' }}>{productDetail.price}</p>
          <Rating
            name="read-only"
            value={productDetail.reviewRating}
            readOnly
          />
        </div>
      </div>
    </Wrapper>
  );
}

ProductDetail.propTypes = {
  products: PropTypes.object,

  match: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

export default connect(
  mapStateToProps,
  null,
)(ProductDetail);
