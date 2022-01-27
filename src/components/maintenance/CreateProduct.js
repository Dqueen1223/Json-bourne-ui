import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ProductForm from './CreateProductForm';
import makeProduct from './CreateProductService';
import isEmpty from '../form/FormValidation';
// import { useCreatedProduct } from './CreateProductContext';
import styles from './CreateProduct.module.css';

const CreateProduct = () => {
  const [product, setProductData] = useState({});
  const [date, onChange] = useState(new Date());
  const [errors, setErrors] = useState({});

  const onProductChange = (e) => {
    product.releaseDate = date.toISOString();
    setProductData({ ...product, [e.target.id]: e.target.value });

    if (isEmpty(e.target.value)) {
      e.target.placeholder = 'Required';
      setErrors(isEmpty(e.target.value));
    }
  };

  const handleCreate = () => {
    if (product.isActive === 'Active') {
      product.active = true;
    } else {
      product.active = false;
    }

    const newProduct = {
      name: product.name,
      sku: product.sku,
      description: product.description,
      demographic: product.demographic,
      category: product.category,
      type: product.type,
      releaseDate: product.releaseDate,
      primaryColorCode: product.primaryColorCode,
      secondaryColorCode: product.secondaryColorCode,
      styleNumber: product.styleNumber,
      globalProductCode: product.globalProductCode,
      active: product.active,
      brand: product.brand,
      imageSrc: product.imageSrc,
      material: product.material,
      price: product.price,
      quantity: product.quantity
    };

    makeProduct(newProduct);
  };

  const handleSubmit = () => {
    if (Object.keys(errors).length === 0) {
      handleCreate();
    } else {
      toast.error('Some fields contain invalid inputs.');
    }
  };

  return (
    <>
      <div className={styles.productFormContainer}>
        <ProductForm
          className={styles.productForm}
          product={product}
          setProductData={setProductData}
          date={date}
          onChange={onChange}
          onProductChange={onProductChange}
        />
      </div>
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        type="button"
      >
        Submit
      </button>
    </>
  );
};

export default CreateProduct;
