/* eslint-disable no-unused-vars */
// import React, { useState, useEffect, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import reactDom from 'react-dom';
// import { FaPencilAlt } from 'react-icons/fa';
// import CreatePromo from '../create-promo/CreatePromoModal';
// import fetchProducts from './MaintenancePageService';
// import './MaintenancePage.css';
// import styles from '../product-page/ProductPage.module.css';
// import Constants from '../../utils/constants';
// import validateCreateProductForm from '../create-product/forms/FormValidation';
// import UpdateProducts from './MaintenancePageUpdateService';
// import GenerateErrorMessages from './MaintenancePageGenerateErrors';

// const editing = () => {
//   // const [Editable, setEditable] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [Editable, setEditable] = useState(null);

//   const cancelEditing = (e) => {
//     e.preventDefault();
//     setEditable(null);
//   };

//   const submitEdit = async (e, product) => {
//     e.preventDefault();
//     if (document.getElementById('errors')) {
//       document.getElementById('errors').remove();
//     }
//     const name = document.getElementById('name');
//     const sku = document.getElementById('sku');
//     const description = document.getElementById('description');
//     const demographic = document.getElementById('demographic');
//     const category = document.getElementById('category');
//     const type = document.getElementById('type');
//     const releaseDate = document.getElementById('releaseDate');
//     const primaryColorCode = document.getElementById('primaryColorCode');
//     const secondaryColorCode = document.getElementById('secondaryColorCode');
//     const styleNumber = document.getElementById('stylenumber');
//     const globalProductCode = document.getElementById('globalProductCode');
//     let active = document.getElementById('active');
//     const brand = document.getElementById('brand');
//     const imageSrc = document.getElementById('imageSrc');
//     const price = document.getElementById('price');
//     const material = document.getElementById('material');
//     const quantity = document.getElementById('quantity');

//     const submitedProduct = {
//       id: product.id,
//       name: name.innerHTML,
//       sku: sku.innerHTML,
//       description: description.innerHTML,
//       demographic: demographic.innerHTML,
//       category: category.innerHTML,
//       type: type.innerHTML,
//       releaseDate: releaseDate.innerHTML,
//       primaryColorCode: primaryColorCode.innerHTML,
//       secondaryColorCode: secondaryColorCode.innerHTML,
//       styleNumber: styleNumber.innerHTML,
//       globalProductCode: globalProductCode.innerHTML,
//       active: active.innerHTML,
//       brand: brand.innerHTML,
//       imageSrc: imageSrc.innerHTML,
//       material: material.innerHTML,
//       price: price.innerHTML,
//       quantity: quantity.innerHTML
//     };
//     const idList = Object.keys(submitedProduct);
//     const errorList = validateCreateProductForm(submitedProduct, idList);
//     for (let i = 0; i < idList.length; i += 1) {
//       const id = idList[i];
//       if (errorList[id]) {
//         errors[id] = errorList[id];
//       }
//     }
//     if (active === 'true') {
//       active = true;
//     } else active = false;
//     const newProduct = {
//       id: product.id,
//       name: name.innerHTML,
//       sku: sku.innerHTML,
//       description: description.innerHTML,
//       demographic: demographic.innerHTML,
//       category: category.innerHTML,
//       type: type.innerHTML,
//       releaseDate: releaseDate.innerHTML,
//       primaryColorCode: primaryColorCode.innerHTML,
//       secondaryColorCode: secondaryColorCode.innerHTML,
//       styleNumber: styleNumber.innerHTML,
//       globalProductCode: globalProductCode.innerHTML,
//       active,
//       brand: brand.innerHTML,
//       imageSrc: imageSrc.innerHTML,
//       material: material.innerHTML,
//       price: Number(price.innerHTML),
//       quantity: Number(quantity.innerHTML)
//     };
//     setErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       UpdateProducts(newProduct, setApiError);
//       setErrors(errors);
//       setEditable(null);
//     } else GenerateErrorMessages(errors);
//   };
//   const editRow = (product) => (
//     <tr key={product.id} className="ProductCells" id="editable">
//       <td className="ProductCells">
//         <button
//           type="submit"
//           onClick={(e) => submitEdit(e, product)}
//           className="Confirm"
//         >
//           Confirm
//         </button>
//         <button
//           type="button"
//           onClick={(e) => cancelEditing(e)}
//           className="Cancel"
//         >
//           Cancel
//         </button>
//       </td>
//       <td className="ProductCells">{product.id}</td>
//       <td className="ProductCells" contentEditable="true" id="name">
//         {product.name}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="sku">
//         {product.sku}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="description">
//         {product.description}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="demographic">
//         {product.demographic}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="category">
//         {product.category}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="type">
//         {product.type}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="releaseDate">
//         {product.releaseDate}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="primaryColorCode">
//         {product.primaryColorCode}
//       </td>
//       <td
//         className="ProductCells"
//         contentEditable="true"
//         id="secondaryColorCode"
//       >
//         {product.secondaryColorCode}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="styleNumber">
//         {product.styleNumber}
//       </td>
//       <td
//         className="ProductCells"
//         contentEditable="true"
//         id="globalProductCode"
//       >
//         {product.globalProductCode}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="active">
//         {String(product.active)}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="brand">
//         {product.brand}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="imageSrc">
//         {product.imageSrc}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="material">
//         {product.material}
//       </td>
//       <td className="ProductCells" contentEditable="true" id="price">
//         {product.price.toFixed(2)}
//       </td>
//       <td
//         className="ProductCells"
//         contentEditable="true"
//         id="quantity"
//         value={product.quantity}
//       >
//         {product.quantity}
//       </td>
//     </tr>
//   );
// };
