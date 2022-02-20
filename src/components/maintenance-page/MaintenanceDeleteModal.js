import React from 'react';
import './MaintenanceDeleteModal.css';

/**
 * @name MaintenanceDeleteModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const MaintenanceDeleteModal = ({ product, closeModal }) => {
  const closeTheModal = (e) => {
    if (e.target.className === 'maintenanceModalBackground' || e.target.className === 'maintenanceCloseButton') {
      closeModal(false);
    }
  };

  return (
    <div
      className="maintenanceModalBackground"
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className="maintenanceDeleteModal">
        <div className="maintenanceDeleteModal-content">

          <div className="maintenanceDeleteModal-header">
            <button
              type="button"
              className="maintenanceCloseButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="maintenanceModal-body">
            {product.name}
            {' has purchases associate with it, would you like to mark it inactive instead?'}
          </div>
          <div className="maintenanceModalButtons">
            <button type="button" className="maintenanceConfirmButton" onClick={handleInactive}>Yes</button>
            <button type="button" className="maintenanceNoButton" onClick={closeTheModal}>No</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDeleteModal;
