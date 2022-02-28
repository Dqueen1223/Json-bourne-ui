import React from 'react';
import './ConfirmDelete.css';

const ConfirmDelete = ({ setConfirmDelete, setDeleteConfirmationModal }) => {
  const deleteProduct = () => {
    setConfirmDelete(true);
    setDeleteConfirmationModal(false);
  };
  const closeModal = () => {
    setDeleteConfirmationModal(false);
  };
  return (
    <div className="deleteModalBackground" onClick={closeModal} aria-hidden="true">
      <div className="deleteModalContent">
        <div className="closeDeleteModalButton">
          &times;
        </div>
        <div className="deleteModalTitle">
          Are you sure you want to remove this from your cart?
        </div>
        <div className="deleteModalButtons">
          <button onClick={deleteProduct} className="deleteModalConfirm" type="button">Confirm</button>
          <button onClick={closeModal} className="deleteModalCancel" type="button">Cancel</button>
        </div>
      </div>

    </div>

  );
};
export default ConfirmDelete;
