import React from 'react';
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
  const calculateTotal = () => Number(getSubtotal(products).substring(1)) + shippingFee;
  return (
    <>
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
            { shippingFee.toFixed(2) }
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
