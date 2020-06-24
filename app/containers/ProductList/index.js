import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Pagination from '@material-ui/lab/Pagination';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import AppBar from 'components/AppBar';

import {
  makeSelectProducts,
  makeSelectIsLoading,
  makeSelectError
} from './selectors';
import Card from 'components/Card';

import saga from './getProductListSaga';
import reducer from './reducer';
import { getProductList } from './actions';

const key = 'productList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));

export function ProductListPage(props) {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [page, setPage] = React.useState(1);
  const debouncedSearch = _.debounce((escapedQuery) => { props.getProductList(page, escapedQuery)}, 1000);
  const handleChange = (event, value) => {
    setPage(value);
    props.getProductList(value, null);
  };

  useEffect(() => {
    props.getProductList(1, null);
  }, []);
  
  const handleCardClick = (productId) => {
    props.history.push(`/details/${productId}`);
  }

  const handleSearch = (evt) => {
    const query = `?search=${evt.target.value}`;
    debouncedSearch(query);
  }

  const handleFilter = (filterName) => {
    console.log('filter', filterName);
    const filterQuery = filterName ===  'Filter by Out of Stock' ? '?inStock=false' : '?inStock=true' ;
    debouncedSearch(filterQuery);
  }
  const productDetails = props.products && props.products.products || [];
  const paginationCount = Math.ceil((props.products.totalProducts || 60)/8);
  return (
    <React.Fragment>
    <AppBar onSearch={handleSearch} onFilter={handleFilter}/>
    <div className={classes.root}>
      <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
        { productDetails.map(product => (
          productDetails.length > 0  ? <Grid item xs={12} sm={6} md={3} key={productDetails.indexOf(product)}>
            <Card detail={product} handleCardClick={handleCardClick}/>
          </Grid>
          : <Skeleton variant="rect" width={210} height={118} />
          ) 
        )}
      </Grid>
    </div>
    <Pagination count={paginationCount} page={page} onChange={handleChange} />
    </React.Fragment>
  );
}

ProductListPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  products: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  loading: makeSelectIsLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getProductList: (pageNumber, query) => dispatch(getProductList(pageNumber, query)),
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
