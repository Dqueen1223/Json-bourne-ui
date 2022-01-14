import React, { useState, useEffect } from 'react';
//import { useTable } from 'react-table';
import fetchProducts from './MaintenancePageService';
//import { TableColumns } from './MaintenanceTableHelper';
import './MaintenancePage.css';
import styles from '../product-page/ProductPage.module.css'
import Constants from '../../utils/constants';

const MaintenancePage = () => {
  const [apiError, setApiError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  return (
    <div className="Maintenance">
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      
        
          <div className="ProductTable">
            <table className="Product">
                <thead>
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
              <tr key={product.id} className="Product">
                <td className="Product">{product.id}</td>
                <td className="Product">{product.name}</td>
                <td className="Product">{product.sku}</td>
                <td className="Product">{product.description}</td>
                <td className="Product">{product.demographic}</td>
                <td className="Product">{product.category}</td>
                <td className="Product">{product.type}</td>
                <td className="Product">{product.releaseDate}</td>
                <td className="Product">{product.primaryColorCode}</td>
                <td className="Product">{product.secondaryColorCode}</td>
                <td className="Product">{product.styleNumber}</td>
                <td className="Product">{product.globalProductCode}</td>
                <td className="Product">{product.active}</td>
                <td className="Product">{product.brand}</td>
                <td className="Product">{product.imageSrc}</td>
                <td className="Product">{product.material}</td>
                <td className="Product">{product.price.toFixed(2)}</td>
                <td className="Product">{product.quantity}</td>   
              </tr>
            ))}
          </tbody>
            </table>
        </div>
     
    </div>
  );
  
//const columns = useMemo(() => TableColumns, [])
//const data = useMemo(() => products, [])
//const table = useTable({ columns, data })
//const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = table
//return (
//    <div>
//       {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
//      <table {...getTableProps()}>
//        <thead>
//          {
//            headerGroups.map((headerGroup) => (
//              <tr {...headerGroup.getHeaderGroupProps()}>
//                {
//                  headerGroup.headers.map(column => (
//                    <th {...column.getHeaderProps}>{column.render('Header')}</th>
//                  ))
//                }            
//          </tr>
//            ))}
//        </thead>
//        <tbody {...getTableBodyProps()}>
//          {rows.map((row) => {
//              prepareRow(row)
//              return (
//                <tr {...row.getRowProps()}>
//                  {row.cells.map((cell) => {
//                    return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                    })}
//                </tr>
//              )
//            })}
//        </tbody>
//      </table>
//    </div>
//  )
};
export default MaintenancePage;
