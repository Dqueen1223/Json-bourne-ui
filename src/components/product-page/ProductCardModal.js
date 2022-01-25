import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ProductCardModal.css';
import { useCart } from '../checkout-page/CartContext';

// import { useCart } from '../checkout-page/CartContext';
/**
 * @name ProductCardModal
 * @description material-ui styling for product card modal
 * @return component
 */
const ProductCardModal = ({ product, closeModal }) => {
  const { dispatch } = useCart();
  const [quantityPicker, setQuantityPicker] = useState(1);
  const [higherValue, setHigherValue] = useState(true);
  const [lowerValue, setLowerValue] = useState(false);

  const onAdd = () => {
    dispatch(
      {
        type: 'add',
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: quantityPicker,
          imageSrc: product.imageSrc
        }
      }
    );
  };
  const higherValueCheck = (quantitySelector) => {
    if (quantitySelector >= product.quantity) {
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
    if (e.target.value < product.quantity) {
      setQuantityPicker(e.target.value);
    } else {
      setQuantityPicker(product.quantity);
    }
    if (e.target.value === null) {
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

  const closeTheModal = (e) => {
    if (e.target.className === 'productCardModalBackground' || e.target.className === 'closeButton') {
      closeModal(false);
    }
  };
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardModal;
