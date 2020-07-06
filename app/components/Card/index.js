import React from 'react';
import PropTypes, { any } from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Close from '@material-ui/icons/CloseRounded';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form } from './wrapper';

import Modal from '../Modal';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    height: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductDetailCard({ children, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(props.detail.reviewRating);

  const showModal = e => {
    e.stopPropagation();
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const truncate = str => {
    const truncatedString = _.truncate(str, {
      length: 150,
      separator: /,? +/,
      omission: '',
    });
    return truncatedString;
  };

  return (
    <React.Fragment>
      <Card
        key={props.detail.productId}
        className={classes.root}
        onClick={() => props.handleCardClick(props.detail.productId)}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="gadgets" className={classes.avatar}>
              {props.detail.productName[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={showModal}>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.detail.productName}
        />
        <CardMedia
          className={classes.media}
          image={`https://mobile-tha-server-8ba57.firebaseapp.com${
            props.detail.productImage
          }`}
          title="Product Image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Product Details
          </Typography>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: truncate(props.detail.shortDescription),
            }}
          />
          <Typography variant="body2" color="primary" component="div">
            Price: {props.detail.price}
          </Typography>
          <Typography variant="body2" color="primary" component="div">
            {props.detail.inStock ? 'Buy Now' : 'Sold Out'}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Reviewed by {props.detail.reviewCount} User(s)
          </Typography>
          <Rating name="read-only" value={props.detail.reviewRating} readOnly />
        </CardContent>
      </Card>
      <Modal open={open} closeModal={closeModal}>
        <Form noValidate autoComplete="off">
          <div className="single-row">
            <h2 id="modal-title"> Edit Product Details </h2>
            <IconButton onClick={closeModal}>
              <Close />
            </IconButton>
          </div>
          <TextField
            className="standard-basic1"
            label="Product Name"
            defaultValue={props.detail.productName}
            style={{ width: '100%' }}
          />
          <TextField
            className="standard-basic1"
            label="Product Description"
            defaultValue={props.detail.shortDescription}
            style={{ width: '100%' }}
          />
          <TextField
            className="standard-basic1"
            label="Price"
            defaultValue={props.detail.price}
            style={{ width: '100%' }}
          />
          <Typography variant="body2" color="textSecondary" component="p">
            Rating
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <div className="single-row">
            <Button variant="contained" color="secondary">
              {' '}
              Submit{' '}
            </Button>
            <Button variant="contained" onClick={closeModal}>
              {' '}
              Cancel{' '}
            </Button>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

ProductDetailCard.propTypes = {
  detail: PropTypes.object,
  children: any,

  handleCardClick: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
};
