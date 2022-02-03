// import React from 'react';
// import './ReviewsModal.css';

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
import React, { useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const ReviewsModal = () => {
  const Modal = ({ children, activator }) => {
    const [show, setShow] = useState(false);

    const content = (
      <div className="overlay">
        <div className="modal">
          <button
            className="modal-close"
            type="button"
            onClick={() => setShow(false)}
          >
            X
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );

    return (
      <>
        {activator({ setShow })}
        {createPortal(
          <CSSTransition
            in={show}
            timeout={120}
            classNames="modal-transition"
            unmountOnExit
          >
            {() => <div>{content}</div>}
          </CSSTransition>,
          document.body
        )}
      </>
    );
  };

  const App = () => (
    <div>
      <h1>React Modal</h1>
      <h3>with useState</h3>

      <Modal
        activator={({ setShow }) => (
          <button type="button" onClick={() => setShow(true)}>
            Show Modal
          </button>
        )}
      >
        This is inside the modal!
      </Modal>
    </div>
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);
};
export default ReviewsModal;
