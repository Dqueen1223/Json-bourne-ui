import React from 'react';
import FormItem from '../form/FormItem';
import FormItemDropdown from '../form/FormItemDropdown';
import FormItemDateTime from '../form/FormItemDateTime';
import FormItemTextArea from '../form/FormItemTextArea';
import styles from './CreateProduct.module.css';

const ProductForm = ({
  product, date, onChange, onProductChange
}) => {
  const demographicList = ['Men', 'Women', 'Kids'];
  let activeProduct = ['Active', 'Inactive'];

  if (date > new Date()) activeProduct = ['Inactive'];

  return (
    <>
      <div className={styles.createProductDetails}>
        <FormItem
          id="imageSrc"
          label="Image Source"
          onChange={onProductChange}
          value={product.imageSrc}
        />
        <FormItem
          id="name"
          label="Name"
          onChange={onProductChange}
          value={product.name}
        />
        <FormItem
          id="brand"
          label="Brand"
          onChange={onProductChange}
          value={product.brand}
        />
        <FormItem
          id="quantity"
          label="Quantity"
          onChange={onProductChange}
          value={product.quantity}
        />
        <FormItem
          id="price"
          label="Price"
          onChange={onProductChange}
          value={product.price}
        />
        <FormItem
          id="styleNumber"
          label="Style Number"
          onChange={onProductChange}
          value={product.styleNumber}
        />
        <FormItemTextArea
          id="description"
          label="Description"
          onChange={onProductChange}
          value={product.description}
        />
      </div>
      <div className={styles.createProductTypes}>
        <FormItemDropdown
          id="demographic"
          label="Demographic"
          options={demographicList}
          onChange={onProductChange}
          value={product.demographic}
        />
        <FormItem
          id="type"
          label="Type"
          onChange={onProductChange}
          value={product.type}
        />
        <FormItem
          id="category"
          label="Category"
          onChange={onProductChange}
          value={product.category}
        />
        <FormItem
          id="primaryColorCode"
          label="PrimaryColorCode"
          onChange={onProductChange}
          value={product.primaryColorCode}
        />
        <FormItem
          id="secondaryColorCode"
          label="SecondaryColorCode"
          onChange={onProductChange}
          value={product.secondaryColorCode}
        />
      </div>
      <div className={styles.createProductControl}>
        <FormItem
          id="material"
          label="Material"
          onChange={onProductChange}
          value={product.material}
        />
        <FormItem
          id="sku"
          label="SKU"
          onChange={onProductChange}
          value={product.sku}
        />
        <FormItem
          id="globalProductCode"
          label="Global Product Code"
          onChange={onProductChange}
          value={product.globalProductCode}
        />
        <FormItemDropdown
          id="isActive"
          label="Active"
          options={activeProduct}
          onChange={onProductChange}
          value={activeProduct}
        />
        <FormItemDateTime
          id="releaseDate"
          className={styles.calendar}
          label="Release Date"
          onChange={onChange}
          onClick={onProductChange}
          value={date}
        />
      </div>
    </>
  );
};

export default ProductForm;
