import React, { useState } from 'react';
import reactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { toast } from 'react-toastify';
import { useCart } from '../checkout-page/CartContext';
import ProductCardModal from '../product-page/ProductCardModal';
import getQtyInCart, { inventoryAvailable } from './ProductCardService';
import ReviewsModal from '../product-page/ReviewsModal';
import '../product-page/ReviewsModal.css';

/**
 * @name useStyles
 * @description Material-ui styling for ProductCard component
 * @return styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

/**
 * @name ProductCard
 * @description displays single product card component
 * @param {*} props product
 * @return component
 */
const ProductCard = ({ product, reviews, setReviews }) => {
  const classes = useStyles();
  const { dispatch } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reviewsModal, setReviewsModal] = useState(false);
  const [showCreateReview, setReviewFormToggle] = useState(false);
  // const { activeReviews } = React.useState(reviews.filter((r) => (r.productId === product.id)));
  const {
    state: { products }
  } = useCart();

  const onAdd = (e) => {
    e.stopPropagation();
    const qtyInCart = getQtyInCart(products, product);
    if (!inventoryAvailable(qtyInCart, product)) return;
    products.forEach((element) => {
      if (element.id === product.id) {
        dispatch(
          {
            type: 'delete',
            product: {
              id: element.id,
              name: element.name,
              price: element.price,
              description: element.description,
              quantity: element.quantity,
              imageSrc: element.imageSrc
            }
          }
        );
      }
    });

    dispatch(
      {
        type: 'add',
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: 1 + qtyInCart,
          imageSrc: product.imageSrc
        }
      }
    );
    toast.success('Product successfully added to cart.');
  };
  const favoriteAdd = (e) => {
    e.stopPropagation();
  };
  const share = (e) => {
    e.stopPropagation();
  };
  const onReview = (e) => {
    e.stopPropagation();
    setReviewsModal(true);
  };

  const addReview = (e) => {
    e.stopPropagation();
    setReviewsModal(true);
    setReviewFormToggle(true);
    if (reviews.length === 0) {
      setReviewFormToggle(true);
    }
  };

  return (
    <Card className={classes.root}>
      {modalIsOpen && reactDom.createPortal(
        <ProductCardModal product={product} closeModal={setModalIsOpen} />,
        document.getElementById('root')
      )}
      {reviewsModal && reactDom.createPortal(
        <ReviewsModal
          product={product}
          reviews={reviews}
          setReviews={setReviews}
          closeModal={setReviewsModal}
          showCreateReview={showCreateReview}
          setReviewFormToggle={setReviewFormToggle}
        />,
        document.getElementById('root')
      )}
      <CardHeader
        onClick={() => {
          setModalIsOpen(true);
        }}
        avatar={(
          <Avatar aria-label="demographics" className={classes.avatar}>
            {product.demographic.charAt(0)}
          </Avatar>
          )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          )}
        title={product.name}
        subheader={`${product.demographic} ${product.category} ${product.type}`}
      />
      <CardMedia
        onClick={() => {
          setModalIsOpen(true);
        }}
        className={classes.media}
        image={product.imageSrc}
        title="placeholder"
      />
      <CardContent
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $
          {product.price}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <IconButton aria-label="add to favorites" onClick={favoriteAdd}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={share}>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to shopping cart" onClick={onAdd}>
          <AddShoppingCartIcon />
        </IconButton>
        <div>
          {ReviewsModal !== false && (
          <>
            <button
              className="reviewsProductCardButton"
              type="button"
              variant="contained"
              onClick={onReview}
            >
              Reviews
            </button>
            <button
              className="addReviewsProductCardButton"
              type="button"
              label="Add Review"
              variant="contained"
              onClick={addReview}
            >
              +
            </button>
          </>
          )}
        </div>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
