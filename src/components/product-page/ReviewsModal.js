// import React from 'react';

// /**
//  * @name ReviewsModal
//  * @description material-ui styling for product card review modal
//  * @return component
//  */
// const ReviewsModal = ({ product, closeModal }) => {
//   const setOpen = React.useState(true);
//   // const handleOpen = () => setOpen(true);
//   // const handleClose = () => setOpen(false);
//   console.log('this button has been clicked');
//   const closeTheModal = (e) => {
//     if (e.target.className === 'reviewsModalBackground'
// || e.target.className === 'closeButton') {
//       closeModal(false);
//     }
//   };
//   return (
//     <div
//       className="reviewsModalBackground"
//       onClick={closeTheModal}
//       open={setOpen}
//       aria-hidden="true"
//     >
//       <div className="reviewsModal">
//         <div className="reviewsModal-content">
//           <div className="reviewsModal-header">
//             <button
//               type="button"
//               className="closeButton"
//               onClick={closeTheModal}
//             >
//               &times;
//             </button>
//           </div>
//           <div className="reviewsModal-body">
//             <div className="row">
//               <div className="productCardModal-title">{product.name}</div>
//               <div className="productCardPrice">
//                 $
//                 {parseFloat(product.price).toFixed(2)}
//               </div>
//             </div>
//             <div className="row">
//               <div className="productCardDescription">{product.description}</div>
//             </div>
//           </div>
//           <div className="reviewsModal-footer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewsModal;
// import React, { useState } from 'react';
// import ReactDOM, { createPortal } from 'react-dom';
// import { CSSTransition } from 'react-transition-group';
// import './ReviewsModal.css';
// import './ProductPage';

// const ReviewsModal = () => {
//   const Modal = ({ children, activator }) => {
//     const [show, setShow] = useState(false);

//     const content = (
//       <div className="overlay">
//         <div className="modal">
//           <button
//             className="modal-close"
//             type="button"
//             onClick={() => setShow(false)}
//           >
//             X
//           </button>
//           <div className="modal-body">{children}</div>
//         </div>
//       </div>
//     );

//     return (
//       <>
//         {activator({ setShow })}
//         {createPortal(
//           <CSSTransition
//             in={show}
//             timeout={120}
//             classNames="modal-transition"
//             unmountOnExit
//           >
//             {() => <div>{content}</div>}
//           </CSSTransition>,
//           document.body
//         )}
//       </>
//     );
//   };

//   const App = () => (
//     <div>
//       <h1>React Modal</h1>
//       <h3>with useState</h3>

//       <Modal
//         activator={({ setShow }) => (
//           <button type="button" onClick={() => setShow(true)}>
//             Show Modal
//           </button>
//         )}
//       >
//         This is inside the modal!
//       </Modal>
//     </div>
//   );

//   const rootElement = document.getElementById('root');
//   ReactDOM.render(<App />, rootElement);
// };
// export default ReviewsModal;

import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './ReviewsModal.css';
import { useCart } from '../checkout-page/CartContext';

// import { useCart } from '../checkout-page/CartContext';
/**
 * @name ReviewsModal
 * @description material-ui styling for reviews modal
 * @return component
 */
const ReviewsModal = ({ product, closeModal }) => {
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
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'closeButton') {
      closeModal(false);
    }
  };
  return (
    <div
      className="reviewsModalBackground"
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className="reviewsModal">
        <div className="reviewsModal-content">
          <div className="reviewsModal-header">
            <button
              type="button"
              className="closeButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="reviewsModal-body">
            <div className="row">
              <div className="reviewsModal-title">{product.name}</div>
              <div className="reviewsPrice">
                $
                {parseFloat(product.price).toFixed(2)}
              </div>
            </div>
            <div className="row">
              <div className="reviewsDescription">{product.description}</div>
              <div className="reviewsColors">
                <div className="reviewsPrimary">
                  edit this
                  <div className="reviewsPrimaryColor" style={{ backgroundColor: product.primaryColorCode }} />
                </div>
                <div className="reviewsSecondary">
                  edit this stuff too
                  <div className="reviewsSecondaryColor" style={{ backgroundColor: product.secondaryColorCode }} />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="reviewsCategory">{product.category}</div>
              <div className="reviewsType">{product.type}</div>
            </div>
          </div>
          <div className="reviewsModal-footer">
            <div className="reviewsPicker">
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

export default ReviewsModal;
