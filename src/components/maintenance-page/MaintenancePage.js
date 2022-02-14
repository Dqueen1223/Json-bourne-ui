/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import reactDom from 'react-dom';
import { FaPencilAlt } from 'react-icons/fa';
import HttpHelper from '../../utils/HttpHelper';
import CreatePromo from '../create-promo/CreatePromoModal';
import fetchProducts from './MaintenancePageService';
import './MaintenancePage.css';
import styles from '../product-page/ProductPage.module.css';
import Constants from '../../utils/constants';
import validateCreateProductForm from '../create-product/forms/FormValidation';
import UpdateProducts from './MaintenancePageUpdateService';

/**
 * @name useStyles
 * @description Material-ui styling for ProductCard component
 * @return styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));
/**
 * @name MaintenancePage
 * @description  basic maintenance page with table of products from database
 * @returns component
 */
const MaintenancePage = () => {
  const classes = useStyles();
  const [apiError, setApiError] = useState(false);
  const [updateProduct, setProductData] = useState({});
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Editable, setEditable] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  const onProductChange = (e) => {
    setProductData({ ...updateProduct, [e.target.id]: e.target.value });
    // setErrors({});
  };
  const clickEditMaitenance = (e, product) => {
    e.preventDefault();
    setEditable(product.id);
  };
  const cancelEditing = (e) => {
    e.preventDefault();
    setEditable(null);
  };
  const submitEdit = (e, product) => {
    e.preventDefault();
    UpdateProducts(product, setApiError);
    // const product = updateProduct;
    const idList = Object.keys(product);
    const errorList = validateCreateProductForm(product, idList);
    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorList[id]) {
        errors[id] = errorList[id];
      }
    }
    if (errors > 0) {
      console.log('works');
    }
    setErrors(errors);
    console.log('Product has attempted an update');
  };
  const editRow = (product) => (
    <tr key={product.id} className="ProductCells">
      <td className="ProductCells">
        <button
          type="submit"
          onClick={(e) => submitEdit(e, product)}
          className="Confirm"
        >
          Confirm
        </button>
        <button
          type="button"
          onClick={(e) => cancelEditing(e)}
          className="Cancel"
        >
          Cancel
        </button>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="name"
        onProductChange={onProductChange}
      >
        {product.name}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="sku"
        onChange={onProductChange}
      >
        {product.sku}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="description"
        onChange={onProductChange}
      >
        {product.description}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="demographic"
        onChange={onProductChange}
      >
        {product.demographic}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="category"
        onChange={onProductChange}
      >
        {product.category}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="type"
        onChange={onProductChange}
      >
        {product.type}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="releaseDate"
        onChange={onProductChange}
      >
        {product.releaseDate}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="primaryColorCode"
        onChange={onProductChange}
      >
        {product.primaryColorCode}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="secondaryColorCode"
        onChange={onProductChange}
      >
        {product.secondaryColorCode}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="styleNumber"
        onChange={onProductChange}
      >
        {product.styleNumber}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="globalProductCode"
        onChange={onProductChange}
      >
        {product.globalProductCode}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="active"
        onChange={onProductChange}
      >
        {String(product.active)}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="brand"
        onChange={onProductChange}
      >
        {product.brand}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="imageSrc"
        onChange={onProductChange}
      >
        {product.imageSrc}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="material"
        onChange={onProductChange}
      >
        {product.material}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="price"
        value={product.price.toFixed(2)}
        onChange={onProductChange}
      >
        {product.price.toFixed(2)}
      </td>
      <td
        className="ProductCells"
        contentEditable="true"
        id="quantity"
        value={product.quantity}
        onChange={onProductChange}
      >
        {product.quantity}
      </td>
    </tr>
  );
  const readOnlyRow = (product) => (
    <tr key={product.id} className="ProductCells">
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
    <div className="Maintenance">
      {apiError && (
        <p className={styles.errMsg} data-testid="errMsg">
          {Constants.API_ERROR}
        </p>
      )}

      <div className="Buttons">
        <Link to="/maintenance/create">
          <button type="button" className="createButton">
            Create Product
          </button>
        </Link>
        {modalIsOpen
          && reactDom.createPortal(
            <CreatePromo
              className={classes.root}
              closeModal={setModalIsOpen}
            />,
            document.getElementById('root')
          )}
        <button
          type="button"
          className="promoButton"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Create Promotion
        </button>
      </div>
      <div className="ProductTable">
        <table className="Product">
          <thead>
            <th>Edit</th>
            <th>Id</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Description</th>
            <th>Demographic</th>
            <th>Category</th>
            <th>Type</th>
            <th>Release Date</th>
            <th>Primary Color</th>
            <th>Secondary Color</th>
            <th>Style Number</th>
            <th>Global Product Code</th>
            <th>Active</th>
            <th>Brand</th>
            <th>Image Source</th>
            <th>Material</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            {products.map((product) => (
              <>
                {Editable === product.id
                  ? editRow(product)
                  : readOnlyRow(product)}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MaintenancePage;
