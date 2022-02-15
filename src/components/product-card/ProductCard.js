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
// import Button from '@material-ui/core/button';
import { toast } from 'react-toastify';
import { useCart } from '../checkout-page/CartContext';
import ProductCardModal from '../product-page/ProductCardModal';
import ReviewsModal from '../product-page/ReviewsModal';
import '../product-page/ReviewsModal.css';
import fetchReviews from '../product-page/ReviewService';
import getQtyInCart, { inventoryAvailable } from './ProductCardService';

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
const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { dispatch } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reviewsModal, setReviewsModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [setApiError] = useState(false);

  // const showReviewButton = { reviewsModal };
  // make fetch call for reviews
  // useEffect - whenever reviews get changed if filter returns true

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
    fetchReviews(setReviews, setApiError);
    setReviewsModal(true);
  };

  return (
    <Card className={classes.root}>
      {modalIsOpen && reactDom.createPortal(
        <ProductCardModal product={product} closeModal={setModalIsOpen} />,
        document.getElementById('root')
      )}
      {reviewsModal && reactDom.createPortal(
        <ReviewsModal product={product} reviews={reviews} closeModal={setReviewsModal} />,
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
        {ReviewsModal.id !== true && (
        <button
          className="reviewsProductCardButton"
          type="button"
          variant="contained"
          onClick={onReview}
        >
          Reviews
        </button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
