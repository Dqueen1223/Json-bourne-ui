import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import fetchProducts from '../product-page/ProductPageService';
import styles from './MaintenancePage.css';
import Constants from '../../utils/constants';

const MaintenancePage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  return (
    <div className="Maintenance">
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
     <table className="Product">
        {products.map((product) => (
          <>
            <th>product</th>
            <tr key={product.id} className="Product">
              {Object.values(product).map((val) => (
                <td className="Product">{val}</td>
             ))}
            </tr>

          </>
        ))}
      </table>
    </div>
  );

};
export default MaintenancePage;
