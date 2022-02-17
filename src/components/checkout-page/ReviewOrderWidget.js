import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import { getSubtotal } from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import cartLogic from './cartLogic';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = ({ shippingFee }) => {
  const {
    state: { products }
  } = useCart();
  cartLogic();
  const calculateTotal = () => (Number(getSubtotal(products).substring(1))
    + Number(shippingFee)).toFixed(2);
  return (
    <>
      {products.length === 0
        && (
        <div className="returnProductDiv">
          <p>You have no products in your cart</p>
          <Link to="/" className={styles.returnProductLink}>
            Click here to continue shopping
          </Link>
        </div>
        )}
      {products.map(({
        price, title, description, quantity
      }) => (
        <OrderItem
          key={title}
          price={price}
          title={title}
          description={description}
          quantity={quantity}
        />
      ))}
      <hr />
      <div className={styles.subtotal}>
        <div>
          <p>Subtotal</p>
        </div>
        <div className={styles.price}>
          <p>{getSubtotal(products) }</p>
        </div>
        <div>
          <p>
            Shipping Fee
          </p>
        </div>
        <div className={styles.price}>
          <p>
            $
            { shippingFee }
          </p>
        </div>
        <div>
          <p>Total</p>
        </div>
        <div className={styles.price}>
          <p>
            $
            {calculateTotal()}
          </p>

        </div>
      </div>
    </>
  );
};
export default ReviewOrderWidget;
