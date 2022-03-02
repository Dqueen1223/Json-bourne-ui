import React from 'react';
import './MaintenanceDeleteModal.css';
import deleteProducts from './MaintenancePageDeleteService';
import UpdateProducts from './MaintenancePageUpdateService';

/**
 * @name MaintenanceDeleteModal
 * @description material-ui styling for product card review modal
 * @return component
 */
export default function MaintenanceDeleteModal({ product, closeModal, setDeletedProduct }) {
  const closeTheModal = (e) => {
    if (e.target.className === 'maintenanceModalBackground' || e.target.className === 'maintenanceCloseButton' || e.target.className === 'maintenanceNoButton' || e.target.className === 'maintenanceConfirmButton') {
      closeModal(false);
    }
  };

  return (
    <div className="maintenanceModalBackground" onClick={closeTheModal} aria-hidden="true">
      <div className="maintenanceDeleteModal">
        <div className="maintenanceDeleteModal-content">
          <div className="maintenanceDeleteModal-header">
            <button type="button" className="maintenanceCloseButton" onClick={closeTheModal}>&times;</button>
          </div>
          <div className="maintenanceModal-body">
            {' '}
            {product.name}
            {' '}
            {' has purchases associate with it, would you like to mark it inactive instead?'}

            <div className="maintenanceModalButtons">
              <button
                type="button"
                className="maintenanceConfirmButton"
                onClick={(e) => {
                  const updatedProduct = {
                    id: product.id,
                    name: product.name,
                    sku: product.sku,
                    description: product.description,
                    demographic: product.demographic,
                    category: product.category,
                    type: product.type,
                    releaseDate: product.releaseDate,
                    primaryColorCode: product.primaryColorCode,
                    secondaryColorCode: product.secondaryColorCode,
                    styleNumber: product.styleNumber,
                    globalProductCode: product.globalProductCode,
                    active: false,
                    brand: product.brand,
                    imageSrc: product.imageSrc,
                    material: product.material,
                    price: product.price,
                    quantity: product.quantity
                  };
                  UpdateProducts(updatedProduct);
                  setDeletedProduct(product);
                  closeTheModal(e);
                }}
              >
                Yes
              </button>
              <button type="button" className="maintenanceNoButton" onClick={!closeTheModal}>No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MaintenanceDeleteConfirmModal({ product, closeModal, setDeletedProduct }) {
  const closeTheModal = (e) => {
    if (e.target.className === 'maintenanceModalBackground' || e.target.className === 'maintenanceCloseButton' || e.target.className === 'maintenanceNoButton' || e.target.className === 'maintenanceConfirmButton') {
      closeModal(false);
    }
  };

  return (
    <div className="maintenanceModalBackground" onClick={closeTheModal} aria-hidden="true">
      <div className="maintenanceDeleteModal">
        <div className="maintenanceDeleteModal-content">
          <div className="maintenanceDeleteModal-header">
            <button type="button" className="maintenanceCloseButton" onClick={closeTheModal}>&times;</button>
          </div>
          <div className="maintenanceModal-body">
            Are you sure you would like to delete this item? It can not be undone.
            <div className="maintenanceModalButtons">
              <button type="button" className="maintenanceConfirmButton" onClick={(e) => { deleteProducts(product); setDeletedProduct(product); closeTheModal(e); }}>Yes</button>
              <button type="button" className="maintenanceNoButton" onClick={closeTheModal}>No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
