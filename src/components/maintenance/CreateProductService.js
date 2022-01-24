import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name makeProduct
 * @description sends a create product request
 * @param {*}
 * @returns
 */
export default async function makeProduct(product) {
  console.log(product);
  await HttpHelper(Constants.CREATE_PRODUCT_ENDPOINT, 'POST', {
    name: product.name,
    sku: product.sku,
    description: product.description,
    demographic: product.demographic,
    category: product.category,
    type: product.type,
    releaseDate: '0001-01-01T00:00:00',
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
  })
    .then((response) => console.log(response.json()))
    .catch(() => {
      /* eslint-disable no-console */
      console.log('Failed to create');
      /* eslint-enable no-console */
    });
}
