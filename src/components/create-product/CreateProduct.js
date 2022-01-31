import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProductForm from './CreateProductForm';
import makeProduct from './CreateProductService';
import generateErrors from './forms/FormValidation';
import styles from './CreateProduct.module.css';
// import { useErrors } from './forms/CreateProductContext';

const CreateProduct = () => {
  const [product, setProductData] = useState({});
  const [date, onChange] = useState(new Date());
  const [errors, setErrors] = useState({});

  const onProductChange = (e) => {
    product.releaseDate = date.toISOString();
    setProductData({ ...product, [e.target.id]: e.target.value });
    setErrors({});
  };

  const handleErrors = (form) => {
    const idList = Object.keys(form);
    const errorLists = generateErrors(form, idList);

    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorLists[id]) {
        errors[id] = errorLists[id];
      }
    }
    setErrors(errors);
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
    handleErrors(newProduct);
    setProductData(newProduct);
  };

  const handleSubmit = () => {
    handleCreate();
    if (Object.keys(errors).length === 0) {
      makeProduct(product);
    } else {
      toast.error('Some fields contain invalid inputs.');
    }
  };

  return (
    <>
      <form className={styles.productFormContainer}>
        <ProductForm
          product={product}
          setProductData={setProductData}
          date={date}
          onChange={onChange}
          onProductChange={onProductChange}
          handleErrors={handleErrors}
          errors={errors}
        />
      </form>
      <div className={styles.buttons}>
        <button
          className={styles.submitButton}
          onClick={handleSubmit}
          type="button"
        >
          Submit
        </button>
        <Link to="/maintenance">
          <button
            className={styles.cancelButton}
            type="button"
          >
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
};

export default CreateProduct;
