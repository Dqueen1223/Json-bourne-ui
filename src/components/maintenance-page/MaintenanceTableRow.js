import React, { useState, useEffect } from 'react';
import validateCreateProductForm from '../create-product/forms/FormValidation';
import UpdateProducts from './MaintenancePageUpdateService';
import { checkForPurchases } from './MaintenancePageDeleteService';
import './MaintenancePage.css';
import fetchProducts from './MaintenancePageService';
import EditRow from './MaintenanceEditTableRow';
import ViewRow from './MaintenanceViewTableRow';

const MaintenanceTableRow = (
  {
    product, setDeletedProduct, deleteButton, editable, setEditable, setProducts
  }
) => {
  const [releaseEditable, setReleaseEditiable] = useState('false');
  const [errors, setErrors] = useState({});
  const [displayErrors, setDisplayErrors] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [setApiError] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [hasPurchases, setHasPurchases] = useState(null);

  const checkReleaseDate = () => {
    const today = new Date();
    const releaseDate = new Date(product.releaseDate);
    if (releaseDate.getTime() > today.getTime()) {
      setReleaseEditiable(null);
      setReleaseEditiable('true');
    }
  };
  const updateProduct = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.id]: e.target.innerText });
  };
  const updatedProductDropdown = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (displayModal) {
      checkForPurchases(product, setHasPurchases, setApiError);

      setDisplayModal(false);
    }
  }, [displayModal, product, setApiError]);

  useEffect(() => {
    if (hasPurchases !== null) {
      if (hasPurchases) {
        setDeleteModalIsOpen(true);
      } else {
        setConfirmModal(true);
      }
      setHasPurchases(null);
    }
  }, [hasPurchases]);

  const clickEditMaitenance = () => {
    setErrors({});
    checkReleaseDate();
    setReleaseEditiable('false');
    setEditable(product.id);
    checkReleaseDate(product);
    setUpdatedProduct(product);
  };

  const cancelEditing = () => {
    setEditable(null);
    setErrors({});
  };

  const errorRow = () => (
    <tr id="errors">
      <td />
      <td />
      <td />
      <td>{errors.name}</td>
      <td>{errors.sku}</td>
      <td>{errors.description}</td>
      <td>{errors.demographic}</td>
      <td>{errors.category}</td>
      <td>{errors.type}</td>
      <td>{errors.releaseDate}</td>
      <td>{errors.primaryColorCode}</td>
      <td>{errors.secondaryColorCode}</td>
      <td>{errors.styleNumber}</td>
      <td>{errors.globalProductCode}</td>
      <td>{errors.active}</td>
      <td>{errors.brand}</td>
      <td>{errors.imageSrc}</td>
      <td>{errors.material}</td>
      <td>{errors.price}</td>
      <td>{errors.quantity}</td>
    </tr>
  );
  const submitEdit = async () => {
    setDisplayErrors(null);
    if (updatedProduct.active === 'true') {
      updatedProduct.active = true;
    } else { updatedProduct.active = false; }
    const idList = Object.keys(updatedProduct);
    const errorList = validateCreateProductForm(updatedProduct, idList);
    if (
      !updatedProduct.releaseDate.slice(0, 10).match(
        /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
      )
    ) {
      errorList.releaseDate = 'Release Date must match the format of YYYY-MM-DD';
    }
    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorList[id]) {
        errors[id] = errorList[id];
      }
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      await UpdateProducts(updatedProduct);
      setEditable(null);
      fetchProducts(setProducts, setApiError);
    } else {
      setDisplayErrors([product.id]);
    }
  };

  // const viewRow = () => (
  //   <tr key={product.id} className="ProductCells">
  //     <td className="ProductCells">
  //       {deleteModalIsOpen && reactDom.createPortal(
  //         <MaintenanceDeleteModal
  //           product={product}
  //           closeModal={setDeleteModalIsOpen}
  //         />,
  //         document.getElementById('root')
  //       )}
  //       {confirmModal && reactDom.createPortal(
  //         <MaintenanceDeleteConfirmModal
  //           product={product}
  //           closeModal={setConfirmModal}
  //           setDeletedProduct={setDeletedProduct}
  //         />,
  //         document.getElementById('root')
  //       )}
  //       {!deleteButton.includes(product.id)

  //       && (
  //       <button
  //         type="button"
  //         onClick={() => {
  //           setDisplayModal(true);
  //         }}
  //         className="deleteButton"
  //       >
  //         <Delete />

  //       </button>
  //       )}
  //     </td>
  //     <td className="ProductCells">
  //       <span>
  //         <button
  //           type="button"
  //           onClick={(e) => clickEditMaitenance(e, product)}
  //           className="editbutton"
  //         >
  //           <FaPencilAlt className="editIcon" alt="editIcon" />
  //         </button>
  //       </span>
  //     </td>
  //     <td className="ProductCells">{product.id}</td>
  //     <td className="ProductCells">{product.name}</td>
  //     <td className="ProductCells">{product.sku}</td>
  //     <td className="ProductCells">{product.description}</td>
  //     <td className="ProductCells">{product.demographic}</td>
  //     <td className="ProductCells">{product.category}</td>
  //     <td className="ProductCells">{product.type}</td>
  //     <td className="ProductCells">{product.releaseDate.slice(0, 10)}</td>
  //     <td className="ProductCells">{product.primaryColorCode}</td>
  //     <td className="ProductCells">{product.secondaryColorCode}</td>
  //     <td className="ProductCells">{product.styleNumber}</td>
  //     <td className="ProductCells">{product.globalProductCode}</td>
  //     <td className="ProductCells">{String(product.active)}</td>
  //     <td className="ProductCells">{product.brand}</td>
  //     <td className="ProductCells">{product.imageSrc}</td>
  //     <td className="ProductCells">{product.material}</td>
  //     <td className="ProductCells">{product.price.toFixed(2)}</td>
  //     <td className="ProductCells">{product.quantity}</td>
  //   </tr>
  // );

  const bothRows = () => (
    <>
      <EditRow
        product={product}
        setDeletedProduct={setDeletedProduct}
        deleteButton={deleteButton}
        setErrors={setErrors}
        errors={errors}
        setDeleteModalIsOpen={setDeleteModalIsOpen}
        deleteModalIsOpen={deleteModalIsOpen}
        setConfirmModal={setConfirmModal}
        confirmModal={confirmModal}
        setDisplayModal={setDisplayModal}
        submitEdit={submitEdit}
        cancelEditing={cancelEditing}
        updateProduct={updateProduct}
        updatedProductDropdown={updatedProductDropdown}
        releaseEditable={releaseEditable}
        displayErrors={displayErrors}
        setDisplayErrors={setDisplayErrors}
      />
      {Object.entries(errors).length > 0 ? errorRow() : null}
    </>
  );

  return (
    <>
      <>
        {editable === product.id || displayErrors === product.id
          ? bothRows(product)
          : (
            <ViewRow
              product={product}
              setDeletedProduct={setDeletedProduct}
              deleteButton={deleteButton}
              setDeleteModalIsOpen={setDeleteModalIsOpen}
              deleteModalIsOpen={deleteModalIsOpen}
              setConfirmModal={setConfirmModal}
              confirmModal={confirmModal}
              setDisplayModal={setDisplayModal}
              clickEditMaitenance={clickEditMaitenance}
            />
          )}
      </>
    </>
  );
};

export default MaintenanceTableRow;
