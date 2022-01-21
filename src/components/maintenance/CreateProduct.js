import React, { useState } from 'react';
import ProductForm from './CreateProductForm';
import makeProduct from './CreateProductService';
// import { useCreatedProduct } from './CreateProductContext';
import styles from './CreateProduct.module.css';

const CreateProduct = () => {
  const [product, setProductData] = useState({});
  const [date, onChange] = useState(new Date());
  const onProductChange = (e) => {
    product.releaseDate = date.toString();
    setProductData({ ...product, [e.target.id]: e.target.value });
  };
  const handleCreate = () => {
    if (product.isActive === 'Active') {
      product.isActive = true;
    } else {
      product.isActive = false;
    }
    const newProduct = {
      Name: product.name,
      Sku: product.sku,
      Description: product.description,
      Demographic: product.demographic,
      Category: product.category,
      Type: product.type,
      ReleaseDate: product.releaseDate,
      PrimaryColorCode: product.primaryColorCode,
      SecondaryColorCode: product.secondaryColorCode,
      StyleNumber: product.styleNumber,
      GlobalProductCode: product.globalProductCode,
      Active: product.isActive,
      Brand: product.brand,
      ImageSrc: product.imageSrc,
      Material: product.material,
      Price: 99.02,
      Quantity: Number(product.quantity)
    };
    // const newProduct = {
    //   Name: 'Yeezy socks',
    //   Sku: 'Ye-ye-321',
    //   Description: 'These junts bussin',
    //   Demographic: 'Men',
    //   Category: 'Socks',
    //   Type: 'sock',
    //   ReleaseDate: '2022-02-04',
    //   PrimaryColorCode: '#EDDA74',
    //   SecondaryColorCode: '#EDDA74',
    //   StyleNumber: '234',
    //   GlobalProductCode: '111111',
    //   Active: false,
    //   Brand: 'Yeezy',
    //   ImageSrc: 'yahoo',
    //   Material: 'Plastic, Kroger sack',
    //   Price: 100.99,
    //   Quantity: 50
    // };
    console.log(newProduct);
    makeProduct(newProduct);
  };
  return (
    <div className={styles.productForm}>
      <ProductForm
        product={product}
        setProductData={setProductData}
        date={date}
        onChange={onChange}
        onProductChange={onProductChange}
      />
      <button className={styles.submitButton} onClick={handleCreate} type="button">Submit</button>
    </div>
  );
};

export default CreateProduct;
