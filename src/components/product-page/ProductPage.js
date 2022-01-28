import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ProductCard from '../product-card/ProductCard';
import styles from './ProductPage.module.css';
import Constants from '../../utils/constants';
import fetchProducts from './ProductPageService';
import FilterMenu from './filter-menu/FilterMenu';

/**
 * @name ProductPage
 * @description fetches products from API and displays products as product cards
 * @return component
 */
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchProducts(setProducts, setApiError, filter);
  }, [filter]);

  const toggleFilterMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.productPageContainer}>
      <div className="productPage" />
      <div>
        {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
        <IconButton
          style={isActive ? {
            position: 'fixed', height: '10px', width: '10px', top: '150px', left: '135px', zIndex: '1', backgroundColor: '#fb8122', border: '.5px solid white', color: '#e1e2e2', transition: '500ms'
          } : {
            position: 'fixed', height: '10px', width: '10px', top: '150px', left: '-5px', zIndex: '1', backgroundColor: '#fb8122', border: '.5px solid white', color: '#e1e2e2', transition: '500ms'
          }}
          aria-label="arrow-right"
          onClick={toggleFilterMenu}
        >
          {isActive && <ArrowBack />}
          {!isActive && <ArrowForward />}
        </IconButton>
        <FilterMenu setFilter={setFilter} isActive={isActive} />
      </div>
      <div className={isActive ? styles.addLeftMargin : styles.app}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
