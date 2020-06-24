import React from 'react';
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
import TextField from '@material-ui/core/TextField';

import Modal from '../Modal';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    height: 500
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductDetailCard({children, ...props}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const showModal = (e) => {
    e.stopPropagation();
    setOpen(true);
    console.log('On click more');
  }
  const closeModal = () => {
    setOpen(false);
  };
  const truncate = (str) => {
    const truncatedString = _.truncate(str, {length: 150, separator: /,? +/, omission: ''});
    return truncatedString;
  } 
  
  return (
    <React.Fragment>
    <Card key={props.detail.productId} className={classes.root} onClick={() => props.handleCardClick(props.detail.productId)}>
      <CardHeader
        avatar={
          <Avatar aria-label="gadgets" className={classes.avatar}>
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={showModal}>
            <MoreVertIcon/>
          </IconButton>
        }
        title={props.detail.productName}
      />
      <CardMedia
        className={classes.media}
        image={'https://mobile-tha-server-8ba57.firebaseapp.com' + props.detail.productImage}
        title="Product Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Product Details
        </Typography>
        <div dangerouslySetInnerHTML={{__html: truncate(props.detail.shortDescription)}}/>
        <Typography variant="body2" color="primary" component="div">
          Price: {props.detail.price}
        </Typography>
        <Typography variant="body2" color="primary" component="div">
          {props.detail.inStock ? 'Buy Now' : 'Sold Out'}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">Reviewed by {props.detail.reviewCount} User(s)</Typography>
        <Rating name="read-only" value={props.detail.reviewRating} readOnly />
      </CardContent>
    </Card>
    <Modal open={open} closeModal={closeModal}>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic1" label="Product Name" defaultValue={props.detail.productName} style={{width: '100%'}} />
        <TextField id="standard-basic2" label="Product Description" defaultValue={props.detail.shortDescription} style={{width: '100%'}}/>
        <TextField id="standard-basic3" label="Price" defaultValue={props.detail.price} style={{width: '100%'}}/>
      </form>
    </Modal>
    </React.Fragment>
  );
}
