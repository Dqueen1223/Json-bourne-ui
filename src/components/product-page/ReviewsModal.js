/* eslint-disable max-len */
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
//       <h1>Ratings</h1>
//       <h3>Description goes here</h3>

//       <Modal>
//         This is inside the modal!
//       </Modal>
//     </div>
//   );

//   const rootElement = document.getElementById('root');
//   ReactDOM.render(<App />, rootElement);
// };
// export default ReviewsModal;

// import React from 'react';
// import ProductCardModal from './ProductCardModal';

// // import { useCart } from '../checkout-page/CartContext';
// /**
//  * @name ReviewsModal
//  * @description material-ui styling for Reviews modal
//  * @return component
//  */
// const ReviewsModal = ({ product, closeModal }) => {
//   console.log('This button has been clicked');
//   const closeTheModal = (e) => {
// eslint-disable-next-line max-len
//     if (e.target.className === 'reviewsModalBackground' || e.target.className === 'closeButton') {
//       closeModal(false);
//     }
//   };
//   return (
//     <div
//       className="reviewsModalBackground"
//       onClick={closeTheModal}
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
//               <div className="reviewsModal-title">{product.name}</div>
//               <div className="reviewsPrice">
//                 $
//                 {parseFloat(product.price).toFixed(2)}
//               </div>
//             </div>
//             <div className="row">
//               <div className="reviewsDescription">{product.description}</div>
//             </div>
//           </div>
//           <div className="reviewsModal-footer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewsModal;

import React from 'react';

/**
 * @name ProductCardModal
 * @description material-ui styling for product card modal
 * @return component
 */
const ReviewsModal = ({ product, closeModal }) => {
  console.log(product);

  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
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
            <div className="reviewsModalImg">
              <img src={product.imageSrc} alt={product.description} className="ModalImg" />
            </div>
            <button
              type="button"
              className="reviewscloseButton"
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
                  First Edit
                  <div className="reviewsPrimaryColor" style={{ backgroundColor: product.primaryColorCode }} />
                </div>
                <div className="reviewsSecondary">
                  change this too
                  <div className="reviewsSecondaryColor" style={{ backgroundColor: product.secondaryColorCode }} />
                </div>

              </div>
            </div>
            <div className="row">
              <div className="reviewsCategory">{product.category}</div>
              <div className="reviewsType">{product.type}</div>
            </div>
          </div>
          <div className="reviewsModal-footer" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
