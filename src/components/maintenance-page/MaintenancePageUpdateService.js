import { toast } from 'react-toastify';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

export default async function UpdateProducts(product, setApiError) {
  await HttpHelper(Constants.PRODUCTS_ENDPOINT, 'PUT', {
    id: product.id,
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
  })
    .then((response) => {
      if (response.ok) {
        toast.success(`${product.name} has been successfully edited`);
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    }).catch(() => {
      toast.error(`There is a problem connecting with the database ${product.name} has not been edited`);
      setApiError(true);
    });
}
