import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import reactDom from 'react-dom';
import Delete from '@material-ui/icons/Delete';
import CreatePromo from '../create-promo/CreatePromoModal';
import fetchProducts from './MaintenancePageService';
import './MaintenancePage.css';
import styles from '../product-page/ProductPage.module.css';
import Constants from '../../utils/constants';
// eslint-disable-next-line import/named
import deleteProducts, { checkForReviews } from './MaintenancePageDeleteService';
import MaintenanceDeleteModal from './MaintenanceDeleteModal';

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
  const [deletedProduct, setDeletedProduct] = useState(products);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [activeReviews, setActiveReviews] = useState(reviews.filter(reviews.filter((r) =>
    (r.productId === product.id))));

  const deleteProduct = (product) => {
    deleteProducts(product, setApiError, setDeleteModalIsOpen);
  };

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, [deletedProduct]);

  const hideDelete = (product) => {
    const button = document.getElementsByClassName(deleteButton);
    checkForReviews(product, setDeleteButton);
    if (deleteButton.includes(product.id)) {
      button.style.visibility = 'hidden';
    } else {
      button.style.visibility = 'visible';
    }
  };

  return (
    <div className="Maintenance">
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}

      <div className="Buttons">
        <Link to="/maintenance/create">
          <button type="button" className="createButton">
            Create Product
          </button>
        </Link>
        {modalIsOpen && reactDom.createPortal(
          <CreatePromo className={classes.root} closeModal={setModalIsOpen} />,
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
            <tr>
              <th className="deleteS" />
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
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="ProductCells" onLoad={hideDelete}>
                <td className="ProductCells">
                  {deleteModalIsOpen && reactDom.createPortal(
                    <MaintenanceDeleteModal
                      product={product}
                      closeModal={setDeleteModalIsOpen}
                    />,
                    document.getElementById('root')
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      deleteProduct(product);
                      setDeletedProduct(products);
                    }}
                    className="deleteButton"
                    onLoad={() => {
                      hideDelete(product);
                    }}
                  >
                    <Delete />

                  </button>

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
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
export default MaintenancePage;
