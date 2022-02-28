import React, { useState } from 'react';
import reactDom from 'react-dom';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';
import Delete from '@material-ui/icons/Delete';
import validateCreateProductForm from '../create-product/forms/FormValidation';
import UpdateProducts from './MaintenancePageUpdateService';
import GenerateErrorMessages from './MaintenancePageGenerateErrors';
import MaintenanceDeleteModal, { MaintenanceDeleteConfirmModal } from './MaintenanceDeleteModal';

const MaintenanceTableRow = ({ product, setDeletedProduct, deleteButton }) => {
  const [editable, setEditable] = useState(null);
  const [previousProduct, setPreviousProduct] = useState({});
  const [releaseEditable, setReleaseEdtiable] = useState('false');
  const [errors, setErrors] = useState({});
  const [setApiError] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(null);
  const [confirmModal, setConfirmModal] = useState(null);

  const resetToDefaultTableData = () => {
    if (document.getElementById('errors')) {
      document.getElementById('errors').remove();
    }
    document.getElementById('name').innerHTML = product.name;
    document.getElementById('sku').innerHTML = product.sku;
    document.getElementById('description').innerHTML = product.description;
    document.getElementById('demographic').innerHTML = product.demographic;
    document.getElementById('category').innerHTML = product.category;
    document.getElementById('type').innerHTML = product.type;
    document.getElementById('releaseDate').innerHTML = product.releaseDate;
    document.getElementById('primaryColorCode').innerHTML = product.primaryColorCode;
    document.getElementById('secondaryColorCode').innerHTML = product.secondaryColorCode;
    document.getElementById('styleNumber').innerHTML = product.styleNumber;
    document.getElementById('globalProductCode').innerHTML = product.globalProductCode;
    document.getElementById('active').innerHTML = product.active;
    document.getElementById('brand').innerHTML = product.brand;
    document.getElementById('imageSrc').innerHTML = product.imageSrc;
    document.getElementById('price').innerHTML = product.price;
    document.getElementById('material').innerHTML = product.material;
    document.getElementById('quantity').innerHTML = product.quantity;
  };
  const clickEditMaitenance = (e) => {
    e.preventDefault();
    if (editable != null) {
      resetToDefaultTableData(previousProduct);
    }
    setReleaseEdtiable('false');
    setPreviousProduct(product);
    setEditable(product.id);
    const today = new Date();
    const releaseDate = new Date(
      product.releaseDate
    );
    if (releaseDate.getTime() > today.getTime()) {
      setReleaseEdtiable(null);
      setReleaseEdtiable('true');
    }
  };
  const cancelEditing = (e) => {
    e.preventDefault();
    resetToDefaultTableData(product);
    setEditable(null);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    if (document.getElementById('errors')) {
      document.getElementById('errors').remove();
    }
    const name = document.getElementById('name');
    const sku = document.getElementById('sku');
    const description = document.getElementById('description');
    const demographic = document.getElementById('demographic');
    const category = document.getElementById('category');
    const type = document.getElementById('type');
    const releaseDate = document.getElementById('releaseDate');
    const primaryColorCode = document.getElementById('primaryColorCode');
    const secondaryColorCode = document.getElementById('secondaryColorCode');
    const styleNumber = document.getElementById('styleNumber');
    const globalProductCode = document.getElementById('globalProductCode');
    let active = document.getElementById('active');
    const brand = document.getElementById('brand');
    const imageSrc = document.getElementById('imageSrc');
    const price = document.getElementById('price');
    const material = document.getElementById('material');
    const quantity = document.getElementById('quantity');

    const submitedProduct = {
      id: product.id,
      name: name.innerHTML,
      sku: sku.innerHTML,
      description: description.innerHTML,
      demographic: demographic.innerHTML,
      category: category.innerHTML,
      type: type.innerHTML,
      releaseDate: releaseDate.innerHTML,
      primaryColorCode: primaryColorCode.innerHTML,
      secondaryColorCode: secondaryColorCode.innerHTML,
      styleNumber: styleNumber.innerHTML,
      globalProductCode: globalProductCode.innerHTML,
      active: active.innerHTML,
      brand: brand.innerHTML,
      imageSrc: imageSrc.innerHTML,
      material: material.innerHTML,
      price: price.innerHTML,
      quantity: quantity.innerHTML
    };
    const idList = Object.keys(submitedProduct);
    const errorList = validateCreateProductForm(submitedProduct, idList);
    if (
      !releaseDate.innerHTML.match(
        /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T\d{2}:\d{2}:\d{2}(\.\d{3})?$/
      )
    ) {
      errorList.releaseDate = 'Release Date must match the format of YYYY-MM-DDT00:00:00';
    }
    if (active.innerHTML === 'true' || active.innerHTML === 'false');
    else {
      errorList.active = 'Activity must be true of false';
    }
    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorList[id]) {
        errors[id] = errorList[id];
      }
    }

    setErrors(errors);
    if (active.innerHTML === 'true') {
      active = true;
    } if (active.innerHTML === 'false') {
      active = false;
    }
    const newProduct = {
      id: product.id,
      name: name.innerHTML,
      sku: sku.innerHTML,
      description: description.innerHTML,
      demographic: demographic.innerHTML,
      category: category.innerHTML,
      type: type.innerHTML,
      releaseDate: releaseDate.innerHTML,
      primaryColorCode: primaryColorCode.innerHTML,
      secondaryColorCode: secondaryColorCode.innerHTML,
      styleNumber: styleNumber.innerHTML,
      globalProductCode: globalProductCode.innerHTML,
      active,
      brand: brand.innerHTML,
      imageSrc: imageSrc.innerHTML,
      material: material.innerHTML,
      price: Number(price.innerHTML),
      quantity: Number(quantity.innerHTML)
    };
    if (Object.keys(errors).length === 0) {
      UpdateProducts(newProduct, setApiError);
      setEditable(null);
      setErrors(errors);
    } else GenerateErrorMessages(errors);
    setErrors({});
  };
  const editRow = () => (
    <>
      <tr key={product.id} className="ProductCells" id="editable">
        <td className="ProductCells">
          <button
            type="submit"
            onClick={(e) => submitEdit(e, product)}
            className="Confirm"
            id="checkButton"
          >
            <FaCheck id="check" />
          </button>
          <button
            type="button"
            onClick={(e) => cancelEditing(e, product)}
            className="Cancel"
            id="X"
          >
            X
          </button>
        </td>
        <td className="ProductCells">{product.id}</td>
        <td className="ProductCells" contentEditable="true" id="name">
          {product.name}
        </td>
        <td className="ProductCells" contentEditable="true" id="sku">
          {product.sku}
        </td>
        <td className="ProductCells" contentEditable="true" id="description">
          {product.description}
        </td>
        <td className="ProductCells" contentEditable="true" id="demographic">
          {product.demographic}
        </td>
        <td className="ProductCells" contentEditable="true" id="category">
          {product.category}
        </td>
        <td className="ProductCells" contentEditable="true" id="type">
          {product.type}
        </td>
        <td
          className="ProductCells"
          contentEditable={releaseEditable}
          id="releaseDate"
        >
          {product.releaseDate}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="primaryColorCode"
        >
          {product.primaryColorCode}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="secondaryColorCode"
        >
          {product.secondaryColorCode}
        </td>
        <td className="ProductCells" contentEditable="true" id="styleNumber">
          {product.styleNumber}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="globalProductCode"
        >
          {product.globalProductCode}
        </td>
        <td className="ProductCells" contentEditable="true" id="active">
          {product.active.toString()}
        </td>
        <td className="ProductCells" contentEditable="true" id="brand">
          {product.brand}
        </td>
        <td className="ProductCells" contentEditable="true" id="imageSrc">
          {product.imageSrc}
        </td>
        <td className="ProductCells" contentEditable="true" id="material">
          {product.material}
        </td>
        <td className="ProductCells" contentEditable="true" id="price">
          {product.price.toFixed(2)}
        </td>
        <td
          className="ProductCells"
          contentEditable="true"
          id="quantity"
          value={product.quantity}
        >
          {product.quantity}
        </td>
      </tr>
    </>
  );

  const viewRow = () => (
    <tr key={product.id} className="ProductCells">
      <td className="ProductCells">
        {deleteModalIsOpen && reactDom.createPortal(
          <MaintenanceDeleteModal
            product={product}
            closeModal={setDeleteModalIsOpen(product)}
          />,
          document.getElementById('root')
        )}
        {confirmModal && reactDom.createPortal(
          <MaintenanceDeleteConfirmModal
            product={product}
            closeModal={setConfirmModal}
          />,
          document.getElementById('root')
        )}
        {!deleteButton.includes(product.id)

        && (
        <button
          type="button"
          onClick={() => {
            setConfirmModal(product);
            setDeletedProduct(product);
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
          >
            <FaPencilAlt className="editIcon" alt="editIcon" />
          </button>
        </span>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td className="ProductCells">{product.name}</td>
      <td className="ProductCells">{product.sku}</td>
      <td className="ProductCells">{product.description}</td>
      <td className="ProductCells">{product.demographic}</td>
      <td className="ProductCells">{product.category}</td>
      <td className="ProductCells">{product.type}</td>
      <td className="ProductCells">{product.releaseDate}</td>
      <td className="ProductCells">{product.primaryColorCode}</td>
      <td className="ProductCells">{product.secondaryColorCode}</td>
      <td className="ProductCells">{product.styleNumber}</td>
      <td className="ProductCells">{product.globalProductCode}</td>
      <td className="ProductCells">{String(product.active)}</td>
      <td className="ProductCells">{product.brand}</td>
      <td className="ProductCells">{product.imageSrc}</td>
      <td className="ProductCells">{product.material}</td>
      <td className="ProductCells">{product.price.toFixed(2)}</td>
      <td className="ProductCells">{product.quantity}</td>
    </tr>
  );

  return (
    <>
      {editable === product.id
        ? editRow(product)
        : viewRow(product)}
    </>
  );
};

export default MaintenanceTableRow;
