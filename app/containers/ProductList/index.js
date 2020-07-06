import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import _ from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Skeleton from '@material-ui/lab/Skeleton';
import Pagination from '@material-ui/lab/Pagination';
// import Box from '@material-ui/core/Box';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import Card from 'components/Card';
import {
  makeSelectProducts,
  makeSelectIsLoading,
  makeSelectError,
  makeSelectPageNumber,
} from './selectors';

import saga from './getProductListSaga';
import reducer from './reducer';
import { getProductList, setPageNumber } from './actions';

const key = 'productList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export function ProductListPage(props) {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const handleChange = (event, value) => {
    props.setPage(value);
    props.getProductList(value, null);
  };

  useEffect(() => {
    props.getProductList(1, null);
  }, []);

  const handleCardClick = productId => {
    props.history.push(`/products/details/${productId}`);
  };

  const productDetails = (props.products && props.products.products) || [];
  const paginationCount = Math.ceil((props.products.totalProducts || 60) / 8);
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {productDetails.map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.productName}>
              <Card detail={product} handleCardClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Pagination
        className={classes.paginationContainer}
        count={paginationCount}
        color="secondary"
        page={props.page}
        onChange={handleChange}
        shape="rounded"
      />
    </React.Fragment>
  );
}

ProductListPage.propTypes = {
  products: PropTypes.object,
  page: PropTypes.number,

  setPage: PropTypes.func,
  getProductList: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  loading: makeSelectIsLoading(),
  error: makeSelectError(),
  page: makeSelectPageNumber(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getProductList: (pageNumber, query) =>
      dispatch(getProductList(pageNumber, query)),
    setPage: pageNumber => dispatch(setPageNumber(pageNumber)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProductListPage);
