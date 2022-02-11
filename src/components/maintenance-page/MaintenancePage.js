/* eslint-disable import/no-duplicates */
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
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Editable, setEditable] = useState(null);

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  // eslint-disable-next-line no-shadow
  const UpdateProducts = async (Product, setApiError) => {
    await HttpHelper(Constants.PRODUCTS_ENDPOINT, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // Authorization: `Bearer${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(Product)
    })
      .then((response) => {
        if (response.ok) {
          console.log(response.json);
          return response.json();
        }
        console.log(Constants.API_ERROR);
        throw new Error(Constants.API_ERROR);
      })
      .then(Product);
    console.log(Product).catch(() => {
      setApiError(true);
    });
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
    UpdateProducts(product);
    console.log('Product has atempted an update');
  };
  const editRow = (product) => (
    <tr key={product.id} className="ProductCells">
      <td className="ProductCells editButton">
        <button type="button" onClick={(e) => submitEdit(e, product)}>
          Confirm
        </button>
        <button type="button" onClick={(e) => cancelEditing(e)}>
          Cancel
        </button>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td className="ProductCells" contentEditable="true">
        {product.name}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.sku}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.demographic}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.description}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.category}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.type}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.releaseDate}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.primaryColorCode}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.secondaryColorCode}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.styleNumber}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.globalProductCode}
      </td>
      <td className="ProductCells" contentEditable="true">
        {String(product.active)}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.brand}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.imageSrc}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.material}
      </td>
      <td className="ProductCells" contentEditable="true">
        {product.price.toFixed(2)}
      </td>
      <td className="ProductCells" contentEditable="true">
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
            icon="editButton"
          >
            <FaPencilAlt className="editButton" alt="editButton" />
          </button>
        </span>
      </td>
      <td className="ProductCells">{product.id}</td>
      <td className="ProductCells">{product.name}</td>
      <td className="ProductCells">{product.sku}</td>
      <td className="ProductCells">{product.demographic}</td>
      <td className="ProductCells">{product.description}</td>
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
