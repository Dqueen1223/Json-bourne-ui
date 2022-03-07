import React, { useState } from 'react';
// import reactDom from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ProductCardModal.css';
import Rating from '@mui/material/Rating';
import { useCart } from '../checkout-page/CartContext';
import getQtyInCart, { displayToast, isInventoryAvailable } from './ProductCardModalService';
import ReviewsModal from './ReviewsModal';

/**
 * @name ProductCardModal
 * @description material-ui styling for product card modal
 * @return component
 */
const ProductCardModal = ({
  product, closeModal, reviews, setReviewsModal, average, displayCount
}) => {
  const { dispatch } = useCart();
  const [quantityPicker, setQuantityPicker] = useState(1);
  const [higherValue, setHigherValue] = useState(true);
  const [lowerValue, setLowerValue] = useState(false);

  const {
    state: { products }
  } = useCart();

  // const [activeReviews] = React.useState(
  //   false
  // );
  // React.useEffect(() => {
  //   if (reviews !== true) {
  //     setActiveReviews(reviews.filter((r) => (r.productId === product.id)));
  //   }
  // }, [product.id, reviews]);

  // React.useEffect(() => {
  //   if (activeReviews) {
  //     let currentCount = 0;
  //     if (!activeReviews === false) {
  //       activeReviews.forEach((e) => {
  //         currentCount += e.rating;

  //         // currentCount;
  //       });
  //     }
  //     const tempRating = Math.floor(currentCount / activeReviews.length);
  //     const remainder = currentCount % activeReviews.length;
  //     if (remainder / activeReviews.length > 0.33 && remainder / activeReviews.length < 0.66) {
  //       setAverageRating(tempRating + 0.5);
  //     } else if (remainder / activeReviews.length >= 0.66) {
  //       setAverageRating(tempRating + 1);
  //     } else {
  //       setAverageRating(tempRating);
  //     }
  //   }
  // }, [activeReviews, reviews]);
  const onAdd = () => {
    const qtyInCart = getQtyInCart(products, product);
    if (!isInventoryAvailable(quantityPicker, qtyInCart, product)) return;
    if (qtyInCart > 0) {
      dispatch(
        {
          type: 'delete',
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            quantity: product.quantity,
            imageSrc: product.imageSrc
          }
        }
      );
    }
    dispatch(
      {
        type: 'add',
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: Number(quantityPicker) + qtyInCart,
          imageSrc: product.imageSrc
        }
      }
    );
    displayToast(quantityPicker, product);
  };

  const higherValueCheck = (quantitySelector) => {
    const qty = getQtyInCart(products, product);
    if (quantitySelector >= product.quantity - qty) {
      setHigherValue(false);
    } else {
      setHigherValue(true);
    }
  };

  const lowerValueCheck = (quantitySelector) => {
    if (Number(quantitySelector) <= 1) {
      setLowerValue(false);
    } else {
      setLowerValue(true);
    }
  };

  const lowerQuantity = () => {
    if (quantityPicker > 0) {
      setQuantityPicker(Number(quantityPicker) - 1);
    }
    higherValueCheck(quantityPicker - 1);
    lowerValueCheck(quantityPicker - 1);
  };

  const raiseQuantity = () => {
    if (quantityPicker < product.quantity) {
      setQuantityPicker(Number(quantityPicker) + 1);
    }
    higherValueCheck(quantityPicker + 1);
    lowerValueCheck(quantityPicker + 1);
  };

  const onChange = (e) => {
    const qty = getQtyInCart(products, product);
    if (e.target.value < product.quantity - qty) {
      setQuantityPicker(e.target.value);
    } else {
      setQuantityPicker((product.quantity - qty) === 0 ? 1 : product.quantity - qty);
    }
    if (e.target.value === null || e.target.value === '0') {
      setQuantityPicker(1);
    }

    higherValueCheck(e.target.value);
    lowerValueCheck(e.target.value);
  };

  const preventCertainCharacters = (e) => {
    if (!(e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4'
      || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === 'Backspace'
      || e.key === 'Numpad0' || e.key === 'Numpad1' || e.key === 'Numpad2' || e.key === 'Numpad3' || e.key === 'Numpad4'
      || e.key === 'Numpad5' || e.key === 'Numpad6' || e.key === 'Numpad7' || e.key === 'Numpad8' || e.key === 'Numpad9')) {
      e.preventDefault();
    }
  };
  const onReview = (e) => {
    closeModal(false);
    e.stopPropagation();
    setReviewsModal(true);
  };

  const closeTheModal = (e) => {
    if (e.target.className === 'productCardModalBackground' || e.target.className === 'closeButton') {
      closeModal(false);
    }
  };

  // const displayCount = Object.keys(activeReviews).length;
  return (
    <div
      className="productCardModalBackground"
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className="productCardModal">
        <div className="productCardModal-content">
          <div className="productCardModal-header">
            <div className="productCardModalImg">
              <img src={product.imageSrc} alt={product.description} className="ModalImg" />
            </div>
            <button
              type="button"
              className="closeButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="productCardModal-body">
            <div className="row">
              <div className="productCardModal-title">{product.name}</div>
              <div className="productCardPrice">
                $
                {parseFloat(product.price).toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="productCardDescription">{product.description}</div>
              <div className="productCardColors">
                <div className="productCardPrimary">
                  Primary:
                  <div className="productCardPrimaryColor" style={{ backgroundColor: product.primaryColorCode }} />
                </div>
                <div className="productCardSecondary">
                  Secondary:
                  <div className="productCardSecondaryColor" style={{ backgroundColor: product.secondaryColorCode }} />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="productCardCategory">{product.category}</div>
              <div className="productCardType">{product.type}</div>
            </div>
          </div>
          <div className="productCardModal-footer">
            <div className="quantityPicker">
              <div className="lowerQuantity">
                {lowerValue && <button onClick={lowerQuantity} type="button" className="lowerQuantityBtn"> &minus; </button>}
              </div>
              <div className="currentQuantity">
                <input className="quantityInput" type="number" min="0" pattern="[0-9]*" value={quantityPicker} onKeyDown={preventCertainCharacters} onChange={onChange} />
              </div>
              <div className="raiseQuantity">
                {higherValue && <button onClick={raiseQuantity} type="button" className="raiseQuantityBtn"> + </button>}
              </div>
            </div>
            <div className="addToCart">
              <IconButton aria-label="add to shopping cart" onClick={onAdd}>
                <AddShoppingCartIcon />
              </IconButton>
              <div className="productReviewCounter">
                {displayCount}
              </div>
              {/* {reviewsModal && reactDom.createPortal(
                <ReviewsModal
                  product={product}
                  reviews={reviews}
                  setReviews={setReviews}
                  closeModal={setReviewsModal}
                  showCreateReview={showCreateReview}
                  setReviewFormToggle={setReviewFormToggle}
                />,
                document.getElementById('root')
              )} */}
              {ReviewsModal !== false && (
                <>
                  <div
                    onClick={onReview}
                    aria-hidden="true"
                  >
                    <Rating
                      reviews={reviews}
                      type="button"
                      className="productModalReviews"
                      name="half-rating-read"
                      value={average}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardModal;
