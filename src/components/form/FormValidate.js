/**
 * takes in all user inputs in checkout page, and makes an object error messages named errors
 * @param {*} deliveryData
 * @param {*} billingData
 * @param {*} checked
 * @returns
 */
export default function validateForm(deliveryData, billingData, checked) {
  const errors = {};
  if (deliveryData.firstName === undefined || deliveryData.firstName.trim() === '') {
    errors.firstName = 'The first name field is required';
  }
  if (deliveryData.lastName === undefined || deliveryData.lastName.trim() === '') {
    errors.lastName = 'The last name field is required';
  }
  if (deliveryData.street === undefined || deliveryData.street.trim() === '') {
    errors.street = 'The street field is required';
  }
  if (deliveryData.city === undefined || deliveryData.city.trim() === '') {
    errors.city = 'The city field is required';
  }
  if (deliveryData.state === undefined || deliveryData.state.trim() === '') {
    errors.state = 'The state field is required';
  }
  if (deliveryData.zip === undefined || deliveryData.zip.trim() === '') {
    errors.zip = 'The zip field is required';
  }
  if (!checked) {
    if (billingData.billingStreet === undefined || billingData.billingStreet.trim() === '') {
      errors.billingStreet = 'The street field is required';
    }
    if (billingData.billingCity === undefined || billingData.billingCity.trim() === '') {
      errors.billingCity = 'The city field is required';
    }
    if (billingData.billingState === undefined || billingData.billingState.trim() === '') {
      errors.billingState = 'The state field is required';
    }
    if (billingData.billingZip === undefined || billingData.billingZip.trim() === '') {
      errors.billingZip = 'The zip field is required';
    }
  }
  if (billingData.email === undefined || billingData.email.trim() === '') {
    errors.email = 'The email field is required';
  }
  if (billingData.phone === undefined || billingData.phone.trim() === '') {
    errors.phone = 'The phone field is required';
  }
  if (billingData.creditCard === undefined || billingData.creditCard.trim() === '') {
    errors.creditCard = 'The credit card field is required';
  } else {
    if (/[^0-9]/.test(billingData.creditCard)) {
      errors.creditCard = 'credit card numbers may not contain non-numbers';
    }
    const CCN = billingData.creditCard.trim().charAt(0);
    if (CCN !== '4'
      && billingData.creditCard.trim().charAt(0) !== '5') {
      errors.creditCard = 'this credit card provider is not supported';
    }
    if (billingData.creditCard.trim().length < 16 || billingData.creditCard.trim().length > 19) {
      errors.creditCard = 'the credit card number must be between 16 and 19 digits';
    }
  }
  if (billingData.cvv === undefined || billingData.cvv.trim() === '') {
    errors.cvv = 'The cvv field is required';
  } else {
    if (/[^0-9]/.test(billingData.cvv)) {
      errors.cvv = 'the cvv must be only numbers';
    }
    if (billingData.cvv.trim().length !== 3) {
      errors.cvv = 'The cvv field must be exactly 3 digits long';
    }
  }
  if (billingData.cardholder === undefined || billingData.cardholder.trim() === '') {
    errors.cardholder = 'The cardholder field is required';
  }
  if (billingData.expiration === undefined || billingData.expiration.trim() === '') {
    errors.expiration = 'The expiration field is required';
  } else {
    // Date validation
    const today = new Date();
    let todayMM = today.getMonth() + 1;
    const todayYY = today.getFullYear() % 100;
    if (todayMM < 10) {
      todayMM = `0${todayMM}`;
    }
    const expiryMonth = billingData.expiration.trim().substring(0, 2);
    const conector = billingData.expiration.trim().substring(2, 3);
    const expiryYear = billingData.expiration.trim().substring(3);
    if (/[^0-9]/.test(expiryMonth) || /[^0-9]/.test(expiryYear) || conector.trim() !== '/') {
      errors.expiration = 'Dates must match format "MM/YY"';
    } else if (expiryYear < todayYY || (expiryYear === todayYY && expiryMonth <= todayMM)) {
      errors.expiration = 'This card is expired';
    }
  }
  return errors;
}
