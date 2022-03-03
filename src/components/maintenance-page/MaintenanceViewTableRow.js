import React from 'react';
import reactDom from 'react-dom';
import { FaPencilAlt } from 'react-icons/fa';
import Delete from '@material-ui/icons/Delete';
import MaintenanceDeleteModal, { MaintenanceDeleteConfirmModal } from './MaintenanceDeleteModal';
import './MaintenancePage.css';

const ViewRow = ({
  product,
  setDeletedProduct,
  deleteButton,
  setDeleteModalIsOpen,
  deleteModalIsOpen,
  setConfirmModal,
  confirmModal,
  setDisplayModal,
  clickEditMaitenance
}) => (
  <>
    <tr key={product.id} className="ProductCells">
      <td className="ProductCells">
        {deleteModalIsOpen
          && reactDom.createPortal(
            <MaintenanceDeleteModal
              product={product}
              closeModal={setDeleteModalIsOpen}
            />,
            document.getElementById('root')
          )}
        {confirmModal
          && reactDom.createPortal(
            <MaintenanceDeleteConfirmModal
              product={product}
              closeModal={setConfirmModal}
              setDeletedProduct={setDeletedProduct}
            />,
            document.getElementById('root')
          )}
        {!deleteButton.includes(product.id) && (
          <button
            type="button"
            onClick={() => {
              setDisplayModal(true);
            }}
            className="deleteButton"
          >
            <Delete />
          </button>
        )}
      </td>
      <td className="ProductCells">
        <span>
          <button
            type="button"
            onClick={(e) => clickEditMaitenance(e, product)}
            className="editbutton"
            name="edit"
          >
            <FaPencilAlt className="editIcon" alt="editIcon" />
          </button>
        </span>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td className="ProductCells">{product.name}</td>
      <td className="ProductCells">{product.sku}</td>
      <td className="ProductCells">{product.description}</td>
      <td id="demographicView">{product.demographic}</td>
      <td className="ProductCells">{product.category}</td>
      <td className="ProductCells">{product.type}</td>
      <td className="ProductCells">{product.releaseDate.slice(0, 10)}</td>
      <td className="ProductCells">{product.primaryColorCode}</td>
      <td className="ProductCells">{product.secondaryColorCode}</td>
      <td className="ProductCells">{product.styleNumber}</td>
      <td className="ProductCells">{product.globalProductCode}</td>
      <td id="activeView">{String(product.active)}</td>
      <td className="ProductCells">{product.brand}</td>
      <td className="ProductCells">{product.imageSrc}</td>
      <td className="ProductCells">{product.material}</td>
      <td className="ProductCells">{product.price.toFixed(2)}</td>
      <td className="ProductCells">{product.quantity}</td>
    </tr>
  </>
);
export default ViewRow;
