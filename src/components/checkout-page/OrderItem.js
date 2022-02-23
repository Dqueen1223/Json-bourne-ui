import React from 'react';
import styles from './OrderItem.module.css';
import { toPrice } from './ReviewOrderWidgetService';

/**
 * @name OrderItem
 * @description Displays an order row
 * @return component
 */
const OrderItem = ({
  price, title, description, quantity, image
}) => (
  <div className={styles.orderItem}>
    <div className={styles.image}>
      <img src={image} alt="product" className={styles.imageSrc} />
    </div>
    <div className={styles.item}>
      <p className={styles.itemTitle}>{title}</p>
      <p>{description}</p>
      <p>{`Qty: ${quantity}`}</p>
    </div>
    <div className={styles.price}>
      <p>{toPrice(quantity * price)}</p>
    </div>
  </div>
);

export default OrderItem;
