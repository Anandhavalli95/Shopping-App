import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import {
    makeSelectProducts,
  } from '../ProductList/selectors';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: '#f5f5f5',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
}));
export function ProductDetail(props) {
  const classes = useStyles();

  const prodIdToDisplay = props.match.params.id;
  const productDetail = props.products && props.products.products.find(product => product.productId === prodIdToDisplay); 
  return (
      <div>
           <Button color="primary" onClick={() => props.history.goBack()}>Back</Button>
            <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
                Product Details
            </Typography>
            <div className={classes.demo}>
                <List>
                    <ListItem>
                        <ListItemText
                            primary={productDetail.productName}
                        />
                    </ListItem>
                    <ListItem>
                    <CardMedia
                        className={classes.media}
                        image={'https://mobile-tha-server-8ba57.firebaseapp.com' + productDetail.productImage}
                        title="Product Image"
                    />
                    </ListItem>
                    <ListItem>
                        <div dangerouslySetInnerHTML={{__html: productDetail.shortDescription}}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary={`Price:` + productDetail.price }
                        />
                    </ListItem>
                </List>
            </div>
        </Grid>
        </div>
  );
}

const mapStateToProps = createStructuredSelector({
    products: makeSelectProducts(),
  });

export default connect(
    mapStateToProps,
    null,
)(ProductDetail);